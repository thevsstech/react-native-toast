import React from 'react';
import ToastProvider from './ToastContext';

type Props = {
  children: any;
};

export const ToastRef = React.createRef<ToastProvider>();

export default function Toast({ children }: Props) {
  return <ToastProvider ref={ToastRef}>{children}</ToastProvider>;
}
