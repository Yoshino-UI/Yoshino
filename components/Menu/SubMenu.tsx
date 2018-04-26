
import {Component, ReactElement} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import { Transition } from 'react-transition-group';
import Icon from '../Icon';

export interface ISubMenuProps extends IBaseComponent {
  /**
   * 组件深度 - 用于控制paddingLeft
   */
  deep: number;
  /**
   * 标题
   */
  title: string | React.ReactNode;
  /**
   * 标志
   */
  keyId: string;
  /**
   * 激活key
   */
  activeKey: string;
  /**
   * 展开的key
   */
  openKeys: string[];
  /**
   * 选项 - 变化回调
   */
  onSelect: (activeKey: string) => void;
  /**
   * 展开回调
   */
  onOpenChange: (openKey: string) => void;
  /**
   * 禁用
   */
  disabled: boolean;
}

export interface ISubMenuState {

}

/**
 * **菜单**-提供导航功能
 */
export class SubMenu extends Component<ISubMenuProps, ISubMenuState> {
  refList: HTMLElement;
  refContainer: HTMLElement;
  listHeight: number = 0;

  static defaultProps = {
    disabled: false,
  };

  onOpenChange = () => {
    const {onOpenChange, keyId, disabled} = this.props;
    if (disabled) {
      return;
    }
    onOpenChange(keyId);
  }

  render() {
    const {
      className, style, children, title, deep,
      activeKey, onSelect, onOpenChange, openKeys,
      keyId, disabled,
      ...otherProps,
    } = this.props;
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
    const paddingLeft = `${deep * 24}px`;
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
          <Transition
            in={show}
            timeout={300}
            appear
            mountOnEnter
            onEnter={() => {
              this.refContainer.style.height = '0px';
              this.refContainer.style.display = 'none';
            }}
            onEntering={() => {
              this.refContainer.style.display = '';
              const height = this.refList.clientHeight;
              this.refContainer.style.height = `${height + 1}px`;
            }}
            onEntered={() => {
              this.refContainer.style.height = '';
            }}
            onExit={() => {
              const height = this.refList.clientHeight;
              this.refContainer.style.height = `${height + 1}px`;
            }}
            onExiting={() => {
              // 可能是react-transition的一个bug，直接执行会导致onExit中的高度设置无效
              setTimeout(() => {
                this.refContainer.style.height = '0px';
              }, 0);
            }}
            onExited={() => {
              this.refContainer.style.height = '';
              this.refContainer.style.display = 'none';
            }}
          >
            {
              () => {
                return (
                  <div className={`${preCls}-container`} ref={(v) => this.refContainer = v as HTMLElement}>
                    <ul className={`${preCls}-list`} ref={(v) => this.refList = v as HTMLElement}>
                      {
                        // tslint:disable
                        React.Children.map(childrens, (children: ReactElement<any>) => {
                          return React.cloneElement(children, {
                            deep: deep + 1,
                            activeKey,
                            openKeys,
                            onSelect,
                            onOpenChange,
                          });
                        })
                      }
                    </ul>
                  </div>
                )
              }
            }
          </Transition>
        </li>
      </React.Fragment>
    );
  }
}

export default SubMenu;
