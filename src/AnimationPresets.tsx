import type { ToastStyleType } from './types';

const scale: ToastStyleType = (animation) => ({
  root: {
    opacity: animation as any,
    transform: [
      {
        scale: animation as any,
      },
    ],
  },
});

const slide: ToastStyleType = (animation) => ({
  root: {
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

export default { scale, slide };
