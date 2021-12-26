# React Native Walkthrough

[![Version](https://img.shields.io/github/package-json/v/tribefyhq/react-native-walkthrough)][package]
[![MIT Licence](https://img.shields.io/github/license/tribefyhq/react-native-walkthrough)][license]
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
<!-- ![Downloads](https://img.shields.io/github/downloads/tribefyhq/react-native-walkthrough/total) -->

A cross-platform Walkthrough component for React Native that is performant, simple, and extensible.

> _**NOTE**: This library is currently under development, and should primarly be considered as being in a beta stage._

## Features

 1)  [Fast] Smoother animations using LayoutAnimation which is ran natively on both Android and iOS
 2)  [Flexible] The ability to press in the highlighted area (or not). You can decide if it's pressable through or not.
 3)  [Functional] Ability to have multiple parts of the screen showing for a single step, with one interactable and the other not.
 4)  Overlay is fully customizable and you are given the position of the overlay area so you can position relative to the masks.
 5)  No wrapping HOC, passing props into children, etc. Just basic callbacks and context from react native.
 6)  Programmatic stop / start / goTo functions accessible in any component using React context
 7)  The ability to override the positioning to fine tune or add padding around certain exposed masks.
 8)  Hardware back button support on Android (with the ability to disable)
 9)  No dependencies besides react and react-native, lodash.sortBy, and react-native-safe-area-context
 10) When mask is not pressable through, you can specify an onPress event. You can also specify onPress background as well.
 11) Pass in a useIsFocused function so that the walkthrough automatically hides itself incase the user redirects away via push notifications or other code.


## Demo

https://user-images.githubusercontent.com/525212/147403105-b61c7b9f-0f87-442c-ba2c-361c6c71aab5.mp4

## React Native Compatibility

This library will likely work with most versions of React Native, but keep in mind that it was built with `0.64.3` of React Native.

*It will also work with Expo apps as well since there is no library linking required.*

| `react-native-walkthrough` Version | Required React Native Version |
| ------------------------------- | ----------------------------- |
| `1.x.x`                         | `>= 0.63`                     |

## Installation

Open a Terminal in the project root and run:

```sh
yarn add react-native-walkthrough
```

Make sure you've also have installed`react-native-safe-area-view` with version >= 3.0.0
```sh
yarn add react-native-safe-area-view
```

Use the `enableExperimentalLayoutAnimation` somewhere on bootup to make sure we can use LayoutAnimations.

We're done!

## Usage

First you need to wrap the root of your app with the `WalkthroughProvider`.

```js
import * as React from 'react';
import { WalkthroughProvider } from 'react-native-walkthrough';
import MyAwesomeApp from './src/MyAwesomeApp';

export default function App() {
  return (
    <WalkthroughProvider>
      <MyAwesomeApp />
    </WalkthroughProvider>
  );
}
```

Now you can use `useWalkthroughStep` to create your steps within the components.

```ts
import SafeAreaView from 'react-native-safe-area-view';

export default function HomeScreen() {

  const {isWalkthroughOn, isReady, start} = usePostWalkthroughStep({
    number: 1,
    OverlayComponent: WelcomeMessageOverlay,
    fullScreen: true,
  });

  usePostWalkthroughStep({
    number: 2,
    enableHardwareBack: true,
    OverlayComponent: NearbyUsersOverlay,
  });

  useEffect(
    () => {
      start();
    },
    [],
  )

  return (
      <View style={{ flex: 1 }}>
        <Text>
          Here is my app!
        </Text>
      </View>
  );
}
```

An overlay component can look like this:

```ts
const WelcomeMessageOverlay = ({next}: IOverlayComponentProps) => {
  return <SafeAreaView style={styles.fullScreenContainer}>
    <View style={styles.fullScreenContents}>
      <Text style={styles.h1}>
        Let's take a quick tour!
      </Text>
      <ArrowButton
        large
        onPress={next}
        style={styles.arrowCta}
      />
    </View>
  </SafeAreaView>
};
```

The code itself is self-documenting if you look at the Typescript interfaces. When we have more time,
we'll add more in-depth documentation.

## Contributing

This app is currently being used on tribefy.com. 

We're looking for maintainers, so if you are interested please contact open-source@tribefy.com.

<!-- badges -->

[build-badge]: https://img.shields.io/circleci/project/github/satya164/react-native-walkthrough/main.svg?style=flat-square
[build]: https://circleci.com/gh/satya164/react-native-walkthrough
[version-badge]: https://img.shields.io/npm/v/react-native-walkthrough.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-native-walkthrough
[license-badge]: https://img.shields.io/npm/l/react-native-walkthrough.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
