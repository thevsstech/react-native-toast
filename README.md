# React Native Toast

![expo supported](https://img.shields.io/static/v1?label=&message=Expo+Supported&color=success)
![web supported](https://img.shields.io/static/v1?label=&message=Web+Supported&color=success)
![react native 60+](https://img.shields.io/static/v1?label=%2060%2B%20Supported%0A&message=React+Native&color=informational)
![react native 60+](https://img.shields.io/static/v1?label=Made+With&message=Love&color=ff3399)

React Native cross-plateform (iOS/Android) toast notification component highly customizable.

## Installation

```sh
npm install rn-toast
```

or with yarn

```sh
yarn add rn-toast
```

![usage](https://github.com/thevsstech/rn-toast/raw/master/usage_small.gif)

## Usage
to use toast first wrap your application or screen with toast like shown before

```js
import Toast from "rn-toast";

// app.tsx, index or whatever component is used as initial component

const App = () => <Toast>
    // rest of your application logi
    // <Navigation/>
</Toast>


```
then you can  show toast any where in your app, see [Configuration](#configuration) section to see available parameters you can pass into `show` function

`````js

export default function HomeScreen() {
  const showDefault = () => {
    Toast.show({
        message: 'your message comes here'
    });
  };

  return (
    <Toast>
      <View style={styles.container}>
        <Button title={'show'} onPress={showDefault} />
      </View>
    </Toast>
  );
}

`````

the toast will be automatically hidden after given duration, but if you want the hide it before that you can call `hide` function

````js

 const hideDefault = () => {
    Toast.hide()
  };

````

## Configuration

| option | description | required | default value |
| ------ | ----------- | -------- | ------------- |
| duration | Time until the toast gets closed | false | 2000 |
| message | message to show in toast, it can be a string or a function that resolves a react element | false | '' |
| type | type of toast, available values are `default`, `error`, `success`, `warning`, `info` | false | default |
| position | position of toast, available values are `bottom`, `top` | false | bottom |
| animation | animation type of toast, available values are `scale`, `fade`, `slide-up`, `slide-bottom`, see [Animations](#animations) section custom animations | false | scale |
| style | see Styling section to make your custom styles, see [Styling](#styling) section to more details | false | {}


you can pass this configurations in `show` method, or you can specify default configs as `<Toast configs={configs}`

`````js


const configs = {
    duration: 3000,
    position: 'top',
    animation: 'fade'
}

const App = () => <Toast>
    // rest of your application logi
    // <Navigation/>
</Toast>

// other things

Toast.show({
    // this will override configs.duration
    duration: 2000,
    // this will override configs.position
    position: 'bottom',
    message: 'your toast message comes here'
})


`````

## Styling

you can pass your custom styles in configs as an object with 3 keys, `container`, `message`, `title`,
for example below styling will make your toast more like native `ToastAndroid`

````js
 Toast.show({
      message: 'your toast message comes here',
      style: {
        container: {
          backgroundColor: '#eeeeee',
          paddingVertical: 15,
          bottom: 35,
        },
        message: {
          color: '#000',
          fontSize: 13,
          lineHeight: 12,
        },
      },
    });
````

## Animations

By default rn-toast supports  `scale`, `fade`, `slide-up`, `slide-bottom` animations, but let say if you want to `slide-right` animation you can make it like this;

`````js

  Toast.show({
      message: 'this toast will slide from right',
      // if you pass style a function it will be called with an Animated.Value so you can interpolate it
      style: (animatedValue) => ({
        container: {
          transform: [
            {
              translateX: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [width, 0],
              }),
            },
          ],
        },
      }),
  });

`````

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
