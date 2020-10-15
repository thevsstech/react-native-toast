# rn-toast

React Native cross-plateform (iOS/Android) toast notification component highly customizable.

## Installation

```sh
npm install rn-toast
```

or with yarn

```sh
yarn add rn-toast
```

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
      title: 'test',
      duration: 2000,
      position: 'top',
      animation: 'slide-bottom',
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
| title | title to show in toast | false | '' |
| message | title to show in toast | false | '' |
| type | type of toast, available values are `default`, `error`, `success` | false | default |
| position | position of toast, available values are `bottom`, `top` | false | bottom |
| animation | animation type of toast, available values are `scale`, `fade`, `slide-up`, `slide-bottom`, see Animation section custom animations | false | scale |
| style | see Styling section to make your custom styles | false | {}



## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
