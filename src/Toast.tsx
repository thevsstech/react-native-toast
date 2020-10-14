import React from 'react';
import ToastProvider from './ToastContext';

type Props = {
  children: any;
};

const ToastRef = React.createRef<ToastProvider>();

export default function Toast({ children }: Props) {
  return <ToastProvider ref={ToastRef}>{children}</ToastProvider>;
}

Toast.show = ToastRef.current?.show;
Toast.hide = ToastRef.current?.hide;
