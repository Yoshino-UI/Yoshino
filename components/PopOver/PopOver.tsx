// tslint:disable no-any
import {Component} from 'react';
import * as React from 'react';
import {IBaseComponent} from '../template/component';
import { RenderInRootDom } from '../utils/';
import Helpers from '../Helpers';
import Transitions from '../Transitions';

const { Scale } = Transitions;
const { ClickOutside } = Helpers;

export interface IPopOverProps extends IBaseComponent {
  /**
   * 面板是否展开
   */
  open: boolean;
  /**
   * 面板展开回调
   */
  onOpenChange?: (v: boolean) => void;
  /**
   * 浮层内容
   */
  pop: any;
  /**
   * 进入后
   */
  onEntered?: () => void;
  /**
   * 浮层消失后是否销毁
   */
  unmountOnExit?: boolean;
}

export interface IPopOverState {
  popPos: {
    left: number;
    top: number;
  };
}

/**
 * **组件中文名称**-组件描述。
 */
export class PopOver extends Component<IPopOverProps, IPopOverState> {
  preCls = 'yoshino-pop-over';
  refPopOverContainer: Element;

  static defaultProps = {
    unmountOnExit: true,
  };

  state = {
    popPos: {
      left: 0,
      top: 0,
    },
  };

  componentDidMount() {
    this.setPopOverPosition();
  }

  setPopOverPosition = () => {
    if (!this.refPopOverContainer) {
      return;
    }
    const rect = this.refPopOverContainer.getBoundingClientRect();
    const pageY = window.pageYOffset;   // 当前滚动条y轴偏移量
    const pageX = window.pageXOffset;   // 当前滚动条x轴偏移量
    this.setState({
      popPos: {
        left: rect.left + pageX,
        top: rect.top + pageY,
      }
    });
  }

  onOpenChange = (open: boolean) => {
    const { onOpenChange } = this.props;
    if (onOpenChange) {
      onOpenChange(open);
    }
    // 调整面板位置
    this.setPopOverPosition();
  }

  render() {
    const {
      children, pop, open,
      onEntered, unmountOnExit,
      } = this.props;
    const preCls = this.preCls;
    const child = React.Children.only(children);
    return (
      <React.Fragment>
        {
          React.cloneElement(child, {
            onClick: () => {
              if (child.props.onClick) {
                child.props.onClick();
              }
              this.onOpenChange(true);
            },
            ref: (v: any) => {
              if (child.props.ref) {
                child.props.ref(v);
              }
              if (v) {
                this.refPopOverContainer = v;
              }
            }
          })
        }
        <RenderInRootDom>
          <ClickOutside
            clickOutside={() => {
              this.onOpenChange(false);
            }}
          >
            <div className={`${preCls}-box`} style={this.state.popPos}>
              <Scale
                timeout={300}
                active={open}
                unmountOnExit={unmountOnExit}
                onEntered={() => {
                  if (onEntered) {
                    onEntered();
                  }
                }}
              >
                {pop}
              </Scale>
            </div>
          </ClickOutside>
        </RenderInRootDom>
      </React.Fragment>
    );
  }
}

export default PopOver;
