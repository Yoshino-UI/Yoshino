/// <reference types="react" />
import { Component, ReactNode } from 'react';
import * as React from 'react';
import { IBaseComponent } from '../template/component';
export interface IInputProps extends IBaseComponent {
    /**
     * 输入框的值
     */
    value: string;
    /**
     * 组件大小
     */
    size: 'small' | 'default' | 'large';
    /**
     * 回车回调事件
     */
    onEnter?: () => void;
    /**
     * 头部
     */
    header?: ReactNode | string;
    /**
     * 尾部
     */
    footer?: ReactNode | string;
    /**
     * 头部style
     */
    headerStyle?: {
        [key: string]: any;
    };
    /**
     * 尾部style
     */
    footerStyle?: {
        [key: string]: any;
    };
}
export interface IInputState {
    /**
     * 值
     */
    value: string;
}
/**
 * **输入框**-用于获取用书通过键盘输入的内容
 */
export declare class Input extends Component<IInputProps, IInputState> {
    state: {
        value: string;
    };
    static defaultProps: {
        size: string;
    };
    onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export default Input;
