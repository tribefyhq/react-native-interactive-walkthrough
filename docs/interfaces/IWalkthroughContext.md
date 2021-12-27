[react-native-interactive-walkthrough](../README.md) / [Exports](../modules.md) / IWalkthroughContext

# Interface: IWalkthroughContext

## Hierarchy

- [`IWalkthroughFunctions`](IWalkthroughFunctions.md)

  ↳ **`IWalkthroughContext`**

  ↳↳ [`IOverlayComponentProps`](IOverlayComponentProps.md)

## Table of contents

### Properties

- [allSteps](IWalkthroughContext.md#allsteps)
- [backdropColor](IWalkthroughContext.md#backdropcolor)
- [currentStepNumber](IWalkthroughContext.md#currentstepnumber)
- [currentSteps](IWalkthroughContext.md#currentsteps)
- [debug](IWalkthroughContext.md#debug)
- [isReady](IWalkthroughContext.md#isready)
- [isWalkthroughOn](IWalkthroughContext.md#iswalkthroughon)
- [transitionDuration](IWalkthroughContext.md#transitionduration)

### Methods

- [animateNextLayoutChange](IWalkthroughContext.md#animatenextlayoutchange)
- [goTo](IWalkthroughContext.md#goto)
- [next](IWalkthroughContext.md#next)
- [previous](IWalkthroughContext.md#previous)
- [registerStep](IWalkthroughContext.md#registerstep)
- [setBackdropColor](IWalkthroughContext.md#setbackdropcolor)
- [setTransitionDuration](IWalkthroughContext.md#settransitionduration)
- [start](IWalkthroughContext.md#start)
- [stop](IWalkthroughContext.md#stop)
- [updateStep](IWalkthroughContext.md#updatestep)
- [useIsFocused](IWalkthroughContext.md#useisfocused)

## Properties

### allSteps

• **allSteps**: [`IWalkthroughStep`](IWalkthroughStep.md)[]

#### Defined in

[index.tsx:81](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L81)

___

### backdropColor

• **backdropColor**: `string`

#### Defined in

[index.tsx:82](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L82)

___

### currentStepNumber

• **currentStepNumber**: `number`

#### Defined in

[index.tsx:88](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L88)

___

### currentSteps

• **currentSteps**: [`IWalkthroughStep`](IWalkthroughStep.md)[]

#### Defined in

[index.tsx:80](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L80)

___

### debug

• **debug**: `boolean`

#### Defined in

[index.tsx:85](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L85)

___

### isReady

• **isReady**: `boolean`

#### Defined in

[index.tsx:87](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L87)

___

### isWalkthroughOn

• **isWalkthroughOn**: `boolean`

#### Defined in

[index.tsx:86](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L86)

___

### transitionDuration

• **transitionDuration**: `number`

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

[IWalkthroughFunctions](IWalkthroughFunctions.md).[goTo](IWalkthroughFunctions.md#goto)

#### Defined in

[index.tsx:73](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L73)

___

### next

▸ **next**(): `any`

#### Returns

`any`

#### Inherited from

[IWalkthroughFunctions](IWalkthroughFunctions.md).[next](IWalkthroughFunctions.md#next)

#### Defined in

[index.tsx:72](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L72)

___

### previous

▸ **previous**(): `any`

#### Returns

`any`

#### Inherited from

[IWalkthroughFunctions](IWalkthroughFunctions.md).[previous](IWalkthroughFunctions.md#previous)

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

[IWalkthroughFunctions](IWalkthroughFunctions.md).[registerStep](IWalkthroughFunctions.md#registerstep)

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

[IWalkthroughFunctions](IWalkthroughFunctions.md).[setBackdropColor](IWalkthroughFunctions.md#setbackdropcolor)

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

[IWalkthroughFunctions](IWalkthroughFunctions.md).[setTransitionDuration](IWalkthroughFunctions.md#settransitionduration)

#### Defined in

[index.tsx:75](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L75)

___

### start

▸ **start**(): `any`

#### Returns

`any`

#### Inherited from

[IWalkthroughFunctions](IWalkthroughFunctions.md).[start](IWalkthroughFunctions.md#start)

#### Defined in

[index.tsx:70](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L70)

___

### stop

▸ **stop**(): `any`

#### Returns

`any`

#### Inherited from

[IWalkthroughFunctions](IWalkthroughFunctions.md).[stop](IWalkthroughFunctions.md#stop)

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

[IWalkthroughFunctions](IWalkthroughFunctions.md).[updateStep](IWalkthroughFunctions.md#updatestep)

#### Defined in

[index.tsx:69](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L69)

___

### useIsFocused

▸ `Optional` **useIsFocused**(): `boolean`

#### Returns

`boolean`

#### Defined in

[index.tsx:89](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L89)
