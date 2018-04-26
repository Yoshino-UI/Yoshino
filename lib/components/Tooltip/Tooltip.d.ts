/// <reference types="react" />
import { Component } from 'react';
import * as React from 'react';
import { IBaseComponent } from '../template/component';
export interface ITooltipProps extends IBaseComponent {
    /**
     * 气泡框位置
     */
    placement: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
    /**
     * 鼠标移入后延时多少才显示 Tooltip， 单位: ms
     */
    mouseEnterDelay: number;
    /**
     * 鼠标移出后延时多少才隐藏 Tooltip，单位：ms
     */
    mouseLeaveDelay: number;
    /**
     * 卡片类名
     */
    overlayClassName: string;
    /**
     * 卡片样式
     */
    overlayStyle: React.CSSProperties;
    /**
     * 触发行为
     */
    trigger: 'hover' | 'focus' | 'click';
    /**
     * 内容
     */
    title: string;
    /**
     * 受控-是否可见
     */
    visible?: boolean;
    /**
     * 是否可见
     */
    defaultVisible: boolean;
    /**
     *  变化回调
     */
    onChange: (visible: boolean) => void;
    /**
     * 进入时才渲染
     */
    mountOnEnter: boolean;
}
export interface ITooltipState {
    visible: boolean;
}
/**
 * **组件中文名称**-组件描述。
 */
export declare class Tooltip extends Component<ITooltipProps, ITooltipState> {
    refChildren: HTMLElement;
    timeoutHandle: number;
    sacle: number;
    static defaultProps: {
        placement: string;
        mouseEnterDelay: number;
        mouseLeaveDelay: number;
        trigger: string;
        overlayClassName: string;
        overlayStyle: {};
        defaultVisible: boolean;
        mountOnEnter: boolean;
    };
    state: {
        visible: boolean;
    };
    setPopRect: (rect: {
        width: number;
        height: number;
    }) => {
        width: number;
        height: number;
    };
    render(): JSX.Element;
}
export default Tooltip;
