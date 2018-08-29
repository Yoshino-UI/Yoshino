
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import Tag from '../Tag';
import {IBaseComponent} from '../template/component';
import Option, {IOptionProps} from './Option';
import OptGroup, {IOptionGroupProps} from './OptGroup';
import Pop from '../Pop';
import Transitions from '../Transitions';
import Icon from '../Icon';

export type Value = string | number | Array<number | string>;

export interface ISelectProps extends IBaseComponent {
  /**
   * 受控值
   */
  value?: Value;
  /**
   * 默认值
   */
  defaultValue?: Value;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 变化回调
   */
  onChange?: (value: Value) => void;
  /**
   * 尺寸
   */
  size?: 'small' | 'large' | 'default';
  /**
   * 模式
   */
  mode?: 'single' | 'multiple';
  /**
   * placeholder
   */
  placeholder?: string;
}

export interface ISelectState {
  value: Value;
  visible: boolean;
}

const {Expand} = Transitions;

/**
 * **组件中文名称**-组件描述。
 */
export class Select extends Component<ISelectProps, ISelectState> {
  refChildTarget?: HTMLDivElement;
  clickCount = 0;

  static defaultProps = {
    mode: 'single',
    size: 'default',
  };

  constructor(props: ISelectProps) {
    super(props);
  }

  // 动画时间
  timeout = 300;

  static Option: typeof Option;
  static OptGroup: typeof OptGroup;

  state = {
    value: this.props.defaultValue!,
    visible: false,
  };

  getValue = () => {
    const {value} = this.props;
    return value !== undefined ? value : this.state.value;
  }

  onChange = (value: number | string) => {
   this.onChangeTrigger(value);
  }

  onChangeTrigger = (value: number | string) => {
    const {onChange, mode} = this.props;
    const values = this.getValue();
    let newValue;
    // 单选模式
    if (mode === 'single') {
      newValue = value;
      this.toggleVisible();
    } else {
      if (!Array.isArray(values)) {
        return;
      }
      if (values.indexOf(value) !== -1) {
        values.splice(values.indexOf(value), 1);
      } else {
        values.push(value);
      }
      newValue = values.concat();
    }

    if (onChange) {
      onChange(newValue);
    }

    this.setState({
      value: newValue,
    });
  }

  toggleVisible = () => {
    const { visible } = this.state;
    this.setState({visible: !visible});
  }

  render() {
    const {
      className, style, onChange,
      value, defaultValue, disabled,
      children, mode, size, placeholder,
      ...otherProps} = this.props;
    const preCls = 'yoshino-select';
    const {visible} = this.state;
    const clsName = classNames(
      preCls, className,
      `${preCls}-${mode}`,
      {
        [`${preCls}-hidden`]: !visible,
        [`${preCls}-disabled`]: disabled,
        [`${preCls}-enabled`]: !disabled,
      }
    );
    const values = this.getValue();
    const list = (
      <Expand timeout={this.timeout} active={visible}>
        <ul>
          {
            React.Children.map(children, (ele: React.ReactElement<IOptionProps | IOptionGroupProps>) => {
              return React.cloneElement(ele, {
                onChange: this.onChange,
              });
            })
          }
        </ul>
      </Expand>
    );
    return (
      <Pop
        content={list}
        placement='bottom'
        inheritWidth
        trigger='focus'
        visible={!disabled}
        mouseLeaveDelay={this.timeout}
        overlayClassName={`${preCls}-list`}
        onChangeBefore={(v) => {
          if (!disabled) {
            this.setState({visible: v});
            if (!v) {
              this.clickCount = 0;
            }
          }
        }}
      >
        <div
          className={clsName}
          style={style}
          tabIndex={0}
          {...otherProps}
          ref={(v) => {
            if (v) {
              this.refChildTarget = v;
            }
          }}
          onClick={() => {
            if (++this.clickCount === 2) {
              this.clickCount = 0;
              if (this.refChildTarget) {
                this.refChildTarget.blur();
              }
            }
          }}
        >
          <div className={`${preCls}-selection ${preCls}-${size}`}>
            {values.toString() === '' ? <div className={`${preCls}-placeholder`}>{placeholder}</div> : null}
              {
                mode === 'single' || !Array.isArray(values) ? (
                  <span>{values}</span>
                ) : (
                  <div className={`${preCls}-container`}>
                    {
                      values.map((item) => {
                        return (
                          <Tag
                            key={item}
                            closeable
                            style={{marginRight: 4}}
                            onClose={() => {
                              // 执行tag动画
                              setTimeout(() => {
                                this.onChange(item);
                              }, 300);
                            }}
                          >
                            {item}
                          </Tag>
                        );
                      })
                    }
                  </div>
                )
              }
            <Icon type='chevron-up' className={`${preCls}-icon`}/>
          </div>
        </div>
      </Pop>
    );
  }
}

Select.Option = Option;
Select.OptGroup = OptGroup;

export default Select;
