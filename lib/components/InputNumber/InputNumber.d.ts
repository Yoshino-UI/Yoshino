/// <reference types="react" />
import { Component } from 'react';
import * as React from 'react';
import { IBaseComponent } from '../template/component';
export interface IInputNumberProps extends IBaseComponent {
    /**
     * 输入框的值
     */
    value: number;
    /**
     * 组件大小
     */
    size: 'small' | 'default' | 'large';
    /**
     * 变化回调事件
     */
    onChange?: (value: number) => void;
    /**
     * 最小值
     */
    min: number;
    /**
     * 最大值
     */
    max: number;
    /**
     * 步长
     */
    step: number;
}
export interface IInputNumberState {
    /**
     * 内部状态维护
     */
    value: number;
}
/**
 * **数字输入框**-仅用于数字输入。该组件为了保证输入值为纯数字，state放在内部维护，value只是一个初始值，要获得最新值请通过onChange，在外部改变value不会影响视图刷新。
 */
export declare class InputNumber extends Component<IInputNumberProps, IInputNumberState> {
    static defaultProps: {
        size: string;
        min: number;
        max: number;
        value: number;
        step: number;
    };
    state: {
        value: number;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPlus: () => void;
    onMinus: () => void;
    render(): JSX.Element;
}
export default InputNumber;
