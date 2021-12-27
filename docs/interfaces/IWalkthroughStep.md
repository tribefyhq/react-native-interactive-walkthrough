[react-native-interactive-walkthrough](../README.md) / [Exports](../modules.md) / IWalkthroughStep

# Interface: IWalkthroughStep

## Table of contents

### Properties

- [OverlayComponent](IWalkthroughStep.md#overlaycomponent)
- [enableHardwareBack](IWalkthroughStep.md#enablehardwareback)
- [fullScreen](IWalkthroughStep.md#fullscreen)
- [identifier](IWalkthroughStep.md#identifier)
- [layoutAdjustments](IWalkthroughStep.md#layoutadjustments)
- [layoutLock](IWalkthroughStep.md#layoutlock)
- [mask](IWalkthroughStep.md#mask)
- [number](IWalkthroughStep.md#number)
- [onPressBackdrop](IWalkthroughStep.md#onpressbackdrop)
- [onPressMask](IWalkthroughStep.md#onpressmask)
- [overlayComponentKey](IWalkthroughStep.md#overlaycomponentkey)
- [overlayComponentProps](IWalkthroughStep.md#overlaycomponentprops)

### Methods

- [measureMask](IWalkthroughStep.md#measuremask)
- [onBackground](IWalkthroughStep.md#onbackground)
- [onFinish](IWalkthroughStep.md#onfinish)
- [onStart](IWalkthroughStep.md#onstart)

## Properties

### OverlayComponent

• `Optional` **OverlayComponent**: `ComponentType`<[`IOverlayComponentProps`](IOverlayComponentProps.md)\>

#### Defined in

[index.tsx:124](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L124)

___

### enableHardwareBack

• `Optional` **enableHardwareBack**: `boolean` \| `EnableHardwareBackFunction`

#### Defined in

[index.tsx:130](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L130)

___

### fullScreen

• `Optional` **fullScreen**: `boolean`

#### Defined in

[index.tsx:125](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L125)

___

### identifier

• **identifier**: `string`

#### Defined in

[index.tsx:121](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L121)

___

### layoutAdjustments

• `Optional` **layoutAdjustments**: `ILayoutAdjustments`

#### Defined in

[index.tsx:126](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L126)

___

### layoutLock

• `Optional` **layoutLock**: `boolean`

#### Defined in

[index.tsx:129](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L129)

___

### mask

• **mask**: [`IWalkthroughStepMask`](IWalkthroughStepMask.md)

#### Defined in

[index.tsx:136](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L136)

___

### number

• **number**: `number`

#### Defined in

[index.tsx:120](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L120)

___

### onPressBackdrop

• `Optional` **onPressBackdrop**: `OnPressWithContextType`

#### Defined in

[index.tsx:135](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L135)

___

### onPressMask

• `Optional` **onPressMask**: `OnPressWithContextType`

#### Defined in

[index.tsx:134](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L134)

___

### overlayComponentKey

• **overlayComponentKey**: `string`

#### Defined in

[index.tsx:122](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L122)

___

### overlayComponentProps

• `Optional` **overlayComponentProps**: `any`

#### Defined in

[index.tsx:123](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L123)

## Methods

### measureMask

▸ **measureMask**(): `any`

#### Returns

`any`

#### Defined in

[index.tsx:137](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L137)

___

### onBackground

▸ `Optional` **onBackground**(): `any`

#### Returns

`any`

#### Defined in

[index.tsx:133](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L133)

___

### onFinish

▸ `Optional` **onFinish**(`props`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IWalkthroughCallback`](IWalkthroughCallback.md) |

#### Returns

`any`

#### Defined in

[index.tsx:132](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L132)

___

### onStart

▸ `Optional` **onStart**(`props`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IWalkthroughCallback`](IWalkthroughCallback.md) |

#### Returns

`any`

#### Defined in

[index.tsx:131](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L131)
