import * as React from 'react';
import * as classNames from 'classnames';
import * as moment from 'moment';
import Icon from '../Icon';
import { valueTransition } from '../utils/';

interface IProps {
  /**
   * 默认提示文本
   */
  placeholder?: string;
  /**
   * 值
   */
  value: string;
  /**
   * 值变化回调
   */
  onChange: (v: string) => void;
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

export default class TimePanel extends React.Component<IProps> {
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
    format: 'HH:mm:ss'
  };

  onChange = (value: string) => {
    const { onChange } = this.props;
    onChange(value);
  }

  renderSelectItem = (type: 'h' | 'm' | 's') => {
    const values: string[] = [];
    let selectedItem = 0;
    const { format, value } = this.props;
    const v = value;
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
                  onClick={(e) => {
                    if (this.refPanelInput) {
                      this.refPanelInput.focus();
                    }
                    const { format } = this.props;
                    const time = Number(item);
                    const  v = value;
                    let m = v ? moment(v, format) : moment();
                    const typeAction = {
                      h: () => m.hour(time),
                      m: () => m.minute(time),
                      s: () => m.second(time),
                    };
                    m = typeAction[type]();
                    this.onChange(m.format(format));
                    // tslint:disable-next-line
                    const offsetTop = (e.target as any).offsetTop;
                    const syncScrollTop = (dom: HTMLDivElement) => {
                      const start = dom.scrollTop;
                      const end = offsetTop;
                      valueTransition({
                        start, end,
                      }, (v) => {
                        dom.scrollTop = v;
                      });
                    };
                    const scrollTypeAction = {
                      h: () => syncScrollTop(this.refHourDiv),
                      m: () => syncScrollTop(this.refMinuteDiv),
                      s: () => syncScrollTop(this.refSecondDiv),
                    };
                    setTimeout(scrollTypeAction[type], 0);
                  }}
                  ref={(v) => {
                    if (v && isActive) {
                      const offsetTop = v.offsetTop;
                      const syncScrollTop = (dom: HTMLDivElement) => {
                        dom.scrollTop = offsetTop;
                      };
                      const scrollTypeAction = {
                        h: () => syncScrollTop(this.refHourDiv),
                        m: () => syncScrollTop(this.refMinuteDiv),
                        s: () => syncScrollTop(this.refSecondDiv),
                      };
                      setTimeout(scrollTypeAction[type], 0);
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

  render() {
    const {
      placeholder, disabledHours, disabledMinutes, disabledSeconds,
      value,
    } = this.props;
    const preCls = this.preCls;
    return (
      <div className={`${preCls}-panel`}>
        <div className={`${preCls}-input-wrap`}>
          <input
            placeholder={placeholder}
            readOnly
            value={value}
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
  }
}
