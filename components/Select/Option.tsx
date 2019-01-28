import { Component, ReactNode } from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import { BasicValue, Value } from './Select';
import Icon from '../Icon';

export interface IOptionProps extends IBaseComponent {
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * value
   */
  value: BasicValue;
  children: ReactNode;
  /**
   * 激活项，由外层Select传递，开发者不需要传，否则会影响组件正常使用
   */
  active?: BasicValue;
  /**
   * 用于通知父组件 - 子代值发生变化
   */
  onChange?: (value: BasicValue) => void;
  /**
   * context
   */
  // tslint:disable-next-line no-any
  ctx?: IContext;
}

export interface IContext {
  onChange: (value: BasicValue) => void;
  value: Value;
}

export interface IOptionState {
}

/**
 * **组件中文名称**-组件描述。
 */
export class Option extends Component<IOptionProps, IOptionState> {
  static defaultProps = {
  };

  static displayName = 'Option';

  onChange = (value: BasicValue) => {
    const { disabled, ctx} = this.props;
    if (ctx && !disabled) {
      const { onChange } = ctx;
      onChange(value);
    }
  }

  render() {
    const {
      className, style, children, onChange,
      value, disabled, ctx,
      ...otherProps} = this.props;
    const preCls = 'yoshino-select-option';
    const values = ctx!.value;
    const isChoosed = Array.isArray(values) && values.indexOf(value) !== -1;
    const clsName = classNames(
      preCls, className,
      {
        [`${preCls}-disabled`]: disabled,
        [`${preCls}-choosed`]: isChoosed,
      }
    );
    return (
      <li
        className={clsName}
        style={style}
        {...otherProps}
        onClick={() => this.onChange(value)}
      >
        {children}
        <Icon
          className={`${preCls}-icon`}
          type='md-checkmark'
        />
      </li>
    );
  }
}

export default Option;
