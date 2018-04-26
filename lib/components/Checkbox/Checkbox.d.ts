/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
import CheckboxGroup from './CheckboxGroup';
export interface ICheckboxProps extends IBaseComponent {
    /**
     * 值
     */
    value: any;
    /**
     * 是否选中
     */
    checked: boolean;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 组名
     */
    name: string;
    /**
     * 通知checkboxGroup
     */
    onChange: (value: any) => void;
}
export interface ICheckboxState {
}
/**
 * **单选按钮**-用于从多个条件中筛选单个选项
 */
export declare class Checkbox extends Component<ICheckboxProps, ICheckboxState> {
    static defaultProps: {
        disabled: boolean;
    };
    onChange: (value: any) => void;
    static Group: typeof CheckboxGroup;
    render(): JSX.Element;
}
export default Checkbox;
