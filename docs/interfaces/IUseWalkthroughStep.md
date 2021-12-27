[react-native-interactive-walkthrough](../README.md) / [Exports](../modules.md) / IUseWalkthroughStep

# Interface: IUseWalkthroughStep

## Hierarchy

- `PartialBy`<`IUseWalkthroughStepStrict`, ``"identifier"`` \| ``"overlayComponentKey"`` \| ``"measureMask"``\>

  ↳ **`IUseWalkthroughStep`**

## Table of contents

### Properties

- [OverlayComponent](IUseWalkthroughStep.md#overlaycomponent)
- [enableHardwareBack](IUseWalkthroughStep.md#enablehardwareback)
- [fullScreen](IUseWalkthroughStep.md#fullscreen)
- [identifier](IUseWalkthroughStep.md#identifier)
- [layoutAdjustments](IUseWalkthroughStep.md#layoutadjustments)
- [layoutLock](IUseWalkthroughStep.md#layoutlock)
- [maskAllowInteraction](IUseWalkthroughStep.md#maskallowinteraction)
- [number](IUseWalkthroughStep.md#number)
- [onPressBackdrop](IUseWalkthroughStep.md#onpressbackdrop)
- [onPressMask](IUseWalkthroughStep.md#onpressmask)
- [overlayComponentKey](IUseWalkthroughStep.md#overlaycomponentkey)
- [overlayComponentProps](IUseWalkthroughStep.md#overlaycomponentprops)

### Methods

- [measureMask](IUseWalkthroughStep.md#measuremask)
- [onBackground](IUseWalkthroughStep.md#onbackground)
- [onFinish](IUseWalkthroughStep.md#onfinish)
- [onStart](IUseWalkthroughStep.md#onstart)

## Properties

### OverlayComponent

• `Optional` **OverlayComponent**: `ComponentType`<[`IOverlayComponentProps`](IOverlayComponentProps.md)\>

#### Inherited from

PartialBy.OverlayComponent

#### Defined in

[index.tsx:124](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L124)

___

### enableHardwareBack

• `Optional` **enableHardwareBack**: `boolean` \| `EnableHardwareBackFunction`

#### Inherited from

PartialBy.enableHardwareBack

#### Defined in

[index.tsx:130](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L130)

___

### fullScreen

• `Optional` **fullScreen**: `boolean`

#### Inherited from

PartialBy.fullScreen

#### Defined in

[index.tsx:125](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L125)

___

### identifier

• `Optional` **identifier**: `string`

#### Inherited from

PartialBy.identifier

#### Defined in

[index.tsx:121](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L121)

___

### layoutAdjustments

• `Optional` **layoutAdjustments**: `ILayoutAdjustments`

#### Inherited from

PartialBy.layoutAdjustments

#### Defined in

[index.tsx:126](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L126)

___

### layoutLock

• `Optional` **layoutLock**: `boolean`

#### Inherited from

PartialBy.layoutLock

#### Defined in

[index.tsx:129](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L129)

___

### maskAllowInteraction

• `Optional` **maskAllowInteraction**: `boolean`

#### Inherited from

PartialBy.maskAllowInteraction

#### Defined in

[index.tsx:547](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L547)

___

### number

• **number**: `number`

#### Inherited from

PartialBy.number

#### Defined in

[index.tsx:120](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L120)

___

### onPressBackdrop

• `Optional` **onPressBackdrop**: `OnPressWithContextType`

#### Inherited from

PartialBy.onPressBackdrop

#### Defined in

[index.tsx:135](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L135)

___

### onPressMask

• `Optional` **onPressMask**: `OnPressWithContextType`

#### Inherited from

PartialBy.onPressMask

#### Defined in

[index.tsx:134](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L134)

___

### overlayComponentKey

• `Optional` **overlayComponentKey**: `string`

#### Inherited from

PartialBy.overlayComponentKey

#### Defined in

[index.tsx:122](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L122)

___

### overlayComponentProps

• `Optional` **overlayComponentProps**: `any`

#### Inherited from

PartialBy.overlayComponentProps

#### Defined in

[index.tsx:123](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L123)

## Methods

### measureMask

▸ `Optional` **measureMask**(): `any`

#### Returns

`any`

#### Inherited from

PartialBy.measureMask

#### Defined in

[index.tsx:137](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L137)

___

### onBackground

▸ `Optional` **onBackground**(): `any`

#### Returns

`any`

#### Inherited from

PartialBy.onBackground

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

#### Inherited from

PartialBy.onFinish

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

#### Inherited from

PartialBy.onStart

#### Defined in

[index.tsx:131](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L131)
