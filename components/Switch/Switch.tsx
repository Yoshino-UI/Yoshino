
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';

export interface ISwitchProps extends IBaseComponent {
  /**
   * 大小 可选值
   */
  size: 'default' | 'small';
  /**
   * 变化时回调函数
   */
  onChange?: (checked: boolean) => void;
  /**
   * 当前是否选中
   */
  checked: boolean;
  /**
   * 是否禁用
   */
  disabled: boolean;
}

export interface ISwitchState {
  checked: boolean;
}

/**
 * **开关选择器**-切换开关状态。
 */
export class Switch extends Component<ISwitchProps, ISwitchState> {
  state = {
    checked: this.props.checked,
  };

  static defaultProps = {
    size: 'default',
    checked: false,
    disabled: false,
  };

  onClick = () => {
    if (this.props.disabled) {
      return -1;
    }
    const checked = !this.state.checked;
    this.setState({
      checked,
    });
    if (this.props.onChange) {
      this.props.onChange(checked);
    }
  }

  render() {
    const {className, style, size, disabled} = this.props;
    const {checked} = this.state;
    const preCls = 'yoshino-switch';
    const switchCls = {
      [`${preCls}-checked`]: checked,
      [`${preCls}-disabled`]: disabled,
    };
    return (
      <div
        className={classNames(className, preCls, `${preCls}-${size}`, switchCls)}
        style={style}
        onClick={this.onClick}
      />
    );
  }
}

export default Switch;
