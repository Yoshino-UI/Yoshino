/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
export interface IDividerProps extends IBaseComponent {
    /**
     * 是否虚线
     */
    dashed: boolean;
    /**
     * 文本表现
     */
    textAlign: 'left' | 'center' | 'right';
}
export interface IDividerState {
}
/**
 * **分割线**-一般用于分割段落或者内容划分
 */
export declare class Divider extends Component<IDividerProps, IDividerState> {
    static defaultProps: {
        dashed: boolean;
        textAlign: string;
    };
    render(): JSX.Element;
}
export default Divider;
