/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
export interface IBadgeProps extends IBaseComponent {
    /**
     * 展示的数字
     */
    count: number;
    /**
     * 展示数字最大值
     */
    max: number;
    /**
     * count为0的时候是否显示徽标
     */
    showZero: boolean;
    /**
     * 不显示数字
     */
    dotted: boolean;
}
export interface IBadgeState {
}
/**
 * **徽标**-一般用于消息提醒
 */
export declare class Badge extends Component<IBadgeProps, IBadgeState> {
    static defaultProps: {
        max: number;
        showZero: boolean;
        dotted: boolean;
    };
    render(): JSX.Element;
}
export default Badge;
