/// <reference types="react" />
import { Component } from 'react';
import * as React from 'react';
import { IBaseComponent } from '../template/component';
export interface ISliderProps extends IBaseComponent {
    /**
     * 滑块值 - 受控
     */
    value?: number;
    /**
     * 滑块值 - 非受控
     */
    defaultValue: number;
    /**
     * 变化回调
     */
    onChange?: (value: number) => void;
    /**
     * 最大值
     */
    max: number;
    /**
     * 最小值
     */
    min: number;
    /**
     * 禁用
     */
    disabled: boolean;
}
export interface ISliderState {
}
/**
 * **滑动输入条**-用于拖动选取当前值
 */
export declare class Slider extends Component<ISliderProps, ISliderState> {
    refSlider: HTMLElement;
    moving: boolean;
    static defaultProps: {
        default: number;
        max: number;
        min: number;
        disabled: boolean;
    };
    state: {
        value: number;
    };
    getValue: () => number;
    getPercent: () => number;
    onSliderClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    onSliderMouseDown: () => void;
    onChangeTrigger: (value: number) => void;
    render(): JSX.Element;
}
export default Slider;
