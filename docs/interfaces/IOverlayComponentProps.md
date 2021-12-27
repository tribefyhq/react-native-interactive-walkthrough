[react-native-interactive-walkthrough](../README.md) / [Exports](../modules.md) / IOverlayComponentProps

# Interface: IOverlayComponentProps

## Hierarchy

- [`IWalkthroughContext`](IWalkthroughContext.md)

  ↳ **`IOverlayComponentProps`**

## Table of contents

### Properties

- [allSteps](IOverlayComponentProps.md#allsteps)
- [backdropColor](IOverlayComponentProps.md#backdropcolor)
- [currentStepNumber](IOverlayComponentProps.md#currentstepnumber)
- [currentSteps](IOverlayComponentProps.md#currentsteps)
- [debug](IOverlayComponentProps.md#debug)
- [isReady](IOverlayComponentProps.md#isready)
- [isWalkthroughOn](IOverlayComponentProps.md#iswalkthroughon)
- [step](IOverlayComponentProps.md#step)
- [transitionDuration](IOverlayComponentProps.md#transitionduration)

### Methods

- [animateNextLayoutChange](IOverlayComponentProps.md#animatenextlayoutchange)
- [goTo](IOverlayComponentProps.md#goto)
- [next](IOverlayComponentProps.md#next)
- [previous](IOverlayComponentProps.md#previous)
- [registerStep](IOverlayComponentProps.md#registerstep)
- [setBackdropColor](IOverlayComponentProps.md#setbackdropcolor)
- [setTransitionDuration](IOverlayComponentProps.md#settransitionduration)
- [start](IOverlayComponentProps.md#start)
- [stop](IOverlayComponentProps.md#stop)
- [updateStep](IOverlayComponentProps.md#updatestep)
- [useIsFocused](IOverlayComponentProps.md#useisfocused)

## Properties

### allSteps

• **allSteps**: [`IWalkthroughStep`](IWalkthroughStep.md)[]

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[allSteps](IWalkthroughContext.md#allsteps)

#### Defined in

[index.tsx:81](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L81)

___

### backdropColor

• **backdropColor**: `string`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[backdropColor](IWalkthroughContext.md#backdropcolor)

#### Defined in

[index.tsx:82](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L82)

___

### currentStepNumber

• **currentStepNumber**: `number`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[currentStepNumber](IWalkthroughContext.md#currentstepnumber)

#### Defined in

[index.tsx:88](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L88)

___

### currentSteps

• **currentSteps**: [`IWalkthroughStep`](IWalkthroughStep.md)[]

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[currentSteps](IWalkthroughContext.md#currentsteps)

#### Defined in

[index.tsx:80](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L80)

___

### debug

• **debug**: `boolean`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[debug](IWalkthroughContext.md#debug)

#### Defined in

[index.tsx:85](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L85)

___

### isReady

• **isReady**: `boolean`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[isReady](IWalkthroughContext.md#isready)

#### Defined in

[index.tsx:87](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L87)

___

### isWalkthroughOn

• **isWalkthroughOn**: `boolean`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[isWalkthroughOn](IWalkthroughContext.md#iswalkthroughon)

#### Defined in

[index.tsx:86](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L86)

___

### step

• **step**: [`IWalkthroughStep`](IWalkthroughStep.md)

#### Defined in

[index.tsx:105](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L105)

___

### transitionDuration

• **transitionDuration**: `number`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[transitionDuration](IWalkthroughContext.md#transitionduration)

#### Defined in

[index.tsx:83](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L83)

## Methods

### animateNextLayoutChange

▸ **animateNextLayoutChange**(`duration?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration?` | `number` |

#### Returns

`any`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[animateNextLayoutChange](IWalkthroughContext.md#animatenextlayoutchange)

#### Defined in

[index.tsx:84](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L84)

___

### goTo

▸ **goTo**(`number`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`any`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[goTo](IWalkthroughContext.md#goto)

#### Defined in

[index.tsx:73](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L73)

___

### next

▸ **next**(): `any`

#### Returns

`any`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[next](IWalkthroughContext.md#next)

#### Defined in

[index.tsx:72](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L72)

___

### previous

▸ **previous**(): `any`

#### Returns

`any`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[previous](IWalkthroughContext.md#previous)

#### Defined in

[index.tsx:74](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L74)

___

### registerStep

▸ **registerStep**(`step`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | [`IWalkthroughStep`](IWalkthroughStep.md) |

#### Returns

`any`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[registerStep](IWalkthroughContext.md#registerstep)

#### Defined in

[index.tsx:68](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L68)

___

### setBackdropColor

▸ **setBackdropColor**(`color`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`any`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[setBackdropColor](IWalkthroughContext.md#setbackdropcolor)

#### Defined in

[index.tsx:76](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L76)

___

### setTransitionDuration

▸ **setTransitionDuration**(`duration`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |

#### Returns

`any`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[setTransitionDuration](IWalkthroughContext.md#settransitionduration)

#### Defined in

[index.tsx:75](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L75)

___

### start

▸ **start**(): `any`

#### Returns

`any`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[start](IWalkthroughContext.md#start)

#### Defined in

[index.tsx:70](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L70)

___

### stop

▸ **stop**(): `any`

#### Returns

`any`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[stop](IWalkthroughContext.md#stop)

#### Defined in

[index.tsx:71](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L71)

___

### updateStep

▸ **updateStep**(`identifier`, `step`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `any` |
| `step` | `Partial`<[`IWalkthroughStep`](IWalkthroughStep.md)\> |

#### Returns

`any`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[updateStep](IWalkthroughContext.md#updatestep)

#### Defined in

[index.tsx:69](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L69)

___

### useIsFocused

▸ `Optional` **useIsFocused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[IWalkthroughContext](IWalkthroughContext.md).[useIsFocused](IWalkthroughContext.md#useisfocused)

#### Defined in

[index.tsx:89](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L89)
