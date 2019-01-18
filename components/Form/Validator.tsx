// tslint:disable no-any
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Grid from '../Grid';
import { IColProps } from '../Grid/Col';
import { IRowProps } from '../Grid/Row';
import Transitions from '../Transitions';
import * as PropTypes from 'prop-types';

const { Row, Col } = Grid;
const { Slide } = Transitions;

export interface IValidatorProps extends IBaseComponent {
  /**
   * 值变化触发器 onChange
   */
  valueTrigger?: string;
  /**
   * 数值名
   */
  valueName?: string;
  /**
   * 初始值
   */
  value?: any;
  /**
   * 字段key
   */
  name: string;
  /**
   * 是否为必填项
   */
  required?: boolean;
  /**
   * 错误提示信息
   */
  message?: string;
  /**
   * 校验器
   */
  checkers?: Array<(v: any) => boolean | string>;
  /**
   * 包裹的控件
   */
  children: React.ReactElement<any>;
  /**
   * 标题名
   */
  label: React.ReactNode;
  /**
   * label布局
   */
  labelCol?: IColProps;
  /**
   * 控件布局
   */
  wrapperCol?: IColProps;
  row?: IRowProps;
}

export interface IValidatorState {
  value: any;
  error: boolean;
  message: string;
}

/**
 * **组件中文名称**-组件描述。
 */
export class Validator extends Component<IValidatorProps, IValidatorState> {
  preCls = 'yoshino-validator';
  labelId = `validator-${Math.round(new Date().getTime() * Math.random())}`;

  static contextTypes = {
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    onPushChecker: PropTypes.func,
    onDeleteChecker: PropTypes.func,
    row: PropTypes.object,
    wrapperCol: PropTypes.object,
    labelCol: PropTypes.object,
    rt: PropTypes.bool,
  };

  static defaultProps = {
    valueTrigger: 'onChange',
    valueName: 'value',
    value: '',
  };

  state = {
    value: this.props.value,
    error: false,
    message: '',
  };

  componentDidMount() {
    const {
      name, value,
    } = this.props;
    this.context.onChange(name, value);
    this.context.onPushChecker(name, this.onCheck);
  }

  componentWillUnmount() {
    const {
      name
    } = this.props;
    this.context.onDelete(name);
    this.context.onDeleteChecker(this.onCheck);
  }

  onChange = (v: any) => {
    const {
      name
    } = this.props;
    this.context.onChange(name, v);
    this.setState({
      value: v,
    }, () => {
      if (this.context.rt || this.state.error) {
        this.onCheck();
      }
    });
  }

  onCheck = () => {
    const {
      checkers, required,
    } = this.props;
    const { value } = this.state;
    let message = '';
    let flag = true; // 校验是否全部通过
    if (required && value === '') {
      flag = false;
    } else if (checkers) {
      flag = checkers.every((c) => {
        const r = c(value);
        if (typeof r === 'string') {
          message = r;
        }
        return r === true;
      });
    }
    this.setState({
      error: !flag,
      message,
    });
    return flag;
  }

  renderChildren = () => {
    const {
      children, valueName, valueTrigger,
    } = this.props;
    const {
      value
    } = this.state;
    const id = children.props.id;
    return React.cloneElement(children, {
      [`${valueName}`]: value,
      [`${valueTrigger}`]: this.onChange,
      id: id ? `${id} ${this.labelId}` : this.labelId,
    });
  }

  render() {
    const {
      className, style, children, valueName,
      message, valueTrigger, checkers, label,
      labelCol, wrapperCol, row, required,
      ...otherProps} = this.props;
    const { error } = this.state;
    const preCls = this.preCls;
    const rowR = row || this.context.row;
    const labelColR = labelCol || this.context.labelCol;
    const wrapperColR = wrapperCol || this.context.wrapperCol;
    const clsName = classNames(
      preCls, className,
      {
        [`${preCls}-has-error`]: error,
      }
    );
    const labelCls = classNames(
      `${this.preCls}-label`,
      {
        [`${this.preCls}-required`]: required,
      }
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        <Row {...rowR}>
          <Col {...labelColR}>
            <label
              htmlFor={this.labelId}
              className={labelCls}
            >
              {label}:
            </label>
          </Col>
          <Col {...wrapperColR}>
            <div className={`${preCls}-control`}>
              {this.renderChildren()}
            </div>
          </Col>
        </Row>
        <Slide
          direction='top'
          active={error}
        >
          <div className={`${preCls}-error-container`}>
            <Row {...rowR}>
              <Col {...labelColR}/>
              <Col {...wrapperColR}>
                <div className={`${preCls}-error`}>
                  {error ? (this.state.message || message) : null}
                </div>
              </Col>
            </Row>
          </div>
        </Slide>
      </div>
    );
  }
}

export default Validator;
