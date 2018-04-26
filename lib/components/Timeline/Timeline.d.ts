/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
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
export declare class Timeline extends Component<ITimelineProps, ITimelineState> {
    static Item: any;
    static defaultProps: {
        iconColor: string;
        iconLine: number;
        iconType: string;
        lineColor: string;
        lineType: string;
        iconWidth: number;
        lineWidth: number;
    };
    render(): JSX.Element;
}
export default Timeline;
