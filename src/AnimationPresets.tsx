import type { ToastStyleType } from './types';

const scale: ToastStyleType = (animation) => ({
  container: {
    opacity: animation as any,
    transform: [
      {
        scale: animation as any,
      },
    ],
  },
});

const slideUp: ToastStyleType = (animation) => ({
  container: {
    opacity: animation as any,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [75, 0],
        }) as any,
      },
    ],
  },
});

const slideBottom: ToastStyleType = (animation) => ({
  container: {
    opacity: animation as any,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-75, 0],
        }) as any,
      },
    ],
  },
});

const fade: ToastStyleType = (animation) => ({
  container: {
    opacity: animation as any,
  },
});

export default {
  scale,
  'slide-up': slideUp,
  'slide-bottom': slideBottom,
  fade,
};
