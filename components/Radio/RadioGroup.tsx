
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import {IRadioProps} from './Radio';

// tslint:disable:no-any
export interface IRadioGroupProps extends IBaseComponent {
  /**
   * 选中的值
   */
  value?: any;
  /**
   * 变化回调
   */
  onChange?: (value: any) => void;
  /**
   * 默认值
   */
  defaultValue?: any;
}

export interface IRadioGroupState {
  value: any;
}

/**
 * **单选按钮**-用于从多个条件中筛选单个选项
 */
export class RadioGroup extends Component<IRadioGroupProps, IRadioGroupState> {
  static defaultProps = {
    defaultValue: '',
  };

  state = {
    value: this.props.defaultValue,
  };

  onChange = (value: any) => {
    this.onChangeTrigger(value);
  }

  onChangeTrigger = (value: any) => {
    const {onChange} = this.props;
    this.setState({
      value,
    });
    if (onChange) {
      onChange(value);
    }
  }

  getValue = () => {
    const {value} = this.props;
    return value !== undefined ? value : this.state.value;
  }

  render() {
    const {className, style, value, defaultValue, children, onChange, ...otherProps} = this.props;
    const preCls = 'yoshino-radio-group';
    const inValue = this.getValue();
    const clsName = classNames(
      preCls, className,
    );
    const childrens = React.Children.toArray(children).filter((item) => item);
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
       {
         React.Children.map(childrens, (ele: React.ReactElement<IRadioProps>) => {
          return React.cloneElement(ele, {
            checked: ele.props.value === inValue,
            onChange: this.onChange,
          });
        })
       }
      </div>
    );
  }
}

export default RadioGroup;
