import type { ToastStyles } from './types';
import type { TextStyle } from 'react-native';

const defaultStyles: ToastStyles = {
  container: {
    backgroundColor: 'rgb(29,29,29)',
    paddingVertical: 15,
    borderRadius: 25,
  },
  message: {
    fontSize: 13,
    lineHeight: 13,
    fontWeight: '400',
    color: '#fff',
  } as TextStyle,
};

const successStyles: ToastStyles = {
  container: {
    backgroundColor: 'rgb(237, 247, 237)',
    paddingVertical: 15,
    borderRadius: 25,
  },
  message: {
    fontSize: 13,
    lineHeight: 13,
    fontWeight: '400',
    color: 'rgb(30, 70, 32)',
  } as TextStyle,
};

const errorStyles: ToastStyles = {
  container: {
    backgroundColor: 'rgb(253, 236, 234)',
    paddingVertical: 15,
    borderRadius: 25,
  },
  message: {
    fontSize: 13,
    lineHeight: 13,
    fontWeight: '400',
    color: 'rgb(97, 26, 21)',
  } as TextStyle,
};

const warningStyles: ToastStyles = {
  container: {
    backgroundColor: 'rgb(255, 244, 229)',
    paddingVertical: 15,
    borderRadius: 25,
  },
  message: {
    fontSize: 13,
    lineHeight: 13,
    fontWeight: '400',
    color: 'rgb(102, 60, 0)',
  } as TextStyle,
};

const infoStyles: ToastStyles = {
  container: {
    backgroundColor: 'rgb(232, 244, 253)',
    paddingVertical: 15,
    borderRadius: 25,
  },
  message: {
    fontSize: 13,
    lineHeight: 13,
    fontWeight: '400',
    color: 'rgb(13, 60, 97)',
  } as TextStyle,
};

const StylePresets = {
  defaultStyles,
  successStyles,
  errorStyles,
  infoStyles,
  warningStyles,
};

export default StylePresets;
