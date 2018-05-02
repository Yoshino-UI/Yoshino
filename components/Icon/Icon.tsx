
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

export interface IIconProps extends IBaseComponent {
  /**
   * 图标名称
   */
  type: string;
}

export interface IIconState {

}

/**
 * **图标**-展示对应的矢量化图标。
 */
export class Icon extends Component<IIconProps, IIconState> {
  render() {
    const {className, style, type, ...otherProps} = this.props;
    const preCls = 'yoshino-icon';
    const clsName = classNames(
      preCls,  `${preCls}-${type}`, className,
    );
    return (
      <i
        className={clsName}
        style={style}
        {...otherProps}
      />
    );
  }
}

export default Icon;
