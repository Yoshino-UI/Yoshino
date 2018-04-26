/// <reference types="react" />
import { Component, ReactElement } from 'react';
export interface IProps {
    children: ReactElement<any>;
    boxClass?: string;
    callBack?: () => void;
    mount?: boolean;
}
export interface IStatus {
}
export declare class RenderInRootDom extends Component<IProps, IStatus> {
    box: HTMLElement;
    renderFlag: boolean;
    static defaultProps: {
        mount: boolean;
    };
    renderChild: () => void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    _renderLayer(): void;
    render(): null;
}
