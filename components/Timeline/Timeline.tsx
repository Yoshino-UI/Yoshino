
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

export interface ITimelineProps extends IBaseComponent {
  /**
   * 图标宽度
   */
  iconWidth?: number;
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
   * 线条宽度
   */
  lineWidth?: number;
}

export interface ITimelineState {

}

/**
 * **时间轴**-用于展示不同时间节点上的信息。
 */
export class Timeline extends Component<ITimelineProps, ITimelineState> {
  // tslint:disable
  static Item: any;

  static defaultProps = {
    iconColor: '',
    iconLine: 2,
    iconType: 'solid',
    lineColor: '',
    lineType: 'solid',
    iconWidth: 15,
    lineWidth: 2,
  }
  render() {
    const {
      className, style, children,
      iconColor, iconLine, iconType,
      lineColor, lineType,
      iconWidth,  lineWidth,
      ...otherProps
    } = this.props;
    const preCls = 'yoshino-timeline';
    const childrens = React.Children.toArray(children).filter(item => item);
    const clsName = classNames(
      preCls, className,
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        {
          React.Children.map(childrens, (ele: React.ReactElement<any>) => {
            return React.cloneElement(ele, {
              parentIcon: {
                width: iconWidth,
                color: iconColor,
                line: iconLine,
                type: iconType,
              },
              parentLine: {
                color: lineColor,
                width: lineWidth,
                type: lineType,
              },
            });
          })
        }
      </div>
    );
  }
}

export default Timeline;
