/// <reference types="react" />
import { Component, ReactNode } from 'react';
import { IBaseComponent } from '../template/component';
export interface IButtonProps extends IBaseComponent {
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 按钮类型
     */
    type?: 'primary' | 'dashed' | 'danger';
    /**
     * 默认正常形式
     */
    shape?: 'circle';
    /**
     * 默认default
     */
    size?: 'small' | 'large';
    /**
     * 幽灵模式，默认false
     */
    ghost: boolean;
    /**
     * 图标
     */
    icon: string | ReactNode;
    /**
     * 加载状态
     */
    loading: boolean;
    /**
     * 图标位置
     */
    tail: boolean;
}
export interface IButtonState {
}
/**
 * **按钮**-用于点击操作。
 */
export declare class Button extends Component<IButtonProps, IButtonState> {
    static defaultProps: {
        ghost: boolean;
        loading: boolean;
        tail: boolean;
    };
    render(): JSX.Element;
}
export default Button;
