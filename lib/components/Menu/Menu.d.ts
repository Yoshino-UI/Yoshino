/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import MenuItemGroup from './MenuItemGroup';
export interface IMenuProps extends IBaseComponent {
    /**
     * 受控 - 激活key
     */
    activeKey?: string;
    /**
     * 非受控 - 激活key
     */
    defaultActiveKey: string;
    /**
     * 受控 - 展开key
     */
    openKeys?: string[];
    /**
     * 非受控 - 展开key
     */
    defaultOpenKeys: string[];
    /**
     * item - 选中回调
     */
    onSelect?: (activeKey: string) => void;
    /**
     * 展开回调
     */
    onOpenChange?: (openKeys: string[]) => void;
}
export interface IMenuState {
}
/**
 * **菜单**-提供导航功能
 */
export declare class Menu extends Component<IMenuProps, IMenuState> {
    static Item: typeof MenuItem;
    static SubMenu: typeof SubMenu;
    static ItemGroup: typeof MenuItemGroup;
    static defaultProps: {
        defaultActiveKey: string;
        defaultOpenKeys: never[];
        accordion: boolean;
    };
    state: {
        activeKey: string;
        openKeys: string[];
    };
    getActiveKey: () => string;
    onSelect: (key: string) => void;
    onSelectTrigger: (activeKey: string) => void;
    getOpenKeys: () => string[];
    onOpenChange: (openKey: string) => void;
    onOpenChangeTrigger: (openKeys: string[]) => void;
    render(): JSX.Element;
}
export default Menu;
