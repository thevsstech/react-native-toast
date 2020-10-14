import React, { useEffect, useMemo, useRef } from 'react';
import type { ToastObjectWithVisibility, ToastStyles } from './types';
import {
  View,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  Animated,
} from 'react-native';
import AnimationPresets from './AnimationPresets';

type Props = {
  value: ToastObjectWithVisibility;
  onHide: () => void;
};

const styles = {
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 999999,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  container: {
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 10,
    borderRadius: 5,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 10,
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

export default function ToastContent({ value, onHide }: Props) {
  let animate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animate, {
      duration: 100,
      toValue: value.visible ? 1 : 0,
      useNativeDriver: true,
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

  if (value === null) {
    return null;
  }

  return (
    <Animated.View
      style={[styles.root, position, animation.root, customStyles?.root]}
    >
      {data && typeof data === 'object' ? (
        <TouchableOpacity
          onPress={onHide}
          style={[styles.container, customStyles?.container]}
        >
          <View>
            {data.title ? (
              <Text style={[styles.title, customStyles?.title]}>
                {data.title}
              </Text>
            ) : null}
            {data.message ? (
              <Text style={customStyles?.message}>{data.message}</Text>
            ) : null}
          </View>
        </TouchableOpacity>
      ) : null}
    </Animated.View>
  );
}
