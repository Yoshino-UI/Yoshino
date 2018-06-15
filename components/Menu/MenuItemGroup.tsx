
import {Component, ReactElement} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

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
  keyId: string;
  /**
   * 激活key
   */
  activeKey?: string;
  /**
   * 选项 - 变化回调
   */
  onSelect?: (activeKey: string) => void;
  /**
   * 展开回调
   */
  onOpenChange?: (openKeys: string[]) => void;
  /**
   * 偏移量
   */
  offset?: number;
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
      activeKey, onSelect, offset,
    } = this.props;
    const preCls = 'yoshino-menu-item-group';
    const clsName = classNames(
      preCls, className,
    );
    const childrens = React.Children.toArray(children);
    const paddingLeft = `${deep as number * (offset as number)}px`;
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
                activeKey,
                onSelect,
                offset,
              });
            })
          }
        </ul>
      </div>
    );
  }
}

export default MenuItemGroup;
