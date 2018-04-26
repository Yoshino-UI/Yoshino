/// <reference types="react" />
import { Component } from 'react';
export interface ICustomTransitionProps {
    /**
     * 关闭回调
     */
    onClose: () => void;
    /**
     * 控制显示
     */
    show: boolean;
}
export interface ICustomTransitionState {
}
export declare class CustomTransition extends Component<ICustomTransitionProps, ICustomTransitionState> {
    render(): JSX.Element;
}
export default CustomTransition;
