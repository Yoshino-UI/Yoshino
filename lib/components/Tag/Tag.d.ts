/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
export interface ITagProps extends IBaseComponent {
    /**
     * 标签模式
     */
    mode: 'custom' | 'geek';
    /**
     * 可否关闭
     */
    closeable: boolean;
    /**
     * 颜色
     */
    color: string;
    /**
     * 关闭回调
     */
    onClose: () => void;
}
export interface ITagState {
    /**
     * 控制显示
     */
    show: boolean;
}
export interface IGeekStyle {
    color?: string;
    borderColor?: string;
    background?: string;
}
/**
 * **标签**-一般用于描述或者分类
 */
export declare class Tag extends Component<ITagProps, ITagState> {
    static defaultProps: {
        mode: string;
    };
    state: {
        show: boolean;
    };
    closeTag: () => void;
    getGeekStyle: () => IGeekStyle;
    render(): JSX.Element;
}
export default Tag;
