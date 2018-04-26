/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponentNoChildren } from '../template/component';
export interface IBreadcrumbItemProps extends IBaseComponentNoChildren {
}
export interface IBreadcrumbItemState {
}
/**
 * **组件中文名称**-组件描述。
 */
export declare class BreadcrumbItem extends Component<IBreadcrumbItemProps, IBreadcrumbItemState> {
    render(): JSX.Element;
}
export default BreadcrumbItem;
