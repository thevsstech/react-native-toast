import React, { RefObject } from 'react';
import ToastContent from './ToastContent';
import type {
  ToastObject,
  ToastObjectWithVisibility,
  ToastType,
} from './types';

type Props = {
  children: JSX.Element | JSX.Element[];
  ref: RefObject<ToastProvider>;
};
type State = {
  value: ToastType;
};

export default class ToastProvider extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: null,
    };
  }

  defaultToast(): ToastObject {
    return {
      duration: 3000,
      type: 'default',
      position: 'bottom',
      animation: 'scale',
    };
  }

  show = (info: ToastObject) => {
    const toast = { ...this.defaultToast, ...info, visible: true };

    this.setState(
      {
        value: toast,
      },
      () => setTimeout(() => this.hide(), toast.duration)
    );
  };

  hide = () => {
    this.setState((prev) => ({
      value: {
        ...(prev.value as Record<string, any>),
        visible: false,
      } as ToastObject,
    }));
  };

  render() {
    return (
      <>
        {this.props.children}

        {typeof this.state.value === 'object' ? (
          <ToastContent
            onHide={this.hide}
            value={this.state.value as ToastObjectWithVisibility}
          />
        ) : null}
      </>
    );
  }
}
