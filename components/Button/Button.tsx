
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';

export interface IButtonProps extends IBaseComponent {
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 按钮类型
   */
  type?: 'primary' | 'dashed' | 'danger';
  /**
   * 默认正常形式
   */
  shape?: 'circle';
  /**
   * 默认default
   */
  size?: 'small' | 'large';
  /**
   * 幽灵模式，默认false
   */
  ghost: boolean;
}

export interface IButtonState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class Button extends Component<IButtonProps, IButtonState> {
  static defaultProps = {
    ghost: false,
  };

  render() {
    const {className, style, disabled, type, shape, size, ghost, ...otherProps} = this.props;
    const preCls = 'yoshino-button';
    const btnCls = {
      [`${preCls}-${type}`]: type && !disabled || type === 'dashed',
      [`${preCls}-size-${size}`]: size && !disabled,
      [`${preCls}-ghost`]: ghost && !disabled,
      [`${preCls}-shape-${shape}`]: shape === 'circle',
    };
    return (
      <button
        className={classNames(className, preCls, btnCls)}
        style={style}
        disabled={disabled}
        {...otherProps}
      >
        <span>{this.props.children}</span>
      </button>
    );
  }
}

export default Button;
