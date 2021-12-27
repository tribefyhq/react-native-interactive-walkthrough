[react-native-interactive-walkthrough](README.md) / Exports

# react-native-interactive-walkthrough

## Table of contents

### Interfaces

- [IOverlayComponentProps](interfaces/IOverlayComponentProps.md)
- [IUseWalkthroughStep](interfaces/IUseWalkthroughStep.md)
- [IWalkthroughCallback](interfaces/IWalkthroughCallback.md)
- [IWalkthroughContext](interfaces/IWalkthroughContext.md)
- [IWalkthroughFunctions](interfaces/IWalkthroughFunctions.md)
- [IWalkthroughProvider](interfaces/IWalkthroughProvider.md)
- [IWalkthroughStep](interfaces/IWalkthroughStep.md)
- [IWalkthroughStepMask](interfaces/IWalkthroughStepMask.md)

### Variables

- [WalkthroughProvider](modules.md#walkthroughprovider)

### Functions

- [enableExperimentalLayoutAnimation](modules.md#enableexperimentallayoutanimation)
- [useWalkthrough](modules.md#usewalkthrough)
- [useWalkthroughStep](modules.md#usewalkthroughstep)

## Variables

### WalkthroughProvider

• **WalkthroughProvider**: `ForwardRefExoticComponent`<[`IWalkthroughProvider`](interfaces/IWalkthroughProvider.md) & `RefAttributes`<[`IWalkthroughFunctions`](interfaces/IWalkthroughFunctions.md)\>\>

#### Defined in

[index.tsx:413](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L413)

## Functions

### enableExperimentalLayoutAnimation

▸ `Const` **enableExperimentalLayoutAnimation**(): `void`

#### Returns

`void`

#### Defined in

[index.tsx:29](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L29)

___

### useWalkthrough

▸ `Const` **useWalkthrough**(): [`IWalkthroughContext`](interfaces/IWalkthroughContext.md)

#### Returns

[`IWalkthroughContext`](interfaces/IWalkthroughContext.md)

#### Defined in

[index.tsx:538](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L538)

___

### useWalkthroughStep

▸ `Const` **useWalkthroughStep**(`__namedParameters`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`IUseWalkthroughStep`](interfaces/IUseWalkthroughStep.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `allSteps` | [`IWalkthroughStep`](interfaces/IWalkthroughStep.md)[] |
| `backdropColor` | `string` |
| `currentStepNumber` | `number` |
| `currentSteps` | [`IWalkthroughStep`](interfaces/IWalkthroughStep.md)[] |
| `debug` | `boolean` |
| `isReady` | `boolean` |
| `isVisible` | `boolean` |
| `isWalkthroughOn` | `boolean` |
| `onLayout` | (`event`: `any`) => `void` |
| `onMeasure` | (`_`: `any`, `__`: `any`, `width`: `any`, `height`: `any`, `x`: `any`, `y`: `any`) => `void` |
| `step` | [`IWalkthroughStep`](interfaces/IWalkthroughStep.md) |
| `transitionDuration` | `number` |
| `animateNextLayoutChange` | (`duration?`: `number`) => `any` |
| `goTo` | (`number`: `number`) => `any` |
| `next` | () => `any` |
| `previous` | () => `any` |
| `registerStep` | (`step`: [`IWalkthroughStep`](interfaces/IWalkthroughStep.md)) => `any` |
| `setBackdropColor` | (`color`: `string`) => `any` |
| `setTransitionDuration` | (`duration`: `number`) => `any` |
| `start` | () => `any` |
| `stop` | () => `any` |
| `updateStep` | (`identifier`: `any`, `step`: `Partial`<[`IWalkthroughStep`](interfaces/IWalkthroughStep.md)\>) => `any` |
| `useIsFocused?` | () => `boolean` |

#### Defined in

[index.tsx:555](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L555)
