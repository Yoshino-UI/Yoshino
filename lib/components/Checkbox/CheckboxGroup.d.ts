/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
export interface ICheckboxGroupProps extends IBaseComponent {
    /**
     * 选中的值
     */
    value?: any;
    /**
     * 子元素的name
     */
    name: string;
    /**
     * 变化回调
     */
    onChange: (values: any[]) => void;
    /**
     * 默认值
     */
    defaultValue: any[];
}
export interface ICheckboxGroupState {
    value: any;
}
/**
 * **单选按钮**-用于从多个条件中筛选单个选项
 */
export declare class CheckboxGroup extends Component<ICheckboxGroupProps, ICheckboxGroupState> {
    static defaultProps: {};
    state: {
        value: any[];
    };
    onChange: (value: any) => void;
    onChangeTrigger: (value: any) => void;
    render(): JSX.Element;
}
export default CheckboxGroup;
