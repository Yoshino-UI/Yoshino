/// <reference types="react" />
import { Component, ReactNode } from 'react';
import { IBaseComponent } from '../template/component';
export interface IAlertProps extends IBaseComponent {
    /**
     * 文案类型
     */
    type: 'success' | 'info' | 'warning' | 'error';
    /**
     * 是否显示关闭按钮
     */
    closable: boolean;
    /**
     * 是否显示图标
     */
    showIcon: boolean;
    /**
     * 自定义图标
     */
    icon: ReactNode;
    /**
     * 标题
     */
    title: ReactNode | string;
    /**
     * onClose
     */
    onClose: () => void;
}
export interface IAlertState {
    /**
     * 控制Alert显示
     */
    show: boolean;
}
/**
 * **警告提示**-警告提示，展现需要关注的信息。
 */
export declare class Alert extends Component<IAlertProps, IAlertState> {
    state: {
        show: boolean;
    };
    static defaultProps: {
        type: string;
        showIcon: boolean;
        closable: boolean;
    };
    closeAlert: () => void;
    render(): JSX.Element;
}
export default Alert;
