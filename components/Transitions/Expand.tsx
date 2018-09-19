
import {Component} from 'react';
import * as React from 'react';
import {IBaseComponent} from '../template/component';
import Transition from 'react-transition-group/Transition';

export interface IExpandProps extends IBaseComponent {
  /**
   * 动画时间 ms
   */
  timeout?: number;
  /**
   * 激活状态
   */
  active: boolean;

}

export interface IExpandState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class Expand extends Component<IExpandProps, IExpandState> {
  refContainer: HTMLElement;
  refInner: HTMLElement;

  static defaultProps = {
    timeout: 300,
  };

  render() {
    const {
      active, timeout, children,
    } = this.props;
    const preCls = 'yoshino-expand';
    return (
      <Transition
        timeout={timeout!}
        in={active}
        mountOnEnter
        unmountOnExit
        appear
        onEnter={() => {
          this.refContainer.style.overflow = 'hidden';
          this.refContainer.style.height = '0px';
          this.refContainer.style.display = 'none';
        }}
        onEntering={() => {
          this.refContainer.style.display = 'block';
          const height = this.refInner.clientHeight;
          this.refContainer.style.height = `${height + 1}px`;
        }}
        onEntered={() => {
          this.refContainer.style.overflow = null;
          this.refContainer.style.height = null;
        }}
        onExit={() => {
          this.refContainer.style.overflow = 'hidden';
          const height = this.refInner.clientHeight;
          this.refContainer.style.height = `${height + 1}px`;
        }}
        onExiting={() => {
          // 可能是react-transition的一个bug，直接执行会导致onExit中的高度设置无效
          setTimeout(() => {
            this.refContainer.style.height = '0px';
          }, 0);
        }}
        onExited={() => {
          this.refContainer.style.height = null;
          this.refContainer.style.display = 'none';
          this.refContainer.style.overflow = null;
        }}
      >
        {
          () => {
            const transition = `height ${timeout! / 1000}s cubic-bezier(0.645, 0.045, 0.355, 1)`;
            return (
              <div
                className={preCls}
                style={{
                  transition,
                  WebkitTransition: transition,
                }}
                ref={(v: HTMLElement | null) => {
                  if (v) {
                    this.refContainer = v;
                  }
                }}
              >
                <div
                  ref={(v: HTMLElement | null) => {
                    if (v) {
                      this.refInner = v;
                    }
                  }}
                >
                  {children}
                </div>
              </div>
            );
          }
        }
      </Transition>
    );
  }
}

export default Expand;
