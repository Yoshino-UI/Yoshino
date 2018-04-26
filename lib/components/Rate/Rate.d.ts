/// <reference types="react" />
import { Component, ReactNode } from 'react';
import { IBaseComponent } from '../template/component';
export interface IRateProps extends IBaseComponent {
    /**
     * 总数
     */
    count: number;
    /**
     * 初始值
     */
    value: number;
    /**
     * 是否允许半值
     */
    half: boolean;
    /**
     * 是否允许清除
     */
    clear: boolean;
    /**
     * 变化回调
     */
    onChange?: (value: number) => void;
    /**
     * 自定义字符
     */
    character: string | ReactNode;
}
export interface IRateState {
    value: number;
    tempValue: number;
}
/**
 * **评分**-对目标进行评分操作。
 */
export declare class Rate extends Component<IRateProps, IRateState> {
    state: {
        tempValue: number;
        value: number;
    };
    static defaultProps: {
        count: number;
        value: number;
        half: boolean;
        clear: boolean;
        character: JSX.Element;
    };
    showCharater: (count: number) => JSX.Element[];
    onMouseOver: (tempValue: number) => void;
    onMouseOut: () => void;
    onClick: (value: number) => void;
    render(): JSX.Element;
}
export default Rate;
