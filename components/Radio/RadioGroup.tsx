
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';
import {IRadioProps} from './Radio';

// tslint:disable:no-any
export interface IRadioGroupProps extends IBaseComponent {
  /**
   * 选中的值
   */
  value: any;
  /**
   * 子元素的name
   */
  name: string;
  /**
   * 变化回调
   */
  onChange: (value: any) => void;
  /**
   * 默认值
   */
  defaultValue: any;
}

export interface IRadioGroupState {
  value: any;
}

/**
 * **单选按钮**-用于从多个条件中筛选单个选项
 */
export class RadioGroup extends Component<IRadioGroupProps, IRadioGroupState> {
  static defaultProps = {

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

  render() {
    const {className, style, name, value, defaultValue, children, onChange, ...otherProps} = this.props;
    const preCls = 'yoshino-radio-group';
    const inValue = value ? value : this.state.value;
    const clsName = classNames(
      className, preCls,
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
            name,
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
