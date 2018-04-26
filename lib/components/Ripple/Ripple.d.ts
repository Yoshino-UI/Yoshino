/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
export interface IRippleProps extends IBaseComponent {
    /**
     * 波纹颜色
     */
    color: string;
    /**
     * 波纹透明度
     */
    opacity: number;
    /**
     * 波纹直径
     */
    diameter: number;
}
export interface IRippleState {
}
/**
 * **波纹特效**-为子代添加点击水波扩散的特效。
 */
export declare class Ripple extends Component<IRippleProps, IRippleState> {
    static defaultProps: {
        color: string;
        opacity: number;
        diameter: number;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    targetRipple: HTMLElement | null;
    rippleHandle: () => void;
    render(): JSX.Element;
}
export default Ripple;
