
import {Component} from 'react';
import * as React from 'react';
import Transition from 'react-transition-group/Transition';

export interface ICustomTransitionProps {
  /**
   * 关闭回调
   */
  onClose?: () => void;
  /**
   * 控制显示
   */
  show: boolean;
}

export interface ICustomTransitionState {
}

export class CustomTransition extends Component<ICustomTransitionProps, ICustomTransitionState> {

  render() {
    const {
      onClose, show, children,
    } = this.props;
    const transitionStyles: {
      [index: string]: object;
    } = {
      exiting: { opacity: 0},
      exited: { opacity: 0 },
    };
    const duration = 500;
    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 1,
    };
    // tslint:disable
    const child: React.ReactElement<{style: any}> = React.Children.only(children); 
    return (
      <Transition
        timeout={duration}
        in={show}
        unmountOnExit
        onExited={() => {
          if (onClose) {
            // 延迟100ms是为了避免阻塞transition unmount
            setTimeout(() => {
              onClose();
            }, 100);
          }
        }}
      >
        {
          (state: string) => React.cloneElement(child, {
            style: {
              ...child.props.style,
              ...defaultStyle,
              ...transitionStyles[state],
            },
          })
        }
      </Transition>
    );
  }
}

export default CustomTransition;
