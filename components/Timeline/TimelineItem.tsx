
import {Component, ReactNode} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

export interface ITimelineItemProps extends IBaseComponent {
  /**
   * 图标颜色
   */
  iconColor?: string;
  /**
   * 图标类型
   */
  iconType?: 'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
  /**
   * 图标线
   */
  iconLine?: string;
  /**
   * 线条颜色
   */
  lineColor?: string;
  /**
   * 线条类型
   */
  lineType?: 'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
  /**
   * 时间
   */
  time?: string;
  /**
   * 自定义icon
   */
  icon?: ReactNode;
  /**
   * icon - 来自父组件timeline
   */
  parentIcon: IIcon;
  /**
   * line - 来自父组件timeline
   */
  parentLine: ILine;
}

export interface IIcon {
  width: number;
  color: string;
  line: number;
  type: string;
}

export interface ILine {
  width: number;
  color: string;
  type: string;
}

export interface ITimelineItemState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class TimelineItem extends Component<ITimelineItemProps, ITimelineItemState> {
  render() {
    const {
      className, style, time,
      iconColor, iconLine, iconType,
      lineColor, lineType, icon,
      parentIcon, parentLine,
      children, ...otherProps,
    } = this.props;
    const preCls = 'yoshino-timeline-item';
    const lineStyle = {
      borderLeftColor: `{lineColor ? lineColor : parentLine.color}`,
      borderLeftWidth: `${parentLine.width}px`,
      borderLeftStyle: `${lineType ? lineType : parentLine.type}`,
      left: `${parentIcon.width / 2 - parentLine.width / 2}px`,
    };
    const iconStyle = {
      borderStyle: `${iconType ? iconType : parentIcon.type}`,
      borderWidth: `${iconLine ? iconLine : parentIcon.line}px`,
      borderColor: `${ iconColor ? iconColor : parentIcon.color}`,
      width: `${parentIcon.width}px`,
      height: `${parentIcon.width}px`,
      borderRadius: '50%',
    };
    const contentStyle = {
      left: `${parentIcon.width * 2}px`,
    };
    const clsName = classNames(
      preCls, className,
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        <div className={`${preCls}-line`} style={lineStyle as React.CSSProperties}/>
        <div className={`${preCls}-icon`}>
          {icon ? icon : <div style={iconStyle}/>}
        </div>
        <div className={`${preCls}-content`} style={contentStyle}>
          {time ? <div className={`${preCls}-time`}>{time}</div> : null}
          {children ? <div className={`${preCls}-des`}>{children}</div> : null}
        </div>
      </div>
    );
  }
}

export default TimelineItem;
