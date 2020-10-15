import React from 'react';
import ToastProvider from './ToastContext';
import type { ToastObject } from './types';

type Props = {
  children: any;
  config?: ToastObject;
};

const ToastRef = React.createRef<ToastProvider>();

export default function Toast({ children, config }: Props) {
  return (
    <ToastProvider config={config} ref={ToastRef}>
      {children}
    </ToastProvider>
  );
}

Toast.show = (config: ToastObject) => ToastRef.current?.show(config);
Toast.hide = () => ToastRef.current?.hide();
