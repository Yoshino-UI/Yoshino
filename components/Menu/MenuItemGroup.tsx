
import {Component, ReactElement} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent, TKey} from '../template/component';

export interface IMenuItemGroupProps extends IBaseComponent {
  /**
   * 组件深度 - 用于控制paddingLeft
   */
  deep?: number;
  /**
   * 标题
   */
  title: number | React.ReactNode;
  /**
   * 标志
   */
  keyId: TKey;
  // tslint:disable no-any
  ctx?: any;
}

export interface IMenuItemGroupState {

}

/**
 * **菜单**-提供导航功能
 */
export class MenuItemGroup extends Component<IMenuItemGroupProps, IMenuItemGroupState> {
  static defaultProps = {
  };

  render() {
    const {
      className, style, children, deep, title,
      ctx,
    } = this.props;
    const { offset, mode } = ctx;
    const preCls = 'yoshino-menu-item-group';
    const clsName = classNames(
      preCls, className,
    );
    const childrens = React.Children.toArray(children);
    const isVertical = mode === 'vertical';
    const paddingLeft =  isVertical ? `${deep! * (offset as number)}px` : '';
    return (
      <div
        className={clsName}
        style={style}
      >
        <div
          className={`${preCls}-title`}
          style={{paddingLeft}}
        >
          {title}
        </div>
        <ul className={`${preCls}-list`}>
          {
            // tslint:disable
            React.Children.map(childrens, (child: ReactElement<any>) => {
              return React.cloneElement(child, {
                deep: deep as number + 1,
                ctx,
              });
            })
          }
        </ul>
      </div>
    );
  }
}

export default MenuItemGroup;
