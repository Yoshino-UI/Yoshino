/// <reference types="react" />
import { Component } from 'react';
import * as React from 'react';
import { IBaseComponent } from '../template/component';
export interface IMenuItemGroupProps extends IBaseComponent {
    /**
     * 组件深度 - 用于控制paddingLeft
     */
    deep: number;
    /**
     * 标题
     */
    title: number | React.ReactNode;
    /**
     * 标志
     */
    keyId: string;
    /**
     * 激活key
     */
    activeKey: string;
    /**
     * 选项 - 变化回调
     */
    onSelect?: (activeKey: string) => void;
    /**
     * 展开回调
     */
    onOpenChange: (openKeys: string[]) => void;
}
export interface IMenuItemGroupState {
}
/**
 * **菜单**-提供导航功能
 */
export declare class MenuItemGroup extends Component<IMenuItemGroupProps, IMenuItemGroupState> {
    static defaultProps: {};
    render(): JSX.Element;
}
export default MenuItemGroup;
