/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
export interface IAvatarProps extends IBaseComponent {
    /**
     * 头像尺寸
     */
    size: 'small' | 'default' | 'large';
    /**
     * 形状
     */
    shape: 'circle' | 'square';
    /**
     * 图标 - 与Icon相同
     */
    icon: string;
    /**
     * 图片资源
     */
    src?: string;
}
export interface IAvatarState {
}
/**
 * **头像**-用于表示用户头像信息
 */
export declare class Avatar extends Component<IAvatarProps, IAvatarState> {
    static defaultProps: {
        size: string;
        shape: string;
        icon: string;
    };
    render(): JSX.Element;
}
export default Avatar;
