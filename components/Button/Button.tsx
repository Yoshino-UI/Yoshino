
import {Component, isValidElement, ReactNode} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Icon from '../Icon';

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
  /**
   * 图标
   */
  icon: string | ReactNode;
  /**
   * 加载状态
   */
  loading: boolean;
  /**
   * 图标位置
   */
  tail: boolean;
}

export interface IButtonState {

}

/**
 * **按钮**-用于点击操作。
 */
export class Button extends Component<IButtonProps, IButtonState> {
  static defaultProps = {
    ghost: false,
    loading: false,
    tail: false,
  };

  render() {
    const {
      className, style, disabled, type,
      shape, size, icon, ghost, children,
      tail, loading, ...otherProps} = this.props;
    const preCls = 'yoshino-button';
    const btnCls = {
      [`${preCls}-${type}`]: type && !disabled && !loading || type === 'dashed',
      [`${preCls}-size-${size}`]: size && !disabled && !loading,
      [`${preCls}-ghost`]: ghost && !disabled && !loading,
      [`${preCls}-shape-${shape}`]: shape === 'circle',
    };
    const ban = loading || disabled;
    const iconDiv = icon ? (
      <span
        className={`${preCls}-icon`}
        style={shape !== 'circle' ? tail ? {marginLeft: '5px'} : {marginRight: '5px'} : {}}
      >
        {loading ? <Icon className={`${preCls}-load`} type='load-c'/> :
        isValidElement(icon) ? icon : <Icon type={icon as string}/>}
      </span>
    ) : null;
    const clsName = classNames(
      preCls, btnCls, className,
    );
    return (
      <button
        className={clsName}
        style={style}
        disabled={ban}
        {...otherProps}
      >
        {tail ? null : iconDiv}
        {children ? <span>{loading ? 'Loading..' : children}</span> : null}
        {tail ? iconDiv : null}
      </button>
    );
  }
}

export default Button;
