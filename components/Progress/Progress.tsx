
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';

export interface IProgressProps extends IBaseComponent {
  /**
   * 进度条背景色
   */
  bgColor: string;
  /**
   * 进度条颜色
   */
  barColor: string;
  /**
   * 当前百分比
   */
  percent: number;
}

export interface IProgressState {

}

/**
 * **进度条**-展示当前操作流程进度。
 */
export class Progress extends Component<IProgressProps, IProgressState> {
  static defaultProps = {
    percent: 0,
  };

  render() {
    const {className, style, percent, barColor, bgColor, ...otherProps} = this.props;
    const preCls = 'yoshino-progress';
    const clsName = classNames(
      className, preCls,
    );
    const bgColorStyle = bgColor ? {backgroundColor: bgColor} : {};
    const barColorStyle = barColor ? {backgroundColor: barColor} : {};
    return (
      <div
        className={clsName}
        style={{...style, ...bgColorStyle}}
        {...otherProps}
      >
        <div className={`${preCls}-bar`} style={{width: `${percent}%`, ...barColorStyle}}/>
      </div>
    );
  }
}

export default Progress;
