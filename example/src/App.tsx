import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Toast from '../../src/Toast';

export default function App() {
  const showDefault = () => {
    Toast.show({
      title: 'test',
      duration: 300,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
