
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import {ICheckboxProps} from './Checkbox';

// tslint:disable:no-any
export interface ICheckboxGroupProps extends IBaseComponent {
  /**
   * 选中的值
   */
  value?: any[];
  /**
   * 变化回调
   */
  onChange?: (values: any[]) => void;
  /**
   * 默认值
   */
  defaultValue?: any[];
}

export interface ICheckboxGroupState {
  value: any;
}

/**
 * **单选按钮**-用于从多个条件中筛选单个选项
 */
export class CheckboxGroup extends Component<ICheckboxGroupProps, ICheckboxGroupState> {
  static defaultProps = {
    defaultValue: [],
  };

  state = {
    value: this.props.defaultValue as any[],
  };

  onChange = (value: any) => {
    this.onChangeTrigger(value);
  }

  onChangeTrigger = (value: any) => {
    const {onChange} = this.props;
    const values =  this.getValue();

    if (values.indexOf(value) !== -1) {
      values.splice(values.indexOf(value), 1);
    } else {
      values.push(value);
    }
    this.setState({
      value: values,
    });
    if (onChange) {
      onChange(values);
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
         React.Children.map(childrens, (ele: React.ReactElement<ICheckboxProps>) => {
          return React.cloneElement(ele, {
            checked: inValue.indexOf(ele.props.value) !== -1,
            onChange: this.onChange,
          });
        })
       }
      </div>
    );
  }
}

export default CheckboxGroup;
