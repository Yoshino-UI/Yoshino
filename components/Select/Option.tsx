
import { Component, ReactNode } from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import { Value } from './Select';

export interface IOptionProps extends IBaseComponent {
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * key
   */
  key?: number | string;
  /**
   * value
   */
  value: number | string;
  children: ReactNode;
  /**
   * 激活项，由外层Select传递，开发者不需要传，否则会影响组件正常使用
   */
  active?: Value;
  /**
   * 用于通知父组件 - 子代值发生变化
   */
  onChange?: (value: string | number) => void;
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

  onChange = (value: number | string) => {
    const {onChange, disabled} = this.props;
    if (onChange && !disabled) {
      onChange(value);
    }
  }

  render() {
    const {
      className, style, children, onChange,
      value, disabled,
      ...otherProps} = this.props;
    const preCls = 'yoshino-select-option';
    const clsName = classNames(
      preCls, className,
      {
        [`${preCls}-disabled`]: disabled,
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
      </li>
    );
  }
}

export default Option;
