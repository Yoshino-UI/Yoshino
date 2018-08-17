
import { Component, ReactElement, CSSProperties } from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import { IBaseComponent, TKey, TSize } from '../template/component';
import Pane, { IPaneProps } from './Pane';

export interface ITabsProps extends IBaseComponent {
  /**
   * 当前激活 tab 面板的 key， 对应name
   */
  activeKey?: TKey;
  /**
   * 当前激活 tab 面板的 key， 对应name
   */
  defaultActivetKey?: TKey;
  /**
   * 面板切换回调
   */
  onChange?: (activeKey: TKey) => void;
  /**
   * 标签页样式
   */
  type?: 'line' | 'card';
  /**
   * 是否启用动画
   */
  animated?: boolean;
  /**
   * 大小
   */
  size?: TSize;
  /**
   * TabPane间隙
   */
  tabBarGutter?: number;
  /**
   * 点击tab
   */
  onTabClick?: (name: TKey) => void;
  /**
   * tab位置
   */
  tabPosition?: 'left' | 'right' | 'top' | 'bottom';
}

export interface ITabsState {
  activeKey: TKey;
  activeIndex: number;  // activeKey在数组中的相对下标
  ink: {
    height: number;
    width: number;
    left: number;
    top: number;
  };
}

/**
 * **组件中文名称**-组件描述。
 */
export class Tabs extends Component<ITabsProps, ITabsState> {
  preCls = 'yoshino-tabs';

  refActiveTabPaneArr: HTMLElement[];

  static defaultProps = {
    size: 'default',
    tabPosition: 'top',
    animated: true,
    type: 'line',
  };

  static TabPane = Pane;

  state = {
    activeIndex: -1,
    activeKey: this.props.defaultActivetKey!,
    ink: {
      height: 0,
      width: 0,
      left: 0,
      top: 0,
    },
  };

  componentDidMount() {
    // 获取activeIndex
    const {children} = this.props;
    const activeKey = this.getActiveKey();
    const child = React.Children.toArray(children);
    React.Children.forEach(child, (ele: ReactElement<IPaneProps>, index) => {
      if (ele.props.name === activeKey) {
        this.setState({
          activeIndex: index
        }, () => {
          // 设置ink bar偏移
          this.resetInkBarStyle(this.refActiveTabPaneArr[index]);
        });
      }
    });
  }

  componentDidUpdate(preProps: ITabsProps) {
    if (preProps.tabPosition !== this.props.tabPosition || preProps.size !== this.props.size) {
      // 当type !== 'line' 时无需渲染ink bar style
      if (this.props.type !== 'line') {
        return;
      }
      // 这里要等动画时间结束后才能拿到真实长宽
      const timeout = this.props.animated ? 300 + 1 : 0;
      setTimeout(() => {
        this.resetInkBarStyle(this.refActiveTabPaneArr[this.state.activeIndex]);
      }, timeout);
    }
  }

  resetInkBarStyle = (e: HTMLElement) => {
    const height = e.offsetHeight;
    const width = e.offsetWidth;
    const left = e.offsetLeft;
    const top = e.offsetTop;
    this.setState({ink: {height, width, left, top}});
  }

  getActiveKey = () => {
    const {activeKey} = this.props;
    return activeKey !== undefined ? activeKey : this.state.activeKey;
  }

  onChange = (key: TKey) => {
    const { onChange } = this.props;
    if (this.getActiveKey() === key) {
      return;
    }
    if (onChange) {
      onChange(key);
    }
    this.setState({
      activeKey: key,
    });
  }

  renderTabPane = () => {
    const { children, tabPosition, onTabClick, tabBarGutter, type } = this.props;
    const child = React.Children.toArray(children);
    const { width, height, left, top } = this.state.ink;
    const vertical = ['left', 'right'].indexOf(tabPosition!) !== -1;
    const transform = vertical ? `translate3d(0, ${top}px, 0)` : `translate3d(${left}px, 0, 0)`;
    const inkBarStyle: CSSProperties = Object.assign({transform}, vertical ? {height} : {width});
    const isLine = type === 'line';
    // clear
    this.refActiveTabPaneArr = [];
    return (
      <div className={`${this.preCls}-nav-wrap`}>
        <div className={`${this.preCls}-nav-scroll`}>
          {
            React.Children.map(child, (ele: ReactElement<IPaneProps>, index) => {
              const { name, disabled } = ele.props;
              const active = this.getActiveKey() === name;
              const preCls = `${this.preCls}-tab`;
              const cls = classNames(
                preCls,
                {
                  [`${preCls}-active`]: active,
                  [`${preCls}-disabled`]: disabled,
                }
              );
              const style: CSSProperties = tabBarGutter ? vertical ? {
                marginBottom: tabBarGutter,
              } : {marginRight: tabBarGutter} : {};
              return (
                <div
                  className={cls}
                  style={style}
                  key={index}
                  onClick={(e) => {
                    if (disabled) {
                      return;
                    }
                    if (onTabClick) {
                      onTabClick(ele.props.name);
                    }
                    // 当type === 'line' 渲染ink bar style
                    if (isLine) {
                      this.resetInkBarStyle(e.target as HTMLElement);
                    }
                    this.setState({activeIndex: index});
                    this.onChange(name);
                  }}
                  ref={(v) => {
                    if (v) {
                      this.refActiveTabPaneArr.push(v);
                    }
                  }}
                >
                  {ele.props.name}
                </div>
              );
            })
          }
        </div>
        {isLine ? <div className={`${this.preCls}-ink-bar`} style={inkBarStyle}/> : null}
      </div>
    );
  }

  renderTabPaneContent = () => {
    const {children} = this.props;
    const child = React.Children.toArray(children);
    const preCls = `${this.preCls}-pane`;
    return (
      <React.Fragment>
        {
          React.Children.map(child, (ele: ReactElement<IPaneProps>) => {
            const name = ele.props.name;
            const active = this.getActiveKey() === name;
            const className = classNames(ele.props.className,
              {
                [`${preCls}-active`]: active,
                [`${preCls}-inactive`]: !active,
              }
            );
            return React.cloneElement(ele, {
              className,
              active: `.$${this.getActiveKey()}` === ele.key,
              style: {...ele.props.style}
            });
          })
        }
      </React.Fragment>
    );
  }

  render() {
    const {
      className, style, size, animated,
      onChange, type, activeKey,
      defaultActivetKey, tabBarGutter, children,
      tabPosition,
      ...otherProps} = this.props;
    const preCls = this.preCls;
    const vertical = ['left', 'right'].indexOf(tabPosition!) !== -1;
    const clsName = classNames(
      preCls, className, `${preCls}-${size}`,
      {
        [`${preCls}-animated`]: animated,
        [`${preCls}-vertical`]: vertical,
        [`${preCls}-horizontal`]: !vertical,
        [`${preCls}-no-animated`]: !animated,
        [`${preCls}-card`]: type === 'card',
      },
      `${preCls}-${tabPosition}`,
    );
    const {activeIndex} = this.state;
    const contentStyle: CSSProperties = !vertical ? {
      marginLeft: `-${activeIndex * 100}%`,
    } : {marginTop: `-${activeIndex * 100}%`};
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        {tabPosition !== 'bottom' ? this.renderTabPane() : null}
        {
          activeIndex !== -1 ? (
            <div className={`${preCls}-content`} style={contentStyle}>
              {this.renderTabPaneContent()}
            </div>
          ) : null
        }
        {tabPosition === 'bottom' ? this.renderTabPane() : null}
      </div>
    );
  }
}

export default Tabs;
