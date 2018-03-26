
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponentNoChildren} from '../template/component';
import '../styles/common/reset.less';
import './index.less';

export interface IBreadcrumbItemProps extends IBaseComponentNoChildren {

}

export interface IBreadcrumbItemState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class BreadcrumbItem extends Component<IBreadcrumbItemProps, IBreadcrumbItemState> {
  render() {
    const {className, style} = this.props;
    return (
      <span
        className={classNames(className, 'yoshino-breadcrumb-item')}
        style={style}
      >
        {this.props.children}
      </span>
    );
  }
}

export default BreadcrumbItem;
