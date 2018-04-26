/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
export interface ISwitchProps extends IBaseComponent {
    /**
     * 大小 可选值
     */
    size: 'default' | 'small';
    /**
     * 变化时回调函数
     */
    onChange?: (checked: boolean) => void;
    /**
     * 当前是否选中
     */
    checked: boolean;
    /**
     * 是否禁用
     */
    disabled: boolean;
}
export interface ISwitchState {
    checked: boolean;
}
/**
 * **开关选择器**-切换开关状态。
 */
export declare class Switch extends Component<ISwitchProps, ISwitchState> {
    state: {
        checked: boolean;
    };
    static defaultProps: {
        size: string;
        checked: boolean;
        disabled: boolean;
    };
    onClick: () => -1 | undefined;
    render(): JSX.Element;
}
export default Switch;
