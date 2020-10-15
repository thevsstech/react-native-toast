import React, { useEffect, useMemo, useRef } from 'react';
import type { ToastObjectWithVisibility, ToastStyles } from './types';
import {
  View,
  TextStyle,
  ViewStyle,
  Animated,
  StyleSheet,
  Easing,
} from 'react-native';
import AnimationPresets from './AnimationPresets';

type Props = {
  value: ToastObjectWithVisibility;
  onHide: () => void;
};

const styles = {
  root: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 13,
    borderRadius: 25,
    alignSelf: 'center',
    position: 'absolute',
    paddingHorizontal: 25,
  } as ViewStyle,
  title: {
    fontSize: 14,
    fontWeight: '500',

    letterSpacing: 0.5,
    color: '#fff',
  } as TextStyle,
  message: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: '400',
    color: '#fff',
  } as TextStyle,
};

const positionStyles = {
  top: {
    top: 75,
  },

  bottom: {
    bottom: 75,
  },
};

export default function ToastContent({ value }: Props) {
  let animate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animate, {
      duration: 100,
      toValue: value.visible ? 1 : 0,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.quad),
    }).start();
  }, [value.visible, animate]);

  const data = value;

  let position = useMemo(() => positionStyles[data.position || 'bottom'], [
    data?.position,
  ]);

  // @ts-ignore
  const animation: ToastStyles = useMemo(
    () => AnimationPresets[data?.animation || 'scale'](animate),
    [data?.animation, animate]
  );

  let customStyles: ToastStyles | undefined = useMemo(
    () => (typeof data.style === 'function' ? data.style(animate) : data.style),
    [data, animate]
  );

  console.log(position);

  return (
    <Animated.View
      style={[
        styles.container,
        position,
        animation?.container,
        customStyles?.container,
      ]}
    >
      <View>
        {data.title ? (
          <Animated.Text
            style={[styles.title, animation?.title, customStyles?.title]}
          >
            {data.title}
          </Animated.Text>
        ) : null}
        {data.message ? (
          <Animated.Text
            style={[styles.message, animation?.message, customStyles?.message]}
          >
            {data.message}
          </Animated.Text>
        ) : null}
      </View>
    </Animated.View>
  );
}
