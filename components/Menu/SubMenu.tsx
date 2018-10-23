
import {Component, ReactElement} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent, TKey} from '../template/component';
import Transitions from '../Transitions';
import Icon from '../Icon';
import Pop from '../Pop';

const Expand = Transitions.Expand;

export interface ISubMenuProps extends IBaseComponent {
  /**
   * 组件深度 - 用于控制paddingLeft
   */
  deep?: number;
  /**
   * 标题
   */
  title: string | React.ReactNode;
  /**
   * 标志
   */
  keyId?: TKey;
  /**
   * 禁用
   */
  disabled?: boolean;
  // tslint:disable no-any
  ctx?: any;
}

export interface ISubMenuState {
  childMenuVisible: boolean;
}

/**
 * **菜单**-提供导航功能
 */
export class SubMenu extends Component<ISubMenuProps, ISubMenuState> {
  static defaultProps = {
    disabled: false,
  };

  state = {
    childMenuVisible: false,
  };

  onOpenChange = () => {
    const { keyId, disabled, ctx } = this.props;
    const { onOpenChange } = ctx;
    if (disabled) {
      return;
    }

    if (onOpenChange) {
      onOpenChange(keyId);
    }
  }

  render() {
    const {
      className, style, children, title, deep,
      keyId, disabled, ctx,
      ...otherProps
    } = this.props;
    const {
      openKeys = [], offset, mode,
    } = ctx;
    const preCls = 'yoshino-sub-menu';
    const isVertical = mode === 'vertical';
    const show = !isVertical && deep! > 1 ? this.state.childMenuVisible : openKeys.indexOf(keyId) !== -1;
    const clsName = classNames(
      preCls, className,
      {
        [`${preCls}-hidden`]: !show,
        [`${preCls}-disabled`]: disabled,
      },
    );
    const paddingLeft =  isVertical ? `${deep! * (offset as number)}px` : '';
    const action = isVertical ? {
      onClick: this.onOpenChange,
    } : {};
    const liAction = !isVertical && deep! > 1 ? {
      onMouseEnter: () => this.setState({childMenuVisible: true}),
      onMouseLeave: () => this.setState({childMenuVisible: false}),
    } : {};
    const containerJSX = (
      <Expand
        timeout={300}
        active={show}
      >
        <div className={`${preCls}-container`}>
          <ul className={`${preCls}-list`}>
            {
              // tslint:disable
              React.Children.map(children, (child: ReactElement<any>) => {
                return React.cloneElement(child, {
                  deep: deep as number + 1,
                  ctx,
                  keyId: child.key,
                });
              })
            }
          </ul>
        </div>
      </Expand>
    );
    const titleJSX = (
      <div
        className={`${preCls}-title`}
        style={{paddingLeft}}
        {...action}
      >
        {title}
        {isVertical ? <Icon type='ios-arrow-up' className={`${preCls}-icon`}/> : null}
      </div>
    );
    return (
      <React.Fragment>
        <li
          className={clsName}
          style={style}
          {...otherProps}
          {...liAction}
        >
          {
            isVertical ? (
              <React.Fragment>
                {titleJSX}
                {containerJSX}
              </React.Fragment>
            ) : deep === 1 ? (
              <Pop
                content={containerJSX}
                overlayClassName={`${preCls}-pop-list`}
                placement='bottomLeft'
                trigger='hoverClick'
                inheritWidth
                isMinWidth
                onChangeBefore={() => {
                  this.onOpenChange();
                }}
              >
                {titleJSX}
              </Pop>
            ) : (
              <React.Fragment>
                {titleJSX}
                {deep! > 1 ? (
                  // 这里加一层为了避免鼠标移入子菜单的时候出发onMouseLeave事件
                  <div className={`${preCls}-child-menu-container`}>
                    <div className={`${preCls}-child-menu`}>
                      {containerJSX}
                    </div>
                  </div>
                ) : null}
              </React.Fragment>
            )
          }
        </li>
      </React.Fragment>
    );
  }
}

export default SubMenu;
