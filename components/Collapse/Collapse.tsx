
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Panel from './Panel';
import {IPanelProps} from './Panel';

export interface ICollapseProps extends IBaseComponent {
  /**
   * 受控 - 激活key
   */
  activeKey?: string[];
  /**
   * 非受控 - 激活key
   */
  defaultActiveKey: string[];
  /**
   * 手风琴模式
   */
  accordion: boolean;
  /**
   * 变化回调
   */
  onChange?: (activeKey: string[]) => void;
}

export interface ICollapseState {

}

/**
 * **折叠板**-可以放缩需要展示的内容区域。
 */
export class Collapse extends Component<ICollapseProps, ICollapseState> {
  static Panel: typeof Panel;

  static defaultProps = {
    defaultActiveKey: [],
    accordion: false,
  };

  state = {
    activeKey: this.props.defaultActiveKey,
  };

  getActiveKey = () => {
    const {activeKey} = this.props;
    return activeKey === undefined ? this.state.activeKey : activeKey;
  }

  onChange = (key: string) => {
    const activeKey = this.getActiveKey();
    const {accordion} = this.props;
    if (activeKey.indexOf(key) !== -1) {
      activeKey.splice(activeKey.indexOf(key), 1);
    } else {
      if (accordion) {
        activeKey[0] = key;
      } else {
        activeKey.push(key);
      }
    }
    this.onChangeTrigger(activeKey);
  }

  onChangeTrigger = (activeKey: string[]) => {
    const {onChange} = this.props;
    if (onChange) {
      onChange(activeKey);
    }
    this.setState({
      activeKey,
    });
  }

  render() {
    const {className, style, children, onChange, ...otherProps} = this.props;
    const preCls = 'yoshino-collapse';
    const clsName = classNames(
      preCls, className,
    );
    const childrens = React.Children.toArray(children);
    const activeKey = this.getActiveKey();
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        {
          React.Children.map(childrens, (item: React.ReactElement<IPanelProps>) => {
            return React.cloneElement(item, {
              active: activeKey.indexOf(item.props.keyId) !== -1,
              onChange: this.onChange,
            });
          })
        }
      </div>
    );
  }
}

export default Collapse;
