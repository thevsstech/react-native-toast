import type { TextStyle, ViewStyle, Animated } from 'react-native';
import type StylePresets from './StylePresets';
export type ToastStyles = {
  container?: ViewStyle;
  message?: TextStyle;
};

type Position = 'top' | 'bottom';
type Animation = 'scale' | 'slide-bottom' | 'slide-up' | 'fade';
export type ToastStyleType = (value: Animated.Value) => ToastStyles;
export type StylePresetsTypes = typeof StylePresets;

export type ToastObjectWithVisibility = ToastObject & {
  visible: boolean;
};

export type ToastObject = {
  title?: string;
  message?: string;
  type?: string;
  duration?: number;
  style?: ToastStyleType | ToastStyles;
  position?: Position;
  animation?: Animation;
};
