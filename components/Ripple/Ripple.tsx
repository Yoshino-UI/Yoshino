
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';
import rippleJs from './rippleJs';

export interface IRippleProps extends IBaseComponent {
  /**
   * 波纹颜色
   */
  color: string;
  /**
   * 波纹透明度
   */
  opacity: number;
  /**
   * 波纹直径
   */
  diameter: number;
}

export interface IRippleState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class Ripple extends Component<IRippleProps, IRippleState> {
  static defaultProps = {
    color: '#4285f4',
    opacity: 0.3,
    diameter: 10,
  };

  componentDidMount() {
    const {color, opacity, diameter} = this. props;
    if (this.targetRipple !== null) {
      this.rippleHandle = rippleJs({dom: this.targetRipple, color, opacity, diameter});
    }
  }

  componentWillUnmount() {
    // ripple事件销毁
    this.rippleHandle();
  }

  targetRipple: HTMLElement | null;
  rippleHandle: () => void;

  render() {
    const {className, style, children, ...otherProps} = this.props;
    const preCls = 'yoshino-ripple';
    const clsName = classNames(
      className, preCls,
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
        ref={(dom) => this.targetRipple = dom}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Ripple;
