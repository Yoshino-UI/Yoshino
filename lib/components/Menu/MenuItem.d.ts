/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
export interface IMenuItemProps extends IBaseComponent {
    /**
     * 组件深度 - 用于控制paddingLeft
     */
    deep: number;
    /**
     * 激活key
     */
    activeKey: string;
    /**
     * 唯一id
     */
    keyId: string;
    /**
     * 选项 - 变化回调
     */
    onSelect: (activeKey: string) => void;
    /**
     * 禁用
     */
    disabled: boolean;
}
export interface IMenuItemState {
}
/**
 * **菜单**-提供导航功能
 */
export declare class MenuItem extends Component<IMenuItemProps, IMenuItemState> {
    static defaultProps: {
        active: boolean;
        disabled: boolean;
    };
    onSelect: () => void;
    render(): JSX.Element;
}
export default MenuItem;
