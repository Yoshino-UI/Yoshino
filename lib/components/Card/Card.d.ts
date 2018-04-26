/// <reference types="react" />
import { Component, ReactNode } from 'react';
import { IBaseComponent } from '../template/component';
export interface ICardProps extends IBaseComponent {
    /**
     * 标题
     */
    title: string;
    /**
     * 更多
     */
    extra: ReactNode;
    /**
     * 边框
     */
    border?: boolean;
    /**
     * 阴影
     */
    shadow?: boolean;
}
export interface ICardState {
}
/**
 * **卡片**-用于展示一些块状信息
 */
export declare class Card extends Component<ICardProps, ICardState> {
    static defaultProps: {};
    render(): JSX.Element;
}
export default Card;
