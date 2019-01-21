// tslint:disable no-any
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Validator from './Validator';
import { IColProps } from '../Grid/Col';
import { IRowProps } from '../Grid/Row';
import * as PropTypes from 'prop-types';

export interface IFormProps extends IBaseComponent {
  onChange?: (v: any) => void;
  /**
   * label布局
   */
  labelCol?: IColProps;
  /**
   * 控件布局
   */
  wrapperCol?: IColProps;
  /**
   * 实时校验
   */
  rt?: boolean;
  row?: IRowProps;
  /**
   * 值为空时默认提示文案
   */
  requiredMsg?: string;
}

export interface IFormState {
  value: {
    [index: string]: any;
  };
}

/**
 * **组件中文名称**-组件描述。
 */
export class Form extends Component<IFormProps, IFormState> {
  static Validator = Validator;
  checkers: {[index: string]: () => boolean | string} =  {};
  value: {[index: string]: any} = {};
  preCls = 'yoshino-form';

  static defaultProps = {
    labelCol: {
      span: 3,
    },
    wrapperCol: {
      span: 10,
    },
    row: {
      align: 'middle',
      type: 'flex',
    },
    rt: false,
    requiredMsg: '${name}不能为空',
  };

  static childContextTypes = {
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    onPushChecker: PropTypes.func,
    onDeleteChecker: PropTypes.func,
    row: PropTypes.object,
    wrapperCol: PropTypes.object,
    labelCol: PropTypes.object,
    rt: PropTypes.bool,
    requiredMsg: PropTypes.string,
  };

  getChildContext() {
    const { row, wrapperCol, labelCol, rt, requiredMsg } = this.props;
    return {
      onChange: this.onChange,
      onDelete: this.onDelete,
      onPushChecker: this.onPushChecker,
      onDeleteChecker: this.onDeleteChecker,
      row,
      wrapperCol,
      labelCol,
      rt,
      requiredMsg,
    };
  }

  onChange = (name: string, v: any) => {
    const { onChange } = this.props;
    this.value[name] = v;

    if (onChange) {
      onChange(this.value);
    }
  }

  onDelete = (name: string) => {
    delete this.value[name];
  }

  onPushChecker = (name: string, checker: () => boolean | string) => {
    this.checkers[name] = checker;
  }

  onDeleteChecker = (name: string) => {
    delete this.checkers[name];
  }

  check = () => {
    let flag = true;
    Object.values(this.checkers).forEach((check) => {
      const result = check();
      if (result !== true) {
        flag = false;
      }
    });
    if (flag) {
      return this.state.value;
    }
    return flag;
  }

  render() {
    const {
      className, style, children, rt,
      onChange, row, wrapperCol, labelCol,
      ...otherProps} = this.props;
    const preCls = this.preCls;
    const clsName = classNames(
      preCls, className,
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
}

export default Form;
