var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useEffect, useRef, useState, useContext, useCallback, useImperativeHandle, forwardRef, useMemo, useLayoutEffect, } from "react";
import { BackHandler, LayoutAnimation, Platform, UIManager, View, Keyboard, TouchableWithoutFeedback, } from "react-native";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import sortBy from "lodash.sortBy";
const isAndroid = Platform.OS === "android";
// Convenience method to enable this if it's not already enabled in your app.
// https://reactnative.dev/docs/layoutanimation.html#easeineaseout
const enableExperimentalLayoutAnimation = () => {
    if (isAndroid && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
};
const useKeyboard = () => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => setKeyboardVisible(true));
        const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => setKeyboardVisible(false));
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    return isKeyboardVisible;
};
// TS will complain that we don't hav ea value in createContext but we actually want it null if not inside the provider.
// @ts-ignore
const WalkthroughContext = React.createContext();
const createLogger = (debug) => (number, str) => debug ? console.log(`[WT][${number}]: ${str}`) : undefined;
const WalkthroughDisplayer = () => {
    const context = useContext(WalkthroughContext);
    const { currentSteps, currentStepNumber, backdropColor, transitionDuration, animateNextLayoutChange, isWalkthroughOn, previous, goTo, debug, } = context;
    const logStep = createLogger(debug);
    const lastStepsRef = useRef([]);
    if (isAndroid) {
        const isKeyboardOpen = useKeyboard();
        useEffect(() => isWalkthroughOn
            ? BackHandler.addEventListener("hardwareBackPress", () => {
                if (isKeyboardOpen) {
                    return false;
                }
                else {
                    const backEnabled = currentSteps.filter((s) => s.enableHardwareBack);
                    if (backEnabled.length) {
                        const functions = backEnabled
                            .map((s) => s.enableHardwareBack)
                            .filter((x) => typeof x === "function");
                        if (!functions.length) {
                            // if no function was specified, just do the default previous
                            functions.push(() => previous());
                        }
                        functions.forEach((f) => f({ goTo, previous }));
                    }
                    return true; // return true to block the back button which we always do when the walkthrough is on.
                }
            }).remove
            : () => undefined, [isWalkthroughOn, isKeyboardOpen, currentSteps, previous, goTo]);
    }
    useLayoutEffect(() => {
        const time = new Date();
        // Only mark finish if we are advancing to the next step (going backwards doesn't count as marking off this step).
        // Or if we are at the end and currentStepNumber is undefined
        if (lastStepsRef.current.length &&
            (typeof currentStepNumber !== "number" ||
                lastStepsRef.current[0].number < currentStepNumber)) {
            logStep(lastStepsRef.current[0].number, `Finished at ${time.getTime()}`);
            lastStepsRef.current.forEach((step) => { var _a; return (_a = step.onFinish) === null || _a === void 0 ? void 0 : _a.call(step, { time }); });
        }
        if (currentSteps.length) {
            animateNextLayoutChange(transitionDuration);
            logStep(currentStepNumber, `Started at ${time.getTime()}`);
            currentSteps.forEach((step) => {
                var _a;
                (_a = step.onStart) === null || _a === void 0 ? void 0 : _a.call(step, { time });
                step.measureMask();
            });
            // After we've animated to the next masks, we measure the position of the masks again, in case we need to readjust the position.
            // onLayout doesn't always catch the elements in the right spot.
            // setTimeout(() => { currentSteps.forEach(step => step.measureMask()); }, 2000)
        }
        lastStepsRef.current = currentSteps;
    }, 
    // Need to do it based on currentSteps, since that changes when screens mount and things get added to the steps.
    [currentSteps.map((s) => s.identifier).join("|")]);
    const overlayProps = useMemo(() => {
        // We build the views from top to bottom
        const sortedCurrentSteps = sortBy(currentSteps, (step) => step.mask.y);
        const arr = [];
        let markerY = 0;
        sortedCurrentSteps.forEach((step, i) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const la = step.layoutAdjustments;
            const mask = la
                ? Object.assign(Object.assign({}, step.mask), { x: ((_a = la.x) !== null && _a !== void 0 ? _a : step.mask.x) + ((_b = la.addX) !== null && _b !== void 0 ? _b : -(la.addPadding || 0)), y: ((_c = la.y) !== null && _c !== void 0 ? _c : step.mask.y) + ((_d = la.addY) !== null && _d !== void 0 ? _d : -(la.addPadding || 0)), width: ((_e = la.width) !== null && _e !== void 0 ? _e : step.mask.width) +
                        ((_f = la.addWidth) !== null && _f !== void 0 ? _f : (la.addPadding || 0) * 2), height: ((_g = la.height) !== null && _g !== void 0 ? _g : step.mask.height) +
                        ((_h = la.addHeight) !== null && _h !== void 0 ? _h : (la.addPadding || 0) * 2) }) : step.mask;
            // Rectange on the top across the whole screen
            arr.push({
                key: `topRect-${i}`,
                onPress: step.onPressBackdrop,
                style: Object.assign({ backgroundColor: backdropColor, top: markerY, left: 0, right: 0, height: mask.y - markerY }, (debug ? { borderWidth: 1, borderColor: "red" } : {})),
            });
            // Rectange on the left side.
            arr.push({
                key: `leftRect-${i}`,
                onPress: step.onPressBackdrop,
                style: Object.assign({ backgroundColor: backdropColor, top: mask.y, left: 0, width: mask.x, height: mask.height }, (debug ? { borderWidth: 1, borderColor: "blue" } : {})),
            });
            // Rectange on the right side.
            arr.push({
                key: `rightRect-${i}`,
                onPress: step.onPressBackdrop,
                style: Object.assign({ backgroundColor: backdropColor, top: mask.y, left: mask.x + mask.width, right: 0, height: mask.height }, (debug ? { borderWidth: 1, borderColor: "green" } : {})),
            });
            // The bottom rectange up to the next component (or bottom of the screen)
            const nextStep = i + 1 < sortedCurrentSteps.length
                ? sortedCurrentSteps[i + 1]
                : undefined;
            if (!nextStep) {
                const top = mask.y + mask.height;
                arr.push({
                    // We only have one of these (at the end) so want to give this the same key so it can be reused in the animation.
                    key: `bottomRect`,
                    onPress: step.onPressBackdrop,
                    style: Object.assign({ backgroundColor: backdropColor, top, left: 0, right: 0, bottom: 0 }, (debug ? { borderWidth: 1, borderColor: "orange" } : {})),
                });
            }
            // If we aren't allowing interaction on the highlighted region, then just put a view over that as well so its not pressable.
            if (!mask.allowInteraction) {
                arr.push({
                    key: `coverRect-${i}`,
                    onPress: step.onPressMask,
                    style: Object.assign(Object.assign({ top: mask.y, left: mask.x, width: mask.width, height: mask.height }, (isAndroid
                        ? { backgroundColor: "#FFFFFF01", opacity: 0.1 }
                        : {})), (debug
                        ? {
                            borderWidth: 1,
                            borderColor: "forestgreen",
                            backgroundColor: "#0000FF33",
                        }
                        : {})),
                });
            }
            markerY = mask.y + mask.height;
        });
        return arr;
    }, [currentSteps, backdropColor, debug]);
    return (React.createElement(React.Fragment, null,
        overlayProps.map(({ key, onPress, style }) => {
            let content = (React.createElement(View, { key: key, style: [style, { position: "absolute" }] }));
            if (onPress) {
                content = (React.createElement(TouchableWithoutFeedback, { key: key, onPress: () => onPress(context) }, content));
            }
            return content;
        }),
        currentSteps.map((s) => s.OverlayComponent ? (React.createElement(s.OverlayComponent, Object.assign({ key: s.overlayComponentKey, step: s }, (s.overlayComponentProps || {}), context))) : null)));
};
const defaultAnimateNextLayoutChange = (duration) => LayoutAnimation.configureNext({
    duration,
    create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
    },
    update: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY,
    },
});
const WalkthroughProvider = forwardRef(({ useIsFocused = () => true, transitionDuration: _transitionDuration = 300, backdropColor: _backdropColor = "#000000DA", animateNextLayoutChange = defaultAnimateNextLayoutChange, enableExperimentalLayoutAnimation: _enableExperimentalLayoutAnimation, debug, children, }, ref) => {
    const [transitionDuration, setTransitionDuration] = useState(_transitionDuration);
    const [backdropColor, setBackdropColor] = useState(_backdropColor);
    const [steps, setSteps] = useState([]);
    const [currentStepNumber, setCurrentStepNumber] = useState();
    const isWalkthroughOn = Boolean(typeof currentStepNumber === "number");
    const isReady = useMemo(() => steps.some((s) => s.number === 1), [steps]);
    if (_enableExperimentalLayoutAnimation) {
        useEffect(enableExperimentalLayoutAnimation, []);
    }
    const currentSteps = useMemo(() => isWalkthroughOn
        ? steps.filter((s) => s.number === currentStepNumber)
        : [], [isWalkthroughOn, currentStepNumber, steps]);
    const registerStep = useCallback((step) => setSteps((steps) => sortBy([step, ...steps.filter((s) => s.identifier !== step.identifier)], "number")), []);
    const updateStep = useCallback((identifier, step) => setSteps((steps) => {
        const oldStep = steps.find((s) => s.identifier === identifier);
        return sortBy([
            Object.assign(Object.assign({}, oldStep), step),
            ...steps.filter((s) => s.identifier !== identifier),
        ], "number");
    }), []);
    const next = useCallback(() => setCurrentStepNumber((x) => (x || 0) + 1), [setCurrentStepNumber]);
    const previous = useCallback(() => setCurrentStepNumber((x) => (x ? x - 1 : 0)), [setCurrentStepNumber]);
    const goTo = setCurrentStepNumber;
    const start = useCallback(() => {
        if (steps.length) {
            const step = steps[0]; // already ordered so take the first one
            setCurrentStepNumber(step.number);
        }
    }, [steps, setCurrentStepNumber]);
    const stop = useCallback(() => setCurrentStepNumber(undefined), [steps, setCurrentStepNumber]);
    const functions = {
        registerStep,
        updateStep,
        start,
        stop,
        next,
        previous,
        goTo,
        setTransitionDuration,
        setBackdropColor,
    };
    useImperativeHandle(ref, () => functions);
    return (React.createElement(WalkthroughContext.Provider, { value: Object.assign(Object.assign({}, functions), { isWalkthroughOn,
            currentStepNumber,
            currentSteps, allSteps: steps, // want to be called "allSteps" so doesn't sound too close to "step".
            debug,
            animateNextLayoutChange,
            transitionDuration,
            backdropColor,
            useIsFocused,
            isReady }) },
        children,
        Boolean(steps.length) && React.createElement(WalkthroughDisplayer, null)));
});
const useWalkthrough = () => {
    const context = useContext(WalkthroughContext);
    if (!context) {
        throw "Make sure that this is called as a child of a Walkthrough component.";
    }
    return context;
};
const useWalkthroughStep = (_a) => {
    var { fullScreen, identifier, number } = _a, props = __rest(_a, ["fullScreen", "identifier", "number"]);
    const context = useWalkthrough();
    const targetRef = useRef();
    // On unmount, make sure to empty the targetRef. It might still be stored in the "steps" on the WalkthroughProvider.
    useEffect(() => () => {
        targetRef.current = undefined;
    }, []);
    // Better to provide an identifier, especially if you have multiple overlays at a single Step, then this
    // won't work.
    identifier = identifier || number.toString();
    const { registerStep, allSteps, currentStepNumber, debug, stop, useIsFocused, } = context;
    const step = useMemo(() => allSteps.find((s) => s.identifier === identifier), [identifier, allSteps]);
    const isFocused = useIsFocused();
    const wasVisibleRef = useRef(false);
    useEffect(() => {
        if (currentStepNumber === number) {
            if (isFocused) {
                wasVisibleRef.current = true;
                // If we had this step visible on a screen, but now for some reason not anymore (maybe they navigated for a notification)
                // then we basically reset the tutorial and stop it so it doesn't stay on the screen as they navigate.
            }
            else if (wasVisibleRef.current) {
                stop();
            }
        }
    }, [currentStepNumber, isFocused]);
    // https://stackoverflow.com/a/64882955/7180620
    const registerStepWithProps = useCallback((maskProps) => {
        const _a = propsRef.current, { maskAllowInteraction } = _a, stepProps = __rest(_a, ["maskAllowInteraction"]);
        logStep(stepProps.number, `Setting mask: ${JSON.stringify(maskProps)}`);
        registerStep(Object.assign(Object.assign({}, stepProps), { mask: Object.assign({ allowInteraction: maskAllowInteraction }, maskProps) }));
    }, [registerStep]);
    const onMeasure = useCallback((_, __, width, height, x, y) => registerStepWithProps({ width, height, x, y }), [registerStepWithProps]);
    const logStep = createLogger(debug);
    const propsRef = useRef();
    useEffect(() => {
        propsRef.current = Object.assign({ identifier,
            number, measureMask: () => {
                if (targetRef.current) {
                    targetRef.current.measure((_, __, width, height, x, y) => {
                        const newPosition = step &&
                            // If component is unmounted, then this will be undefined
                            width &&
                            height &&
                            x &&
                            y &&
                            (step.mask.x !== x ||
                                step.mask.y !== y ||
                                step.mask.width !== width ||
                                step.mask.height !== height);
                        if (newPosition) {
                            registerStepWithProps({ width, height, x, y });
                        }
                    });
                }
            }, overlayComponentKey: identifier }, props);
    });
    const { width, height } = useSafeAreaFrame();
    useEffect(() => {
        if (fullScreen && width && height) {
            // We basically put a line at the bottom of the screen so that we blank out the whole screen.
            registerStepWithProps({ x: 0, y: height, width, height });
        }
    }, [fullScreen, registerStepWithProps, width, height]);
    const layoutLockRef = useRef(false);
    const onLayout = useCallback((event) => {
        if (!layoutLockRef.current) {
            targetRef.current = event.target; // store it to measure later
            event.target.measure(onMeasure);
        }
        layoutLockRef.current = props.layoutLock;
    }, [onMeasure, props.layoutLock]);
    return Object.assign(Object.assign({}, context), { isVisible: number === currentStepNumber, onLayout,
        onMeasure,
        step });
};
export { enableExperimentalLayoutAnimation, WalkthroughProvider, useWalkthrough, useWalkthroughStep, };
//# sourceMappingURL=index.js.map