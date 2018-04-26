/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
export interface IHoverProps extends IBaseComponent {
    /**
     * hover特效名字
     */
    name: string;
}
export interface IHoverState {
}
/**
 * **悬浮特效**-包裹子代添加hover特效
 */
export declare class Hover extends Component<IHoverProps, IHoverState> {
    static defaultProps: {
        name: string;
    };
    render(): JSX.Element;
}
export default Hover;
