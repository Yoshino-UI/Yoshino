
import {Component, ReactElement} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent, TKey} from '../template/component';
import Transitions from '../Transitions';
import Icon from '../Icon';
import { Menu } from './Menu';

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
  keyId: TKey;
  /**
   * 禁用
   */
  disabled?: boolean;
}

export interface ISubMenuState {

}

/**
 * **菜单**-提供导航功能
 */
export class SubMenu extends Component<ISubMenuProps, ISubMenuState> {
  static defaultProps = {
    disabled: false,
  };

  static contextTypes = Menu.childContextTypes;

  onOpenChange = () => {
    const { keyId, disabled } = this.props;
    const { onOpenChange } = this.context;
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
      keyId, disabled,
      ...otherProps
    } = this.props;
    const {
      openKeys = [], offset,
    } = this.context;
    const preCls = 'yoshino-sub-menu';
    const show = openKeys.indexOf(keyId) !== -1;
    const clsName = classNames(
      preCls, className,
      {
        [`${preCls}-hidden`]: !show,
        [`${preCls}-disabled`]: disabled,
      },
    );
    const childrens = React.Children.toArray(children);
    const paddingLeft = `${deep as number * (offset as number)}px`;
    return (
      <React.Fragment>
        <li
          className={clsName}
          style={style}
          {...otherProps}
        >
          <div
            className={`${preCls}-title`}
            style={{paddingLeft}}
            onClick={this.onOpenChange}
          >
            {title}
            <Icon type='chevron-up' className={`${preCls}-icon`}/>
          </div>
          <Expand
            timeout={300}
            active={show}
          >
            <div className={`${preCls}-container`}>
              <ul className={`${preCls}-list`}>
                {
                  // tslint:disable
                  React.Children.map(childrens, (children: ReactElement<any>) => {
                    return React.cloneElement(children, {
                      deep: deep as number + 1,
                    });
                  })
                }
              </ul>
            </div>
          </Expand>
        </li>
      </React.Fragment>
    );
  }
}

export default SubMenu;
