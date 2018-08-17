
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent, TKey} from '../template/component';

export interface IPaneProps extends IBaseComponent {
  /**
   * 选项标题
   */
  name: TKey;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 激活key，由Tabs传入，开发者不应使用
   */
  active?: boolean;
}

export interface IPaneState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class Pane extends Component<IPaneProps, IPaneState> {
  static defaultProps = {

  };

  render() {
    const {
      className, style, name,
      active, disabled,
      children, onChange,
      ...otherProps} = this.props;
    const preCls = 'yoshino-tabs-pane';
    const clsName = classNames(
      preCls, className,
      {[`${preCls}-disabled`]: disabled},
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
}

export default Pane;
