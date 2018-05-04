
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

export interface IBreadcrumbItemProps extends IBaseComponent {

}

export interface IBreadcrumbItemState {

}

/**
 * **面包屑导航**-显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。
 */
export class BreadcrumbItem extends Component<IBreadcrumbItemProps, IBreadcrumbItemState> {
  render() {
    const {className, style, ...otherProps} = this.props;
    const preCls = 'yoshino-breadcrumb-item';
    const clsName = classNames(
      preCls, className,
    );
    return (
      <span
        className={clsName}
        style={style}
        {...otherProps}
      >
        {this.props.children}
      </span>
    );
  }
}

export default BreadcrumbItem;
