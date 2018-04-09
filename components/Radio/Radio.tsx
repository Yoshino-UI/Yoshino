
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';
import RadioGroup from './RadioGroup';

// tslint:disable:no-any
export interface IRadioProps extends IBaseComponent {
  /**
   * 值
   */
  value: any;
  /**
   * 是否选中
   */
  checked: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 组名
   */
  name: string;
  /**
   * 通知radioGroup
   */
  onChange: (value: any) => void;
}

export interface IRadioState {

}

/**
 * **单选按钮**-用于从多个条件中筛选单个选项
 */
export class Radio extends Component<IRadioProps, IRadioState> {
  static defaultProps = {
    disabled: false,
  };

  onChange = (value: any) => {
    const {onChange, disabled} = this.props;
    if (disabled) {
      return;
    }
    onChange(value);
  }

  static Group: typeof RadioGroup;

  render() {
    const {className, style, name, value, checked, disabled, children, onChange, ...otherProps} = this.props;
    const preCls = 'yoshino-radio';
    const clsName = classNames(
      className, preCls,
      {[`${preCls}-checked`]: checked},
    );
    const wrapperCls = classNames(
      `${preCls}-wrapper`,
      {[`${preCls}-disabled`]: disabled},
    );
    return (
      <label
        className={wrapperCls}
        onClick={this.onChange.bind(this, value)}
      >
        <span className={`${preCls}-box`}>
          <span
            className={clsName}
            style={style}
            {...otherProps}
          />
          <input type='radio' className={`${preCls}-input`} {...{name, value, checked}}/>
        </span>
        <span className={`${preCls}-text`}>{children}</span>
      </label>
    );
  }
}

export default Radio;
