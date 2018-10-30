
import {Component} from 'react';
import * as React from 'react';
import {ITransitions} from '../template/component';
import {Transition} from 'react-transition-group';

export interface IScaleProps extends ITransitions {
  /**
   * 动画时间 ms
   */
  timeout?: number;
  /**
   * 激活状态
   */
  active: boolean;
}

export interface IScaleState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class Scale extends Component<IScaleProps, IScaleState> {
  refChild: HTMLElement;

  static defaultProps = {
    timeout: 300,
    mountOnEnter: true,
    unmountOnExit: true,
  };

  render() {
    const {
      active, timeout, children,
      mountOnEnter, unmountOnExit,
      onEntered,
    } = this.props;

    const transition = {
      exit: 'scale(0)',
      enter: 'scale(1)',
    };

    return (
      <Transition
        timeout={timeout!}
        in={active}
        mountOnEnter={mountOnEnter}
        unmountOnExit={unmountOnExit}
        appear
        onEnter={() => {
          this.refChild.style.transform = transition.exit;
          this.refChild.style.opacity = '0';
          this.refChild.style.display = null;
        }}
        onEntering={() => {
          setTimeout(() => {
            this.refChild.style.transform = transition.enter;
            this.refChild.style.opacity = '1';
          }, 0);
        }}
        onEntered={() => {
          this.refChild.style.transform = null;
          this.refChild.style.opacity = null;
          if (onEntered) {
            onEntered();
          }
        }}
        onExit={() => {
          this.refChild.style.transform = transition.enter;
          this.refChild.style.opacity = '1';
        }}
        onExiting={() => {
          setTimeout(() => {
            this.refChild.style.transform = transition.exit;
            this.refChild.style.opacity = '0';
          }, 0);
        }}
        onExited={() => {
          this.refChild.style.transform = null;
          this.refChild.style.opacity = null;
          this.refChild.style.display = 'none';
        }}
      >
        {
          () => {
            const child = React.Children.only(children);
            const transition =  `all ${timeout! / 1000}s cubic-bezier(.645,.045,.355,1)`;
            return React.cloneElement(child, {
              style: {
                ...child.props.style,
                transition,
                WebkitTransition: transition,
              },
              ref: (v: HTMLElement) => {
                if (v) {
                  this.refChild = v;
                }
                if (child.props.ref) {
                  child.props.ref();
                }
              }
            });
          }
        }
      </Transition>
    );
  }
}

export default Scale;
