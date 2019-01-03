
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

export interface IProgressProps extends IBaseComponent {
  /**
   * 进度条背景色
   */
  bgColor?: string;
  /**
   * 进度条颜色
   */
  strokeColor?: string;
  /**
   * 当前百分比
   */
  percent: number;
  /**
   * 进度条类型
   */
  type?: 'line' | 'circle';
  /**
   * 直径
   */
  diameter?: number;
  /**
   * 进度条宽度
   */
  strokeWidth?: number;
  /**
   * 内容模板
   */
  format?: (percent: number) => string;
}

export interface IProgressState {

}

/**
 * **进度条**-展示当前操作流程进度。
 */
export class Progress extends Component<IProgressProps, IProgressState> {
  preCls = 'yoshino-progress';

  static defaultProps = {
    percent: 0,
    type: 'line',
    diameter: 120,
  };

  getPercent = () => {
    const { percent } = this.props;
    if (percent < 0) {
      return 0;
    }
    if (percent > 100) {
      return 100;
    }
    return percent;
  }

  renderCircle = () => {
    const { diameter, strokeWidth = 8,
      strokeColor, bgColor, format } = this.props;
    const percent = this.getPercent();
    const o = diameter! / 2;
    const r = (diameter! - strokeWidth!) / 2;
    const strokeDashArray = 2 * Math.PI * r;
    const strokeDashOffset = (strokeDashArray * (100 - percent)) / 100;

    return (
      <>
        <svg className={`${this.preCls}-svg`} viewBox={`0 0 ${diameter} ${diameter}`}>
        <circle cx={o} cy={o} r={r} fill='none' strokeWidth={strokeWidth} stroke={bgColor}/>
        <circle
          className={`${this.preCls}-svg-circle`}
          cx={o}
          cy={o}
          r={r}
          fill='none'
          style={strokeColor ? {stroke: strokeColor} : {}}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDashArray}
          strokeDashoffset={strokeDashOffset}
        />
      </svg>
      <span
        className={`${this.preCls}-circle-value`}
        style={{fontSize: (diameter as number) / 5}}
      >
        {format ? format(percent) : `${percent}%`}
      </span>
      </>
    );
  }

  render() {
    const {
      className, style, format,
      strokeColor, bgColor, type,
      strokeWidth = 6, diameter,
      ...otherProps} = this.props;
    const preCls = this.preCls;
    const clsName = classNames(
      preCls, className, `${preCls}-${type}`
    );
    const bgColorStyle = bgColor ? {backgroundColor: bgColor} : {};
    const strokeColorStyle = strokeColor ? {backgroundColor: strokeColor} : {};
    const circleStyle = type === 'circle' ? {width: diameter, height: diameter} : {};
    const lineHeightStyle = type === 'line' ? {height: strokeWidth} : {};
    const percent = this.getPercent();
    delete otherProps.percent;
    return (
      <div
        className={clsName}
        style={{...style, ...bgColorStyle, ...circleStyle, ...lineHeightStyle}}
        {...otherProps}
      >
        {type === 'line' ? <div className={`${preCls}-bar`} style={{width: `${percent}%`, ...strokeColorStyle}}/> : null}
        {type === 'circle' ? this.renderCircle() : null}
      </div>
    );
  }
}

export default Progress;
