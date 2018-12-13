
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent, TSize} from '../template/component';
import Input from '../Input';
import Icon from '../Icon';
import Popover from '../PopOver';
import TimePanel from './TimePanel';
export interface ITimePickerProps extends IBaseComponent {
  /**
   * 默认提示文本
   */
  placeholder?: string;
  /**
   * 默认值
   */
  defaultValue?: string;
  /**
   * 值
   */
  value?: string;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 值变化回调
   */
  onChange?: (v: string) => void;
  /**
   * 面板是否展开 - 受控
   */
  open?: boolean;
  /**
   * 面板是否展开 - 非受控
   */
  defaultOpen?: boolean;
  /**
   * 面板展开回调
   */
  onOpenChange?: (v: boolean) => void;
  /**
   * 尺寸
   */
  size?: TSize;
  /**
   * 禁用时、分、秒部分选项
   */
  disabledHours?: boolean;
  disabledMinutes?: boolean;
  disabledSeconds?: boolean;
  /**
   * 展示时间格式
   */
  format?: string;
}

export interface ITimePickerState {
  open: boolean;
  value: string;
}

/**
 * **组件中文名称**-组件描述。
 */
export class TimePicker extends Component<ITimePickerProps, ITimePickerState> {
  preCls = 'yoshino-time-picker';
  refTimePickerConatainer?: HTMLDivElement;
  refPanelInput?: HTMLInputElement;
  timeoutHandle?: number;
  refHourDiv: HTMLDivElement;
  refHourLi: HTMLLIElement;
  refMinuteDiv: HTMLDivElement;
  refMinuteLi: HTMLLIElement;
  refSecondDiv: HTMLDivElement;
  refSecondLi: HTMLLIElement;

  static defaultProps = {
    size: 'default',
    placeholder: '请选择时间',
    disabledHours: false,
    disabledMinutes: false,
    disabledSeconds: false,
    defaultOpen: false,
    defaultValue: '',
    format: 'HH:mm:ss',
  };

  state = {
    panelPos: {
      left: 0,
      top: 0,
    },
    open: this.props.defaultOpen!,
    value: this.props.defaultValue!,
  };

  getOpen = () => {
    const { open } = this.props;
    return open !== undefined ? open : this.state.open;
  }

  getValue = () => {
    const { value } = this.props;
    return value !== undefined ? value : this.state.value;
  }

  onOpenChange = (open: boolean) => {
    const { onOpenChange, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (this.timeoutHandle !== undefined) {
      clearTimeout(this.timeoutHandle);
    }
    this.timeoutHandle = window.setTimeout(() => {
      if (onOpenChange) {
        onOpenChange(open);
      }
      this.setState({
        open,
      });
    }, 10);
  }

  onChange = (value: string) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
    this.setState({
      value,
    });
  }

  render() {
    const {
      className, style, defaultValue, value, onChange,
      open, defaultOpen, onOpenChange, disabled, placeholder,
      size, disabledHours, disabledMinutes, disabledSeconds,
      format,
      ...otherProps} = this.props;
    const preCls = this.preCls;
    const clsName = classNames(
      preCls, className, `${preCls}-size-${size}`
    );
    const valueR = this.getValue();
    const openR = this.getOpen();
    const pop = (
      <div>
        <TimePanel
          value={valueR}
          placeholder={placeholder}
          onChange={this.onChange}
          format={format!}
          disabledHours={disabledHours}
          disabledMinutes={disabledMinutes}
          disabledSeconds={disabledSeconds}
        />
      </div>
    );
    return (
      <Popover
        pop={pop}
        unmountOnExit={false}
        open={openR}
        onOpenChange={this.onOpenChange}
      >
        <div
          className={clsName}
          style={style}
          {...otherProps}
        >
          <Input
            size={size}
            disabled={disabled}
            placeholder={placeholder}
            onClick={this.onOpenChange.bind(this, true)}
            value={valueR}
            readOnly
          />
          <Icon className={`${preCls}-icon`} type='md-time'/>
        </div>
      </Popover>
    );
  }
}

export default TimePicker;
