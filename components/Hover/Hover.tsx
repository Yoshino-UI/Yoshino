
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';
import '../styles/common/hover/hover.less';

export interface IHoverProps extends IBaseComponent {
  /**
   * hover特效名字
   */
  name: string;
}

export interface IHoverState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class Hover extends Component<IHoverProps, IHoverState> {
  static defaultProps = {
    name: 'rectangle-out',
  };

  render() {
    const {className, style, name, ...otherProps} = this.props;
    const preCls = 'yoshino-hover';
    const clsName = classNames(
      className, preCls, `yoshino-hvr-${name}`,
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Hover;
