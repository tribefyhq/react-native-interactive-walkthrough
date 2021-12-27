[react-native-interactive-walkthrough](../README.md) / [Exports](../modules.md) / IWalkthroughProvider

# Interface: IWalkthroughProvider

## Hierarchy

- `Partial`<`Pick`<[`IWalkthroughContext`](IWalkthroughContext.md), ``"useIsFocused"`` \| ``"transitionDuration"`` \| ``"backdropColor"`` \| ``"animateNextLayoutChange"`` \| ``"debug"``\>\>

  ↳ **`IWalkthroughProvider`**

## Table of contents

### Properties

- [backdropColor](IWalkthroughProvider.md#backdropcolor)
- [children](IWalkthroughProvider.md#children)
- [debug](IWalkthroughProvider.md#debug)
- [enableExperimentalLayoutAnimation](IWalkthroughProvider.md#enableexperimentallayoutanimation)
- [transitionDuration](IWalkthroughProvider.md#transitionduration)

### Methods

- [animateNextLayoutChange](IWalkthroughProvider.md#animatenextlayoutchange)
- [useIsFocused](IWalkthroughProvider.md#useisfocused)

## Properties

### backdropColor

• `Optional` **backdropColor**: `string`

#### Inherited from

Partial.backdropColor

#### Defined in

[index.tsx:82](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L82)

___

### children

• `Optional` **children**: `any`

#### Defined in

[index.tsx:411](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L411)

___

### debug

• `Optional` **debug**: `boolean`

#### Inherited from

Partial.debug

#### Defined in

[index.tsx:85](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L85)

___

### enableExperimentalLayoutAnimation

• `Optional` **enableExperimentalLayoutAnimation**: `boolean`

#### Defined in

[index.tsx:410](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L410)

___

### transitionDuration

• `Optional` **transitionDuration**: `number`

#### Inherited from

Partial.transitionDuration

#### Defined in

[index.tsx:83](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L83)

## Methods

### animateNextLayoutChange

▸ `Optional` **animateNextLayoutChange**(`duration?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration?` | `number` |

#### Returns

`any`

#### Inherited from

Partial.animateNextLayoutChange

#### Defined in

[index.tsx:84](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L84)

___

### useIsFocused

▸ `Optional` **useIsFocused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Partial.useIsFocused

#### Defined in

[index.tsx:89](https://github.com/tribefyhq/react-native-walkthrough/blob/d3e0653/src/index.tsx#L89)
