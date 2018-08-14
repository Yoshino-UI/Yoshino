
import {Component} from 'react';
import * as React from 'react';
import {IBaseComponent} from '../template/component';
import {Transition} from 'react-transition-group';

export interface ISlideProps extends IBaseComponent {
  /**
   * 动画时间 ms
   */
  timeout?: number;
  /**
   * 激活状态
   */
  active: boolean;
  /**
   * 方向
   */
  direction: 'left' | 'top' | 'right' | 'bottom';
  /**
   * single 是否单方向滑动
   */
  single?: boolean;
  /**
   * 是否关闭透明度变化
   */
  opacity?: boolean;
  /**
   * 首次进入是否加载动画
   */
  appear?: boolean;
}

export interface ISlideState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class Slide extends Component<ISlideProps, ISlideState> {
  refChild: HTMLElement;

  static defaultProps = {
    timeout: 300,
    single: false,
    opacity: true,
    appear: true,
  };

  render() {
    const {
      active, timeout, children, direction, single, opacity, appear,
    } = this.props;
    const transition = {
      left: {
        enter: 'translateX(0)',
        exit: 'translateX(-100%)',
      },
      right: {
        enter: 'translateX(0)',
        exit: 'translateX(100%)',
      },
      top: {
        enter: 'translateY(0)',
        exit: 'translateY(-100%)',
      },
      bottom: {
        enter: 'translateY(0)',
        exit: 'translateY(100%)',
      },
    };

    const singleDiretion: {
      [index: string]: 'left' | 'top' | 'right' | 'bottom';
    } = {
      left: 'right',
      right: 'left',
      top: 'bottom',
      bottom: 'top',
    };

    return (
      <Transition
        timeout={timeout!}
        in={active}
        mountOnEnter
        unmountOnExit
        appear={appear}
        onEnter={() => {
          this.refChild.style.transform = transition[direction].exit;
          if (opacity) {
            this.refChild.style.opacity = '0';
          }
          this.refChild.style.display = null;
        }}
        onEntering={() => {
          setTimeout(() => {
            this.refChild.style.transform = transition[direction].enter;
            if (opacity) {
              this.refChild.style.opacity = '1';
            }
          }, 0);
        }}
        onEntered={() => {
          this.refChild.style.transform = null;
          if (opacity) {
            this.refChild.style.opacity = null;
          }
        }}
        onExit={() => {
          const directionR = single ? singleDiretion[direction] : direction;
          this.refChild.style.transform = transition[directionR].enter;
          if (opacity) {
            this.refChild.style.opacity = '1';
          }
        }}
        onExiting={() => {
          setTimeout(() => {
            const directionR = single ? singleDiretion[direction] : direction;
            this.refChild.style.transform = transition[directionR].exit;
            if (opacity) {
              this.refChild.style.opacity = '0';
            }
          }, 0);
        }}
        onExited={() => {
          this.refChild.style.transform = null;
          if (opacity) {
            this.refChild.style.opacity = null;
          }
          this.refChild.style.display = 'none';
        }}
      >
        {
          () => {
            const child = React.Children.only(children);
            return React.cloneElement(child, {
              style: {
                ...child.props.style,
                transition: `all ${timeout! / 1000}s cubic-bezier(.645,.045,.355,1)`,
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

export default Slide;
