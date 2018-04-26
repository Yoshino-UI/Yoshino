/// <reference types="react" />
import { Component } from 'react';
import * as React from 'react';
import { IBaseComponent } from '../template/component';
export interface ISubMenuProps extends IBaseComponent {
    /**
     * 组件深度 - 用于控制paddingLeft
     */
    deep: number;
    /**
     * 标题
     */
    title: string | React.ReactNode;
    /**
     * 标志
     */
    keyId: string;
    /**
     * 激活key
     */
    activeKey: string;
    /**
     * 展开的key
     */
    openKeys: string[];
    /**
     * 选项 - 变化回调
     */
    onSelect: (activeKey: string) => void;
    /**
     * 展开回调
     */
    onOpenChange: (openKey: string) => void;
    /**
     * 禁用
     */
    disabled: boolean;
}
export interface ISubMenuState {
}
/**
 * **菜单**-提供导航功能
 */
export declare class SubMenu extends Component<ISubMenuProps, ISubMenuState> {
    refList: HTMLElement;
    refContainer: HTMLElement;
    listHeight: number;
    static defaultProps: {
        disabled: boolean;
    };
    onOpenChange: () => void;
    render(): JSX.Element;
}
export default SubMenu;
