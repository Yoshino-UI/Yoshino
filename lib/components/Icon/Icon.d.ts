/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponentNoChildren } from '../template/component';
export interface IIconProps extends IBaseComponentNoChildren {
    /**
     * 图标名称
     */
    type: string;
    /**
     * 点击事件
     */
    onClick?: () => void;
}
export interface IIconState {
}
/**
 * **图标**-展示对应的矢量化图标。
 */
export declare class Icon extends Component<IIconProps, IIconState> {
    render(): JSX.Element;
}
export default Icon;
