import React, { useEffect, useMemo, useRef } from 'react';
import type {
  StylePresetsTypes,
  ToastObjectWithVisibility,
  ToastStyles,
} from './types';
import { Animated, Easing, ViewStyle } from 'react-native';
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

  // animates toast
  useEffect(() => {
    Animated.timing(animate, {
      duration: 100,
      toValue: value.visible ? 1 : 0,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.quad),
    }).start();
  }, [value.visible, animate]);

  const data = value;

  // resolves preset styles
  const styles = useMemo<ToastStyles>(() => {
    let styleKey = (data.type + 'Styles') as keyof StylePresetsTypes;
    // yse preset styles from config if available
    // if not fallback to default presets
    let presetStyles = data.presetStyles || StylePresets;
    let presetThemes = (typeof presetStyles[styleKey] !== 'undefined'
      ? presetStyles[styleKey]
      : presetStyles.defaultStyles) as ToastStyles;

    return {
      container: { ...style.container, ...presetThemes.container },
      message: presetThemes.message,
    };
  }, [data?.type, data?.presetStyles]);

  // resolves default position
  let position = positionStyles[data.position || 'bottom'];

  // resolves animation fron animation presets
  // it's not defined somehow it will fallback to scale
  const animation: ToastStyles = AnimationPresets[data?.animation || 'scale'](
    animate
  );

  let customStyles: ToastStyles | undefined = useMemo(
    () => (typeof data.style === 'function' ? data.style(animate) : data.style),
    [data, animate]
  );

  // message supports callables that returns react elements
  const message = data.message ? (
    typeof data.message === 'string' ? (
      <Animated.Text
        style={[styles.message, animation?.message, customStyles?.message]}
      >
        {data.message}
      </Animated.Text>
    ) : (
      data.message(styles, animate)
    )
  ) : null;

  return (
    <Animated.View
      style={[
        styles.container,
        position,
        animation?.container,
        customStyles?.container,
      ]}
    >
      {message}
    </Animated.View>
  );
}
