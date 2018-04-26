/// <reference types="react" />
import { Component, ReactNode } from 'react';
import { IBaseComponent } from '../template/component';
export interface IStepsItemProps extends IBaseComponent {
    /**
     * 步骤名
     */
    title: string;
    /**
     * 自定义图标
     */
    icon?: ReactNode;
    /**
     * steps方向
     */
    direction: 'vertical' | 'horizontal';
    /**
     * 步骤值
     */
    value: number;
    /**
     * 大小
     */
    size: 'default' | 'small';
    /**
     * steps的步骤值
     */
    current: number;
    /**
     * 当前步骤状态
     */
    status: 'error' | 'finished';
}
export interface IStepsItemState {
}
/**
 * **组件中文名称**-组件描述。
 */
export declare class StepsItem extends Component<IStepsItemProps, IStepsItemState> {
    static defaultProps: {
        error: boolean;
    };
    render(): JSX.Element;
}
export default StepsItem;
