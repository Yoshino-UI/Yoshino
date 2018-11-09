import {Component, ReactNode} from 'react';
import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IBaseComponent} from '../template/component';
import { RenderInRootDom } from '../utils/';

export interface IPopProps extends IBaseComponent {
  /**
   * 气泡框位置
   */
  placement?: 'top' | 'left' | 'right' |
  'bottom' | 'topLeft' | 'topRight' |
  'bottomLeft' | 'bottomRight' | 'leftTop' |
  'leftBottom' | 'rightTop' | 'rightBottom';
  /**
   * 鼠标移入后延时多少才显示 Pop， 单位: ms
   */
  mouseEnterDelay?: number;
  /**
   * 鼠标移出后延时多少才隐藏 Pop，单位：ms
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
   * 触发行为 - hoverClick是指点击蒙层后关闭
   */
  trigger?: 'hover' | 'focus' | 'click' | 'hoverClick';
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
   * 气泡框内容
   */
  content?: string | ReactNode;
  /**
   * 进入时才渲染
   */
  mountOnEnter?: boolean;
  /**
   * 宽度继承
   */
  inheritWidth?: boolean;
  /**
   * 继承宽度为最小宽度
   */
  isMinWidth?: boolean;
  /**
   * 变化回调 - 延迟前
   */
  onChangeBefore?: (visible: boolean) => void;
  /**
   * trigger为focus模式时，如果开启该属性，点击浮层元素一次就触发关闭
   */
  focusOnce?: boolean;
}

export interface IPopState {
  visible: boolean;
}

/**
 * **组件中文名称**-组件描述。
 */
export class Pop extends Component<IPopProps, IPopState> {
  refChildren: HTMLElement;
  timeoutHandle: number;
  timueoutFoucs?: number;

  animateTimeHandle: number[] = []; // 动画timeout句柄

  popId = `pop_${new Date().getTime() * Math.random()}`; // pop唯一id

  static defaultProps = {
    placement: 'top',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 100,
    trigger: 'hover',
    overlayClassName: '',
    overlayStyle: {},
    defaultVisible: false,
    mountOnEnter: false,
    inheritWidth: false,
    isMinWidth: false,
    focusOnce: false,
  };

  state = {
    visible: this.props.defaultVisible as boolean,
  };

  renderPop = () => {
    const {
      className, children, style, defaultVisible,
      placement, overlayStyle, overlayClassName,
      mouseEnterDelay, mouseLeaveDelay, mountOnEnter,
      onChange, content, visible, inheritWidth, onChangeBefore,
      isMinWidth, focusOnce,
      ...otherProps
    } = this.props;
    const preCls = 'yoshino-pop';
    const clsName = classNames(
      preCls, this.popId,
      `${preCls}-${placement}`, overlayClassName,
      className,
    );
    const child = React.Children.only(content);
    return (
      this.getVisible() ? (
        <RenderInRootDom callBack={this.resetPopPostion}>
          <div
            className={clsName}
            style={{...overlayStyle}}
            tabIndex={0}
            {...otherProps}
            {...this.getConentTriggerAction()}
          >
            {child}
          </div>
        </RenderInRootDom>
      )
      : null
    );
  }

  resetPopPostion = () => {
    const children = ReactDOM.findDOMNode(this.refChildren) as Element;
    const {placement = 'top', inheritWidth, isMinWidth} = this.props;
    const dom =  document.getElementsByClassName(this.popId)[0] as HTMLElement;
    const domRectReal = dom.getBoundingClientRect() as DOMRect; // Pop - content -  dom
    const rect = children.getBoundingClientRect() as DOMRect; // Pop - target - dom
    const pageY = window.pageYOffset;   // 当前滚动条y轴偏移量
    const pageX = window.pageXOffset;   // 当前滚动条x轴偏移量
    const childrenX = pageX + rect.left;  // 子元素x
    const childrenY = pageY + rect.top; // 子元素y

    // 解决部分浏览器rect不可修改的问题
    const domRect = {
      width: inheritWidth ? rect.width : domRectReal.width,
      height: domRectReal.height,
    };

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

    if (inheritWidth) {
      if (isMinWidth) {
        dom.style.minWidth = rect.width + 'px';
      } else {
        dom.style.width = rect.width + 'px';
      }
    }
  }

  getVisible = () => {
    const {visible} = this.props;
    return visible === undefined ? this.state.visible : visible;
  }

  onChangeTrigger = (visible: boolean) => {
    const {onChange, mouseEnterDelay, mouseLeaveDelay, onChangeBefore} = this.props;
    if (this.timeoutHandle !== undefined) {
      clearTimeout(this.timeoutHandle);
    }

    if (visible === this.state.visible) {
      return;
    }

    this.timeoutHandle = window.setTimeout(() => {
      if (onChange) {
        onChange(visible);
      }
      this.setState({visible});
    }, visible ? mouseEnterDelay : mouseLeaveDelay);

    if (onChangeBefore) {
      onChangeBefore(visible);
    }
  }

  toggleVisible = (visible: boolean) => {
    if (this.timueoutFoucs) {
      clearTimeout(this.timueoutFoucs);
    }
    this.timueoutFoucs = window.setTimeout(() => {
      this.onChangeTrigger(visible);
    }, 10);
  }

  // pop包裹对象trigger表现
  getTargetTriggerAction = () => {
    const show =  this.toggleVisible.bind(this, true);
    const hide = this.toggleVisible.bind(this, false);
    const {trigger = 'hover'} = this.props;
    const action = {
      hover: {
        onMouseEnter: show,
        onMouseLeave: hide,
      },
      hoverClick: {
        onMouseEnter: show,
        onMouseLeave: hide,
      },
      focus: {
        onFocus: show,
        onBlur: hide,
      },
      click: {
        onClick: this.getVisible() ? hide : show,
      },
    };
    return action[trigger];
  }

  // pop - content triggert表现
  getConentTriggerAction = () => {
    const show =  this.toggleVisible.bind(this, true);
    const hide = this.toggleVisible.bind(this, false);
    const {trigger = 'hover', focusOnce} = this.props;
    const action = {
      hover: {
        onMouseEnter: show,
        onMouseLeave: hide,
      },
      focus: {
        onFocus: show,
        onBlur: hide,
        onClick: () => {
          if (focusOnce) {
            hide();
          }
        }
      },
      click: {
      },
      hoverClick: {
        onMouseEnter: show,
        onMouseLeave: hide,
        onClick: hide,
      }
    };
    return action[trigger];
  }

  render() {
    const {children} = this.props;
    // tslint:disable
    const child: React.ReactElement<any> = React.Children.only(children);
    return React.cloneElement(child, {
      // tslint:disable:no-any
      ref: (v: HTMLElement) => {
        if (v) {
          this.refChildren = v;
          if ((child as any).ref) {
            (child as any).ref(v);
          }
        }
      },
      ...this.getTargetTriggerAction(),
    }, child.props.children, this.renderPop());
  }
}

export default Pop;
