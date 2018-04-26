/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
import { StepsItem } from './StepsItem';
export interface IStepsProps extends IBaseComponent {
    /**
     * 方向 'vertical' | 'horizontal'
     */
    direction: 'vertical' | 'horizontal';
    /**
     * 当前步骤  从0开始计数
     */
    current: number;
    /**
     * 大小
     */
    size: 'default' | 'small';
}
export interface IStepsState {
}
/**
 * **步骤条**-流程状态
 */
export declare class Steps extends Component<IStepsProps, IStepsState> {
    static defaultProps: {
        direction: string;
        size: string;
        current: number;
    };
    static Item: typeof StepsItem;
    render(): JSX.Element;
}
export default Steps;
