/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
export interface ILoadingProps extends IBaseComponent {
    /**
     * loading类型
     */
    type: 'a' | 'b' | 'c' | 'd';
    /**
     * 大小，默认default
     */
    size?: 'small' | 'default' | 'large';
    /**
     * 加载文本
     */
    text?: string | boolean;
}
export interface ILoadingState {
}
/**
 * **加载**-表示当前处于加载状态中。
 */
export declare class Loading extends Component<ILoadingProps, ILoadingState> {
    static defaultProps: {
        type: string;
        size: string;
        text: boolean;
    };
    render(): JSX.Element;
}
export default Loading;
