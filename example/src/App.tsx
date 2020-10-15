import * as React from 'react';
import { Button, Dimensions, StyleSheet, View } from 'react-native';
import Toast from '../../src/Toast';
import StylePresets from '../../src/StylePresets';

const defaultConfig = {
  duration: 1000,
};

export default function App() {
  const showDefault = () => {
    Toast.show({
      message: 'test',
    });
  };

  const showSuccessToast = () => {
    Toast.show({
      message: 'it was successfull',
      type: 'success',
    });
  };

  const showWarningToast = () => {
    Toast.show({
      message: 'it was successfull',
      type: 'warning',
    });
  };

  const showInfoToast = () => {
    Toast.show({
      message: 'it was successfull',
      type: 'info',
    });
  };

  const showErrorToast = () => {
    Toast.show({
      message: 'it was a failure',
      type: 'error',
    });
  };

  const showWithCustomStyles = () => {
    Toast.show({
      message: 'test',
      position: 'bottom',
      animation: 'fade',
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
  };

  const showWithCustomAnimations = () => {
    const { width } = Dimensions.get('window');
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
  };

  const showWithCustomPresets = () => {
    Toast.show({
      message: 'your toast comes here',
      type: 'success',
      presetStyles: {
        ...StylePresets,
        successStyles: {
          container: {
            backgroundColor: '#69cf01',
            paddingVertical: 15,
            paddingHorizontal: 10,
            borderRadius: 5,
          },

          message: {
            color: '#000',
          },
        },
      },
    });
  };
  return (
    <Toast config={defaultConfig}>
      <View style={styles.container}>
        <View style={styles.margin}>
          <Button title={'show default'} onPress={showDefault} />
        </View>

        <View style={styles.margin}>
          <Button title={'show success'} onPress={showSuccessToast} />
        </View>
        <View style={styles.margin}>
          <Button title={'show info'} onPress={showInfoToast} />
        </View>
        <View style={styles.margin}>
          <Button title={'show warning'} onPress={showWarningToast} />
        </View>
        <View style={styles.margin}>
          <Button title={'show error'} onPress={showErrorToast} />
        </View>

        <View style={styles.margin}>
          <Button
            title={'show with custom styles'}
            onPress={showWithCustomStyles}
          />
        </View>

        <View style={styles.margin}>
          <Button
            title={'show with custom animatiopn'}
            onPress={showWithCustomAnimations}
          />
        </View>

        <View style={styles.margin}>
          <Button
            title={'show with custom preset'}
            onPress={showWithCustomPresets}
          />
        </View>
      </View>
    </Toast>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: {
    marginVertical: 5,
  },
});
