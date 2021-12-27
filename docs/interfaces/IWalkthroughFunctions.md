[react-native-interactive-walkthrough](../README.md) / [Exports](../modules.md) / IWalkthroughFunctions

# Interface: IWalkthroughFunctions

## Hierarchy

- **`IWalkthroughFunctions`**

  ↳ [`IWalkthroughContext`](IWalkthroughContext.md)

## Table of contents

### Methods

- [goTo](IWalkthroughFunctions.md#goto)
- [next](IWalkthroughFunctions.md#next)
- [previous](IWalkthroughFunctions.md#previous)
- [registerStep](IWalkthroughFunctions.md#registerstep)
- [setBackdropColor](IWalkthroughFunctions.md#setbackdropcolor)
- [setTransitionDuration](IWalkthroughFunctions.md#settransitionduration)
- [start](IWalkthroughFunctions.md#start)
- [stop](IWalkthroughFunctions.md#stop)
- [updateStep](IWalkthroughFunctions.md#updatestep)

## Methods

### goTo

▸ **goTo**(`number`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`any`

#### Defined in

[index.tsx:73](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L73)

___

### next

▸ **next**(): `any`

#### Returns

`any`

#### Defined in

[index.tsx:72](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L72)

___

### previous

▸ **previous**(): `any`

#### Returns

`any`

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

#### Defined in

[index.tsx:75](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L75)

___

### start

▸ **start**(): `any`

#### Returns

`any`

#### Defined in

[index.tsx:70](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L70)

___

### stop

▸ **stop**(): `any`

#### Returns

`any`

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

#### Defined in

[index.tsx:69](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L69)
