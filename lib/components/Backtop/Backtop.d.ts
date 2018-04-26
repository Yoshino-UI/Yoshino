/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
export interface IBacktopProps extends IBaseComponent {
    /**
     * 距离底部距离
     */
    bottom?: number;
    /**
     * 距离右侧距离
     */
    right?: number;
    /**
     * 触发backtop的高度
     */
    height?: number;
    /**
     * 动画时间
     */
    duration?: number;
    /**
     * 回调函数
     */
    onBackTop?: () => void;
}
export interface IBacktopState {
    /**
     * 是否显示backtop
     */
    show: boolean;
}
/**
 * **返回顶部**-返回页面顶部的操作按钮。
 */
declare class Backtop extends Component<IBacktopProps, IBacktopState> {
    state: {
        show: boolean;
    };
    static defaultProps: {
        height: number;
        bottom: number;
        right: number;
        duration: number;
    };
    scrollListener: () => void;
    componentDidMount(): void;
    componentWillUnMount(): void;
    render(): JSX.Element;
}
export default Backtop;
