import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Toast from '../../src/Toast';

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
      duration: 3000,

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

  console.log('rendering');

  return (
    <Toast>
      <View style={styles.container}>
        <View
          style={{
            marginVertical: 5,
          }}
        >
          <Button title={'show default'} onPress={showDefault} />
        </View>

        <View
          style={{
            marginVertical: 5,
          }}
        >
          <Button title={'show success'} onPress={showSuccessToast} />
        </View>
        <View
          style={{
            marginVertical: 5,
          }}
        >
          <Button title={'show info'} onPress={showInfoToast} />
        </View>
        <View
          style={{
            marginVertical: 5,
          }}
        >
          <Button title={'show warning'} onPress={showWarningToast} />
        </View>
        <View
          style={{
            marginVertical: 5,
          }}
        >
          <Button title={'show error'} onPress={showErrorToast} />
        </View>
        <View
          style={{
            marginVertical: 5,
          }}
        >
          <Button
            title={'show with custom styles'}
            onPress={showWithCustomStyles}
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
});
