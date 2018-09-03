import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent, TKey} from '../template/component';
import { Menu } from './Menu';

export interface IMenuItemProps extends IBaseComponent {
  /**
   * 组件深度 - 用于控制paddingLeft
   */
  deep?: number;
  /**
   * 唯一id
   */
  keyId: TKey;
  /**
   * 禁用
   */
  disabled?: boolean;
}

export interface IMenuItemState {

}

/**
 * **菜单**-提供导航功能
 */
export class MenuItem extends Component<IMenuItemProps, IMenuItemState> {
  static defaultProps = {
    disabled: false,
  };

  onSelect = () => {
    const { keyId, disabled, onClick } = this.props;
    const { onSelect } = this.context;
    if (disabled) {
      return;
    }
    if (onSelect) {
      onSelect(keyId);
    }
    if (onClick) {
      onClick();
    }
  }

  static contextTypes = Menu.childContextTypes;

  render() {
    const {
      className, style, children, deep,
      keyId, disabled,
    } = this.props;
    const { activeKey,  offset } = this.context;
    const preCls = 'yoshino-menu-item';
    const clsName = classNames(
      preCls, className,
      {
        [`${preCls}-active`]: activeKey === keyId,
        [`${preCls}-disabled`]: disabled,
      },
    );
    const paddingLeft = `${deep as number * (offset as number)}px`;
    return (
      <li
        className={clsName}
        style={{paddingLeft, ...style}}
        onClick={this.onSelect}
        key={keyId}
      >
        {children}
      </li>
    );
  }
}

export default MenuItem;
