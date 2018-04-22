
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponentNoChildren} from '../template/component';

export interface IBreadcrumbItemProps extends IBaseComponentNoChildren {

}

export interface IBreadcrumbItemState {

}

/**
 * **组件中文名称**-组件描述。
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
