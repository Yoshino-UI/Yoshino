
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import RadioGroup from './RadioGroup';

// tslint:disable:no-any
export interface IRadioProps extends IBaseComponent {
  /**
   * 值
   */
  value?: any;
  /**
   * 是否选中
   */
  checked?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 通知radioGroup
   */
  onChange?: (value: any) => void;
}

export interface IRadioState {

}

/**
 * **单选按钮**-用于从多个条件中筛选单个选项
 */
export class Radio extends Component<IRadioProps, IRadioState> {
  static defaultProps = {
    disabled: false,
    checked: false,
  };

  onChange = (value: any) => {
    const {onChange, disabled} = this.props;
    if (disabled) {
      return;
    }
    if (onChange) {
      onChange(value);
    }
  }

  static Group: typeof RadioGroup;

  render() {
    const {className, style, value, checked, disabled, children, onChange, ...otherProps} = this.props;
    const preCls = 'yoshino-radio';
    const clsName = classNames(
      preCls,
      {[`${preCls}-checked`]: checked},
      className,
    );
    const wrapperCls = classNames(
      `${preCls}-wrapper`,
      {[`${preCls}-disabled`]: disabled},
    );
    return (
      <span
        {...otherProps}
        className={wrapperCls}
        onClick={this.onChange.bind(this, value)}
      >
        <span className={`${preCls}-box`}>
          <span
            className={clsName}
            style={style}
          />
          {/* <input type='radio' className={`${preCls}-input`} {...{name, value, checked}}/> */}
        </span>
        {children ? <span className={`${preCls}-text`}>{children}</span> : null}
      </span>
    );
  }
}

export default Radio;
