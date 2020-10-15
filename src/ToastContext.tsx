import React, { RefObject } from 'react';
import ToastContent from './ToastContent';
import type { ToastObject, ToastObjectWithVisibility } from './types';
import { View } from 'react-native';
import StylePresets from './StylePresets';

type Props = {
  children: JSX.Element | JSX.Element[];
  ref: RefObject<ToastProvider>;
  config?: ToastObject;
};
type State = {
  value: ToastObject;
};

const styles = {
  flex: { flex: 1 },
};

export default class ToastProvider extends React.PureComponent<Props, State> {
  static defaultProps = {
    config: {
      duration: 2000,
      type: 'default',
      position: 'bottom',
      animation: 'scale',
      presetStyles: StylePresets,
    },
  };
  timeoutId?: number;

  constructor(props: Props) {
    super(props);

    this.state = {
      value: props.config as ToastObject,
    };

    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
  }

  show(info: ToastObject) {
    const toast = {
      ...ToastProvider.defaultProps,
      ...this.props.config,
      ...info,
      visible: true,
    };
    console.log(this.timeoutId);

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.setState(
      {
        value: toast,
      },
      () => {
        this.timeoutId = setTimeout(this.hide, toast.duration);
      }
    );
  }

  hide() {
    console.log(this.timeoutId);

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.setState((prev) => ({
      value: {
        ...(prev.value as Record<string, any>),
        visible: false,
      } as ToastObject,
    }));
  }

  render() {
    return (
      <View style={styles.flex}>
        {this.props.children}
        <ToastContent
          onHide={this.hide}
          value={this.state.value as ToastObjectWithVisibility}
        />
      </View>
    );
  }
}
