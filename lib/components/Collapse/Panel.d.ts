/// <reference types="react" />
import { Component, ReactNode } from 'react';
import { IBaseComponent } from '../template/component';
export interface IPanelProps extends IBaseComponent {
    /**
     * 标记，对应activekey
     */
    keyid: string;
    /**
     * 折叠板标题
     */
    title: string | ReactNode;
    /**
     * 禁用
     */
    disabled?: boolean;
    /**
     * 激活
     */
    active: boolean;
    /**
     * 变化回调
     */
    onChange: (keyid: string) => void;
}
export interface IPanelState {
}
/**
 * **面板**-折叠版的子项
 */
export declare class Panel extends Component<IPanelProps, IPanelState> {
    refContainer: HTMLElement;
    refInner: HTMLElement;
    static defaultProps: {
        disabled: boolean;
    };
    onChange: () => void;
    render(): JSX.Element;
}
export default Panel;
