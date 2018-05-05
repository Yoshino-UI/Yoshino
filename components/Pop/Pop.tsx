import {Component, ReactNode} from 'react';
import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IBaseComponent} from '../template/component';
import { RenderInRootDom } from '../utils/renderInRootDom';
import { CSSTransition } from 'react-transition-group';

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
   * 触发行为
   */
  trigger?: 'hover' | 'focus' | 'click';
  /**
   * 内容
   */
  title?: string;
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
   * 过度动画样式
   */
  transitionCls: {[key: string]: string};
  /**
   * pop 宽高修改
   */
  setPopRect?: (rect: {width: number; height: number}) => {width: number; height: number};
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

  animateTimeHandle: number[] = []; // 动画timeout句柄

  scale = 0.8;
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
  };

  state = {
    visible: this.props.defaultVisible as boolean,
  };

  renderPop = () => {
    const {
      className, children, title, style,
      placement, overlayStyle, overlayClassName,
      mouseEnterDelay, mouseLeaveDelay, mountOnEnter,
      onChange, content, transitionCls, ...otherProps,
    } = this.props;
    const preCls = 'yoshino-pop';
    const visible = this.getVisible();
    return (
      <RenderInRootDom>
        <CSSTransition
          timeout={25}
          classNames={transitionCls}
          in={visible}
          onEnter={() => {
            this.resetPopPostion();
          }}
          mountOnEnter={true}
          appear
        >
          {
            () => {
              const clsName = classNames(
                preCls, this.popId,
                `${preCls}-${placement}`, overlayClassName,
                className,
              );
              const child = React.Children.only(content);
              return (
                <div
                  className={clsName}
                  style={{...overlayStyle}}
                  {...otherProps}
                  {...this.getConentTriggerAction()}
                >
                  {child}
                </div>
              );
            }
          }
        </CSSTransition>
      </RenderInRootDom>
    );
  }

  resetPopPostion = () => {
    const children = ReactDOM.findDOMNode(this.refChildren) as Element;
    const {placement = 'top', setPopRect} = this.props;
    const dom =  document.getElementsByClassName(this.popId)[0] as HTMLElement;
    const domRectReal = dom.getBoundingClientRect() as DOMRect; // Pop - content -  dom
    const rect = children.getBoundingClientRect() as DOMRect; // Pop - target - dom
    const pageY = window.pageYOffset;   // 当前滚动条y轴偏移量
    const pageX = window.pageXOffset;   // 当前滚动条x轴偏移量
    const childrenX = pageX + rect.left;  // 子元素x
    const childrenY = pageY + rect.top; // 子元素y
    // 解决部分浏览器rect不可修改的问题
    const domRect = {width: domRectReal.width, height: domRectReal.height};
    if (setPopRect) {
      const popRect = setPopRect(domRect);
      domRect.width = popRect.width;
      domRect.height = popRect.height;
    }
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

  onChangeTrigger = (visible: boolean) => {
    const {onChange, mouseEnterDelay, mouseLeaveDelay} = this.props;
    if (this.timeoutHandle !== undefined) {
      clearTimeout(this.timeoutHandle);
    }

    this.timeoutHandle = window.setTimeout(() => {
      if (onChange) {
        onChange(visible);
      }
      this.setState({visible});
    }, visible ? mouseEnterDelay : mouseLeaveDelay);
  }

  // pop包裹对象trigger表现
  getTargetTriggerAction = () => {
    const show =  this.onChangeTrigger.bind(this, true);
    const hide = this.onChangeTrigger.bind(this, false);
    const {trigger = 'hover'} = this.props;
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
        onClick: this.getVisible() ? hide : show,
      },
    };
    return action[trigger];
  }

  // pop - content triggert表现
  getConentTriggerAction = () => {
    const show =  this.onChangeTrigger.bind(this, true);
    const hide = this.onChangeTrigger.bind(this, false);
    const {trigger = 'hover'} = this.props;
    const action = {
      hover: {
        onMouseOver: show,
        onMouseOut: hide,
      },
      focus: {
      },
      click: {
      },
    };
    return action[trigger];
  }

  render() {
    const {children} = this.props;
    // tslint:disable
    const child: React.ReactElement<any> = React.Children.only(children);
    return React.cloneElement(child, {
      // tslint:disable:no-any
      ref: (v: HTMLElement) => {this.refChildren = v},
      ...this.getTargetTriggerAction(),
    }, child.props.children, this.renderPop());
  }
}

export default Pop;
