/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
import { BreadcrumbItem } from './BreadcrumbItem';
import { ReactNode } from 'react';
export interface IBreadcrumbProps extends IBaseComponent {
    /**
     * 分隔符 - 默认为/
     */
    separator: string | ReactNode;
    /**
     * breadItem
     */
    children: BreadcrumbItem;
}
export interface IBreadcrumbState {
}
/**
 * **面包屑导航**-显示当前页面路径
 */
export declare class Breadcrumb extends Component<IBreadcrumbProps, IBreadcrumbState> {
    static Item: ReactNode;
    static defaultProps: {
        separator: string;
    };
    render(): JSX.Element;
}
export default Breadcrumb;
