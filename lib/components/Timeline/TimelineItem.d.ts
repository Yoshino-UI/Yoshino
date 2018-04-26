/// <reference types="react" />
import { Component, ReactNode } from 'react';
import { IBaseComponent } from '../template/component';
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
export declare class TimelineItem extends Component<ITimelineItemProps, ITimelineItemState> {
    render(): JSX.Element;
}
export default TimelineItem;
