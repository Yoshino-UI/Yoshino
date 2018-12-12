import { Component } from 'react';
import * as classNames from 'classnames';
import * as React from 'react';
import {IBaseComponent} from '../template/component';
import Pop from '../Pop';

export interface ITooltipProps extends IBaseComponent {
  /**
   * 气泡框位置
   */
  placement?: 'top' | 'left' | 'right' |
  'bottom' | 'topLeft' | 'topRight' |
  'bottomLeft' | 'bottomRight' | 'leftTop' |
  'leftBottom' | 'rightTop' | 'rightBottom';
  /**
   * 鼠标移入后延时多少才显示 Tooltip， 单位: ms
   */
  mouseEnterDelay?: number;
  /**
   * 鼠标移出后延时多少才隐藏 Tooltip，单位：ms
   */
  mouseLeaveDelay?: number;
  /**
   * 卡片类名
   */
  overlayClassName?: string;
  /**
   * 卡片样式
   */
  overlayStyle?: React.CSSProperties;
  /**
   * 触发行为
   */
  trigger?: 'hover' | 'focus' | 'click';
  /**
   * 内容
   */
  title?: React.ReactNode;
  /**
   * 受控-是否可见
   */
  visible?: boolean;
  /**
   * 是否可见
   */
  defaultVisible?: boolean;
  /**
   *  变化回调
   */
  onChange?: (visible: boolean) => void;
  /**
   * 进入时才渲染
   */
  mountOnEnter?: boolean;
}

export interface ITooltipState {
  visible: boolean;
}

/**
 * **文字提示**-文字提示气泡框
 */
export class Tooltip extends Component<ITooltipProps, ITooltipState> {
  refChildren: HTMLElement;
  timeoutHandle: number;

  scale = 0.8;

  static defaultProps = {
    placement: 'top',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 100,
    trigger: 'hover',
    overlayClassName: '',
    overlayStyle: {},
    defaultVisible: false,
    mountOnEnter: false,
  };

  state = {
    visible: this.props.defaultVisible as boolean,
  };

  render() {
    const {children, title, placement} = this.props;
    // tslint:disable
    const child: React.ReactElement<any> = React.Children.only(children);
    const preCls = 'yoshino-tooltip';
    const contentCls = classNames(
      preCls, `${preCls}-${placement}`,
    );
    const content = (
      <div className={contentCls}>
        <div className={`${preCls}-content`}>{title}</div>
        <div className={`${preCls}-arrow`}/>
      </div>
    );
    return (
      <Pop
        {...this.props}
        content={content}
      >
        {child}
      </Pop>
    )
  }
}

export default Tooltip;
