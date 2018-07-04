// tslint:disable
import {Component, ReactNode, CSSProperties} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IAbstractInput} from '../template/component';

export interface IInputProps extends IAbstractInput<string> {
  /**
   * 组件大小
   */
  size?: 'small' | 'default' | 'large';
  /**
   * 回车回调事件
   */
  onEnter?: () => void;
  /**
   * 头部
   */
  header?: ReactNode | string;
  /**
   * 尾部
   */
  footer?: ReactNode | string;
  /**
   * 头部style
   */
  headerStyle?: CSSProperties; // tslint:disable-line:no-any
  /**
   * 尾部style
   */
  footerStyle?: CSSProperties; // tslint:disable-line:no-any
}

export interface IInputState {
  /**
   * 值
   */
  value: string;
}

/**
 * **输入框**-用于获取用书通过键盘输入的内容
 */
export class Input extends Component<IInputProps, IInputState> {
  static defaultProps = {
    size: 'default',
    defaultValue: '',
  };

  state = {
    value: this.props.defaultValue as string,
  };

  getValue = () => {
    const {value} = this.props;
    return value !== undefined ? value : this.state.value;
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {onChange} = this.props;
    const value = e.target.value;
    if (onChange) {
      onChange(value);
    }
    this.setState({value});
  }

  onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const {onEnter, onKeyDown} = this.props;
    if (e.keyCode === 13 && onEnter) {
      onEnter();
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  }

  render() {
    const {
      className, style, size, header,
      footer, headerStyle, footerStyle,
      onEnter, onChange, value, defaultValue,
      ...otherProps
    } = this.props;
    const preCls = 'yoshino-input';
    const clsName = classNames(
      `${preCls}-wrapper`, `${preCls}-${size}`, className,
    );
    const inValue = this.getValue();
    return (
      <span
        className={clsName}
        style={style}
      >
        {header ? (
          <span className={`${preCls}-header`} style={headerStyle}>{header}</span>
        ) : null}
        <input
          type='text'
          className={preCls}
          {...otherProps}
          onKeyDown={this.onEnter}
          onChange={this.onChange}
          value={inValue}
        />
        {footer ? (
          <span className={`${preCls}-footer`} style={footerStyle}>{footer}</span>
        ) : null}
      </span>
    );
  }
}

export default Input;
