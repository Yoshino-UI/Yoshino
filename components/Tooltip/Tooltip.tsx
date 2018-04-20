
import {Component} from 'react';
import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IBaseComponent} from '../template/component';
import { RenderInRootDom } from '../utils/renderInRootDom';
import '../styles/common/reset.less';
import './index.less';

export interface ITooltipProps extends IBaseComponent {
  /**
   * 气泡框位置
   */
  placement: 'top' | 'left' | 'right' |
  'bottom' | 'topLeft' | 'topRight' |
  'bottomLeft' | 'bottomRight' | 'leftTop' |
  'leftBottom' | 'rightTop' | 'rightBottom';
  /**
   * 鼠标移入后延时多少才显示 Tooltip， 单位: ms
   */
  mouseEnterDelay: number;
  /**
   * 鼠标移出后延时多少才隐藏 Tooltip，单位：ms
   */
  mouseLeaveDelay: number;
  /**
   * 卡片类名
   */
  overlayClassName: string;
  /**
   * 卡片样式
   */
  overlayStyle: object;
  /**
   * 触发行为
   */
  trigger: 'hover' | 'focus' | 'click';
  /**
   * 内容
   */
  title: string;
  /**
   * 受控-是否可见
   */
  visible?: boolean;
  /**
   * 是否可见
   */
  defaultVisible: boolean;
  /**
   *  变化回调
   */
  onChange: (visible: boolean) => void;
}

export interface ITooltipState {
  visible: boolean;
}

/**
 * **组件中文名称**-组件描述。
 */
export class Tooltip extends Component<ITooltipProps, ITooltipState> {
  refChildren: HTMLElement;
  timeoutHandle: number;

  toolTipId = `tooltip_${new Date().getTime() * Math.random()}`;
  firsrRender = true; // 第一次渲染，用于控制tooltip首屏渲染时的display

  static defaultProps = {
    placement: 'top',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 100,
    trigger: 'hover',
    overlayClassName: '',
    overlayStyle: {},
    defaultVisible: false,
  };

  state = {
    visible: this.props.defaultVisible,
  };

  renderTooltip = () => {
    const {
      className, children, title, style,
      placement, overlayStyle, overlayClassName,
      mouseEnterDelay, mouseLeaveDelay,
      onChange, ...otherProps} = this.props;
    const preCls = 'yoshino-tooltip';
    const clsName = classNames(
      className, preCls, this.toolTipId,
      `${preCls}-${placement}`, overlayClassName,
    );
    const visible = this.getVisible();
    const visiblestyle: {[key: string]: string | number} = visible ? {opacity: 1} : {opacity: 0};
    if (this.firsrRender) {
      visiblestyle.display = visible ? 'block' : 'none';
      this.firsrRender = false;
    }
    return (
      <RenderInRootDom callBack={this.resetTooltipPostion}>
        <div
          className={clsName}
          style={{overlayStyle, ...visiblestyle}}
          {...otherProps}
          {...this.getTriggerAction()}
        >
          <div className={`${preCls}-content`}>{title}</div>
          <div className={`${preCls}-arrow`}/>
        </div>
      </RenderInRootDom>
    );
  }

  resetTooltipPostion = () => {
    const children = ReactDOM.findDOMNode(this.refChildren);
    const {placement} = this.props;
    const dom =  document.getElementsByClassName(this.toolTipId)[0] as HTMLElement;
    const domRect = dom.getBoundingClientRect() as DOMRect; // tooltip dom
    const rect = children.getBoundingClientRect() as DOMRect;
    const pageY = window.pageYOffset;   // 当前滚动条y轴偏移量
    const pageX = window.pageXOffset;   // 当前滚动条x轴偏移量
    const childrenX = pageX + rect.left;  // 子元素x
    const childrenY = pageY + rect.top; // 子元素y

    // placement所对应的left top
    const config = {
      top: {left: childrenX + rect.width / 2 - domRect.width / 2, top: childrenY - domRect.height},
      left: {left: childrenX - domRect.width, top: childrenY + rect.height / 2 - domRect.height / 2},
      bottom: {left: childrenX + rect.width / 2 - domRect.width / 2, top: childrenY + rect.height},
      right: {left: childrenX + rect.width, top: childrenY + rect.height / 2 - domRect.height / 2},
      topLeft: {left: childrenX, top: childrenY - domRect.height},
      topRight: {left: childrenX + rect.width - domRect.width, top: childrenY - domRect.height},
      leftTop: {left: childrenX - domRect.width, top: childrenY},
      leftBottom: {left: childrenX - domRect.width, top: childrenY + rect.height - domRect.height},
      bottomLeft: {left: childrenX, top: childrenY + rect.height},
      bottomRight: {left: childrenX + rect.width - domRect.width, top: childrenY + rect.height},
      rightTop: {left: childrenX + rect.width, top: childrenY},
      rightBottom: {left: childrenX + rect.width, top: childrenY + rect.height - domRect.height},
    };
    dom.style.top = config[placement].top + 'px';
    dom.style.left = config[placement].left + 'px';
  }

  getVisible = () => {
    const {visible} = this.props;
    return visible === undefined ? this.state.visible : visible;
  }

  renderToolTipDisplay = (visible: boolean) => {
    const dom =  document.getElementsByClassName(this.toolTipId)[0] as HTMLElement;
    dom.style.display = visible ? 'block' : 'none';
  }

  onChangeTrigger = (visible: boolean) => {
    const {onChange,  mouseEnterDelay, mouseLeaveDelay} = this.props;

    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
    }

    this.timeoutHandle = setTimeout(() => {
      if (this.props.visible === undefined) {
        this.renderToolTipDisplay(visible);
      }

      this.resetTooltipPostion();
      if (onChange) {
        onChange(visible);
      } else {
        this.setState({visible});
      }
    }, visible ? mouseEnterDelay : mouseLeaveDelay);
  }

  getTriggerAction = () => {
    const show =  this.onChangeTrigger.bind(this, true);
    const hide = this.onChangeTrigger.bind(this, false);
    const action = {
      hover: {
        onMouseOver: show,
        onMouseOut: hide,
      },
      focus: {
        onFocus: show,
        onBlur: hide,
      },
      click: {
        onMouseDown: show,
        onMouseUp: hide,
      },
    };
    return action[this.props.trigger];
  }

  render() {
    const {children} = this.props;
    // tslint:disable
    const child: React.ReactElement<any> = React.Children.only(children);
    return React.cloneElement(child, {
      // tslint:disable:no-any
      ref: (v: HTMLElement) => {this.refChildren = v},
      ...this.getTriggerAction(),
    }, child.props.children, this.renderTooltip());
  }
}

export default Tooltip;
