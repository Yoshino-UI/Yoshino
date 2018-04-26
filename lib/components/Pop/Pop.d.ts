/// <reference types="react" />
import { Component, ReactNode } from 'react';
import * as React from 'react';
import { IBaseComponent } from '../template/component';
export interface IPopProps extends IBaseComponent {
    /**
     * 气泡框位置
     */
    placement: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
    /**
     * 鼠标移入后延时多少才显示 Pop， 单位: ms
     */
    mouseEnterDelay: number;
    /**
     * 鼠标移出后延时多少才隐藏 Pop，单位：ms
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
     * 气泡框内容
     */
    content?: string | ReactNode;
    /**
     * 进入时才渲染
     */
    mountOnEnter: boolean;
    /**
     * 过度动画样式
     */
    transitionCls: {
        [key: string]: string;
    };
    /**
     * pop 宽高修改
     */
    setPopRect: (rect: {
        width: number;
        height: number;
    }) => {
        width: number;
        height: number;
    };
}
export interface IPopState {
    visible: boolean;
}
/**
 * **组件中文名称**-组件描述。
 */
export declare class Pop extends Component<IPopProps, IPopState> {
    refChildren: HTMLElement;
    timeoutHandle: number;
    animateTimeHandle: number[];
    scale: number;
    popId: string;
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
    renderPop: () => JSX.Element;
    resetPopPostion: () => void;
    getVisible: () => boolean;
    onChangeTrigger: (visible: boolean) => void;
    getTargetTriggerAction: () => {
        onMouseOver: any;
        onMouseOut: any;
    } | {
        onFocus: any;
        onBlur: any;
    } | {
        onClick: any;
    };
    getConentTriggerAction: () => {
        onMouseOver: any;
        onMouseOut: any;
    } | {} | {};
    render(): React.ReactElement<any>;
}
export default Pop;
