import React, { useEffect, useMemo, useRef } from 'react';
import type {
  StylePresetsTypes,
  ToastObjectWithVisibility,
  ToastStyles,
} from './types';
import { View, ViewStyle, Animated, Easing } from 'react-native';
import AnimationPresets from './AnimationPresets';
import StylePresets from './StylePresets';

type Props = {
  value: ToastObjectWithVisibility;
  onHide: () => void;
};

const style = {
  container: {
    alignSelf: 'center',
    position: 'absolute',
    paddingHorizontal: 25,
  } as ViewStyle,
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

  const styles = useMemo<ToastStyles>(() => {
    let styleKey = (data.type + 'Styles') as keyof StylePresetsTypes;
    let presetThemes = StylePresets.defaultStyles;
    if (typeof StylePresets[styleKey] !== 'undefined') {
      presetThemes = StylePresets[styleKey];
    }
    return {
      container: { ...style.container, ...presetThemes.container },
      message: presetThemes.message,
    };
  }, [data?.type]);

  let position = useMemo(() => positionStyles[data.position || 'bottom'], [
    data?.position,
  ]);

  const animation: ToastStyles = useMemo(
    () => AnimationPresets[data?.animation || 'scale'](animate),
    [data?.animation, animate]
  );

  let customStyles: ToastStyles | undefined = useMemo(
    () => (typeof data.style === 'function' ? data.style(animate) : data.style),
    [data, animate]
  );

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
