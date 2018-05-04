
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

export interface ISwitchProps extends IBaseComponent {
  /**
   * 大小 可选值
   */
  size?: 'default' | 'small';
  /**
   * 变化时回调函数
   */
  onChange?: (checked: boolean) => void;
  /**
   * 当前是否选中
   */
  checked?: boolean;
  /**
   * 初始
   */
  defaultChecked?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
}

export interface ISwitchState {
  checked: boolean;
}

/**
 * **开关选择器**-切换开关状态。
 */
export class Switch extends Component<ISwitchProps, ISwitchState> {
  state = {
    checked: this.props.defaultChecked as boolean,
  };

  static defaultProps = {
    size: 'default',
    disabled: false,
    defaultChecked: false,
  };

  onClick = () => {
    if (this.props.disabled) {
      return;
    }
    const checked = !this.getChecked();
    this.setState({
      checked,
    });
    if (this.props.onChange) {
      this.props.onChange(checked);
    }
  }

  getChecked = () => {
    const {checked} = this.props;
    return checked !== undefined ? checked : this.state.checked;
  }

  render() {
    const {className, style, size, disabled} = this.props;
    const checked = this.getChecked();
    const preCls = 'yoshino-switch';
    const switchCls = {
      [`${preCls}-checked`]: checked,
      [`${preCls}-disabled`]: disabled,
    };
    const clsName = classNames(
      preCls, `${preCls}-${size}`, switchCls, className,
    );
    return (
      <div
        className={clsName}
        style={style}
        onClick={this.onClick}
      />
    );
  }
}

export default Switch;
