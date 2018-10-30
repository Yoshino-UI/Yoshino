
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent, TSize} from '../template/component';
import Input from '../Input';
import Icon from '../Icon';
import { valueTransition } from '../utils/';
import Popover from '../PopOver';
import * as moment from 'moment';

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

  renderSelectItem = (type: 'h' | 'm' | 's') => {
    const values: string[] = [];
    let selectedItem = 0;
    const { format } = this.props;
    const v = this.getValue();
    const m = moment(v, format);
    const fillValues = (max: number) => {
      for (let i = 0; i <= max; i++) {
        const v = i < 10 ? `0${i}` : (i + '');
        values.push(v);
      }
    };
    const typeAction = {
      h: () => {
        selectedItem = m.hour();
        fillValues(23);
      },
      m: () => {
        selectedItem = m.minute();
        fillValues(59);
      },
      s: () => {
        selectedItem = m.second();
        fillValues(59);
      }
    };
    typeAction[type]();
    return (
      <div
        className={`${this.preCls}-select-item`}
        ref={(v) => {
          if (v) {
            const typeAction = {
              h: () => this.refHourDiv = v,
              m: () => this.refMinuteDiv = v,
              s: () => this.refSecondDiv = v,
            };
            typeAction[type]();
          }
        }}
      >
        <ul>
          {
            values.map((item, key) => {
              const v = Number(item);
              const isActive = v === selectedItem;
              const cls = classNames({
                [`${this.preCls}-select-item-selected`]: isActive,
              });
              return (
                <li
                  className={cls}
                  key={key}
                  onClick={() => {
                    if (this.refPanelInput) {
                      this.refPanelInput.focus();
                    }
                    const { format } = this.props;
                    const time = Number(item);
                    const  v = this.getValue();
                    let m = v ? moment(v, format) : moment();
                    const typeAction = {
                      h: () => m.hour(time),
                      m: () => m.minute(time),
                      s: () => m.second(time),
                    };
                    m = typeAction[type]();
                    this.onChange(m.format(format));
                  }}
                  ref={(v) => {
                    if (isActive && v) {
                      const offsetTop = v.offsetTop;
                      const typeAction = {
                        h: () => {
                          const start = this.refHourDiv.scrollTop;
                          const end = offsetTop;
                          valueTransition({
                            start, end,
                          }, (v) => {
                            this.refHourDiv.scrollTop = v;
                          });
                        },
                        m: () => {
                          const start = this.refMinuteDiv.scrollTop;
                          const end = offsetTop;
                          valueTransition({
                            start, end,
                          }, (v) => {
                            this.refMinuteDiv.scrollTop = v;
                          });
                        },
                        s: () => {
                          const start = this.refSecondDiv.scrollTop;
                          const end = offsetTop;
                          valueTransition({
                            start, end,
                          }, (v) => {
                            this.refSecondDiv.scrollTop = v;
                          });
                        },
                      };
                      typeAction[type]();
                    }
                  }}
                >
                  {item}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }

  onOpenChange = (open: boolean) => {
    const { onOpenChange } = this.props;
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
    // const { h, m, s} = this.state;
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
      <div className={`${preCls}-panel`}>
        <div className={`${preCls}-input-wrap`}>
          <input
            placeholder={placeholder}
            readOnly
            value={valueR}
            ref={(v) => {
              if (v) {
                this.refPanelInput = v;
              }
            }}
          />
          <Icon
            type='ios-close-circle'
            onClick={this.onChange.bind(this, '')}
          />
        </div>
        <div className={`${preCls}-select-container`}>
          {disabledHours ? null : this.renderSelectItem('h')}
          {disabledMinutes ? null : this.renderSelectItem('m')}
          {disabledSeconds ? null : this.renderSelectItem('s')}
        </div>
      </div>
    );
    return (
      <Popover
        pop={pop}
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
