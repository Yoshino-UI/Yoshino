
import {Component, ReactNode} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Icon from '../Icon';

export interface IRateProps extends IBaseComponent {
  /**
   * 总数
   */
  count?: number;
  /**
   * 初始值
   */
  value?: number;
  /**
   * 是否允许半值
   */
  half?: boolean;
  /**
   * 是否允许清除
   */
  clear?: boolean;
  /**
   * 变化回调
   */
  onChange?: (value: number) => void;
  /**
   * 自定义字符
   */
  character?: string | ReactNode;
}

export interface IRateState {
  value: number;
  tempValue: number;
}

/**
 * **评分**-对目标进行评分操作。
 */
export class Rate extends Component<IRateProps, IRateState> {
  state = {
    tempValue: this.props.value as number,
    value: this.props.value as number,
  };

  static defaultProps = {
    count: 5,
    value: 0,
    half: false,
    clear: false,
    character: <Icon type='ios-star'/>,
  };

  showCharater = (count: number) => {
    const arr = [];
    const preCls = 'yoshino-rate';
    for (let index = 0; index < count; index++) {
      const first = index + 1;
      const last = index + (this.props.half ? 0.5 : 1);
      const value = this.state.tempValue;
      const hoverCls = `${preCls}-hover`;
      const firstCls = classNames(`${preCls}-first-child`, first <= value ? hoverCls : '');
      const lastCls = classNames(`${preCls}-last-child`, last <= value ? hoverCls : '');
      arr.push((
        <div
          className={`${preCls}-item`}
          key={index}
        >
          <div
            className={firstCls}
            onMouseOver={this.onMouseOver.bind(this, first)}
            onClick={this.onClick.bind(this, first)}
          >
            <span>{this.props.character}</span>
          </div>
          <div
            className={lastCls}
            onMouseOver={this.onMouseOver.bind(this, last)}
            onClick={this.onClick.bind(this, last)}
          >
            <span>{this.props.character}</span>
          </div>
        </div>
      ));
    }
    return arr;
  }

  onMouseOver = (tempValue: number) => {
    this.setState({
      tempValue,
    });
  }

  onMouseOut = () => {
    const value = this.state.value;
    this.setState({
      tempValue: value,
    });
  }

  onClick = (value: number) => {
    const clear = this.props.clear && value === this.state.value;
    const newValue = clear ? 0 : value;

    this.setState({value: newValue, tempValue: newValue});

    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
  }

  render() {
    const {className, style, count} = this.props;
    const preCls = 'yoshino-rate';
    const clsName = classNames(
      preCls, className,
    );
    return (
      <div
        className={clsName}
        style={style}
        onMouseOut={this.onMouseOut}
      >
        {this.showCharater(count)}
      </div>
    );
  }
}

export default Rate;
