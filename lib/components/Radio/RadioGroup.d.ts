/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
export interface IRadioGroupProps extends IBaseComponent {
    /**
     * 选中的值
     */
    value: any;
    /**
     * 子元素的name
     */
    name: string;
    /**
     * 变化回调
     */
    onChange: (value: any) => void;
    /**
     * 默认值
     */
    defaultValue: any;
}
export interface IRadioGroupState {
    value: any;
}
/**
 * **单选按钮**-用于从多个条件中筛选单个选项
 */
export declare class RadioGroup extends Component<IRadioGroupProps, IRadioGroupState> {
    static defaultProps: {};
    state: {
        value: any;
    };
    onChange: (value: any) => void;
    onChangeTrigger: (value: any) => void;
    render(): JSX.Element;
}
export default RadioGroup;
