import type { TextStyle, ViewStyle, Animated } from 'react-native';
import type StylePresets from './StylePresets';
export type ToastStyles = {
  container?: AnimatedStyles<ViewStyle>;
  message?: AnimatedStyles<TextStyle>;
};

export type AnimatedStyles<T extends ViewStyle> = {
  [key in keyof T]: Animated.WithAnimatedValue<T[key]>;
};
type Position = 'top' | 'bottom';
type Animation = 'scale' | 'slide-bottom' | 'slide-up' | 'fade';
export type ToastStyleType = (value: Animated.Value) => ToastStyles;
export type StylePresetsTypes = typeof StylePresets;

export type ToastObjectWithVisibility = ToastObject & {
  visible: boolean;
};

type MessageCallback = (
  styles?: ToastStyles,
  animatedValue?: Animated.Value
) => JSX.Element | JSX.Element[];
type MessageType = string | MessageCallback;

type PresetType = Record<string, ToastStyles> &
  {
    [key in keyof typeof StylePresets]?: ToastStyles;
  };

export type ToastObject = {
  title?: string;
  message?: MessageType;
  type?: string;
  duration?: number;
  style?: ToastStyleType | ToastStyles;
  position?: Position;
  animation?: Animation;
  presetStyles?: PresetType;
};
