/// <reference types="react" />
import { Component, ReactNode } from 'react';
import { IBaseComponent } from '../template/component';
export interface IPaginationProps extends IBaseComponent {
    /**
     * 当前页数
     */
    current?: number;
    /**
     * 默认当前页数
     */
    defaultCurrent: number;
    /**
     * 每页条数
     */
    pageSize: number;
    /**
     * 总页数
     */
    total: number;
    /**
     * 页码改变回调
     */
    onChange?: (current: number, pageSize: number) => void;
    /**
     * 显示页码块最多的个数 - 默认值5
     */
    max: number;
    /**
     * 自定义文本-下一页
     */
    next?: string | ReactNode;
    /**
     * 自定义文本-上一页
     */
    previous?: string | ReactNode;
}
export interface IPaginationState {
}
/**
 * **分页**-用于分割多页内容。
 */
export declare class Pagination extends Component<IPaginationProps, IPaginationState> {
    static defaultProps: {
        defaultCurrent: number;
        pageSize: number;
        max: number;
    };
    state: {
        current: number;
    };
    renderPageList(): JSX.Element[];
    itemClick: (current: number) => void;
    onPrevious: () => void;
    onNext: () => void;
    onChangeTrigger: (current: number) => void;
    onNextMore: () => void;
    onPreviousMore: () => void;
    getPageSum: () => number;
    render(): JSX.Element;
}
export default Pagination;
