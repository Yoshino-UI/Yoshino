/// <reference types="react" />
import { Component } from 'react';
import { IBaseComponent } from '../template/component';
import Panel from './Panel';
export interface ICollapseProps extends IBaseComponent {
    /**
     * 受控 - 激活key
     */
    activeKey?: string[];
    /**
     * 非受控 - 激活key
     */
    defaultActiveKey: string[];
    /**
     * 手风琴模式
     */
    accordion: boolean;
    /**
     * 变化回调
     */
    onChange?: (activeKey: string[]) => void;
}
export interface ICollapseState {
}
/**
 * **折叠板**-可以放缩需要展示的内容区域。
 */
export declare class Collapse extends Component<ICollapseProps, ICollapseState> {
    static Panel: typeof Panel;
    static defaultProps: {
        defaultActiveKey: never[];
        accordion: boolean;
    };
    state: {
        activeKey: string[];
    };
    getActiveKey: () => string[];
    onChange: (key: string) => void;
    onChangeTrigger: (activeKey: string[]) => void;
    render(): JSX.Element;
}
export default Collapse;
