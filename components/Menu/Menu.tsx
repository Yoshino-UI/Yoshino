
import {Component, ReactElement} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent, TKey} from '../template/component';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import MenuItemGroup from './MenuItemGroup';

export interface IMenuProps extends IBaseComponent {
  /**
   * 受控 - 激活key
   */
  activeKey?: TKey;
  /**
   * 非受控 - 激活key
   */
  defaultActiveKey?: TKey;
  /**
   * 受控 - 展开key
   */
  openKeys?: TKey[];
  /**
   * 非受控 - 展开key
   */
  defaultOpenKeys?: TKey[];
  /**
   * item - 选中回调
   */
  onSelect?: (activeKey: TKey) => void;
  /**
   * 展开回调
   */
  onOpenChange?: (openKeys: TKey[]) => void;
  /**
   * 偏移量
   */
  offset?: number;
}

export interface IMenuState {

}

/**
 * **菜单**-提供导航功能
 */
export class Menu extends Component<IMenuProps, IMenuState> {
  static Item: typeof MenuItem;
  static SubMenu: typeof SubMenu;
  static ItemGroup: typeof MenuItemGroup;

  static defaultProps = {
    defaultActiveKey: '',
    defaultOpenKeys: [],
    offset: 24,
  };

  state = {
    activeKey: this.props.defaultActiveKey,
    openKeys: this.props.defaultOpenKeys as string[],
  };

  getActiveKey = () => {
    const {activeKey} = this.props;
    return activeKey === undefined ? this.state.activeKey : activeKey;
  }

  onSelect = (key: string) => {
    this.onSelectTrigger(key);
  }

  onSelectTrigger = (activeKey: string) => {
    const {onSelect} = this.props;
    if (onSelect) {
      onSelect(activeKey);
    }
    this.setState({
      activeKey,
    });
  }

  getOpenKeys = () => {
    const {openKeys} = this.props;
    return openKeys === undefined ? this.state.openKeys : openKeys;
  }

  onOpenChange = (openKey: TKey) => {
    const openKeys = this.getOpenKeys();
    if (openKeys.indexOf(openKey) !== -1) {
      openKeys.splice(openKeys.indexOf(openKey), 1);
    } else {
      openKeys.push(openKey);
    }
    this.onOpenChangeTrigger(openKeys);
  }

  onOpenChangeTrigger = (openKeys: TKey[]) => {
    const {onOpenChange} = this.props;
    if (onOpenChange) {
      onOpenChange(openKeys);
    }
    this.setState({
      openKeys,
    });
  }

  render() {
    const {
      className, style, children,
      onSelect, defaultActiveKey,
      onOpenChange, defaultOpenKeys,
      offset, activeKey,
      ...otherProps} = this.props;
    const preCls = 'yoshino-menu';
    const clsName = classNames(
      preCls, className,
    );
    const childrens = React.Children.toArray(children);
    const activeKeyR = this.getActiveKey();
    const openKeys = this.getOpenKeys();
    return (
      <ul
        className={clsName}
        style={style}
        {...otherProps}
      >
        {
          // tslint:disable
          React.Children.map(childrens, (child: ReactElement<any>) => {
            return React.cloneElement(child, {
              deep: 1,
              activeKey: activeKeyR,
              openKeys,
              onSelect: this.onSelect,
              onOpenChange: this.onOpenChange,
              offset,
            });
          })
        }
      </ul>
    );
  }
}

export default Menu;
