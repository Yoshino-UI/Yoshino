/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
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
export declare class Progress extends Component<IProgressProps, IProgressState> {
    static defaultProps: {
        percent: number;
    };
    render(): JSX.Element;
}
export default Progress;
