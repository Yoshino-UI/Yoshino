/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
import RadioGroup from './RadioGroup';
export interface IRadioProps extends IBaseComponent {
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
     * 通知radioGroup
     */
    onChange: (value: any) => void;
}
export interface IRadioState {
}
/**
 * **单选按钮**-用于从多个条件中筛选单个选项
 */
export declare class Radio extends Component<IRadioProps, IRadioState> {
    static defaultProps: {
        disabled: boolean;
    };
    onChange: (value: any) => void;
    static Group: typeof RadioGroup;
    render(): JSX.Element;
}
export default Radio;
