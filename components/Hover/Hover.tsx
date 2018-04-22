
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

export interface IHoverProps extends IBaseComponent {
  /**
   * hover特效名字
   */
  name: string;
}

export interface IHoverState {

}

/**
 * **悬浮特效**-包裹子代添加hover特效
 */
export class Hover extends Component<IHoverProps, IHoverState> {
  static defaultProps = {
    name: 'rectangle-out',
  };

  render() {
    const {className, style, name, ...otherProps} = this.props;
    const preCls = 'yoshino-hover';
    const clsName = classNames(
      preCls, `yoshino-hvr-${name}`, className,
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
