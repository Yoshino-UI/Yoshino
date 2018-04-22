
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import { BreadcrumbItem } from './BreadcrumbItem';
import {ReactNode} from 'react';

export interface IBreadcrumbProps extends IBaseComponent {
  /**
   * 分隔符 - 默认为/
   */
  separator: string | ReactNode;
  /**
   * breadItem
   */
  children: BreadcrumbItem;
}

export interface IBreadcrumbState {

}

/**
 * **面包屑导航**-显示当前页面路径
 */
export class Breadcrumb extends Component<IBreadcrumbProps, IBreadcrumbState> {
  static Item: ReactNode;

  static defaultProps = {
    separator: '/',
  };

  render() {
    const {className, style, separator = '/', ...otherProps} = this.props;
    const preCls = 'yoshino-breadcrumb';
    const clsName = classNames(
      preCls, className,
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        {
          React.Children.map(this.props.children, (child) => {
            return (
              <span>
                {child}
                <span className={classNames(`${preCls}-separator`)}>{separator}</span>
              </span>
            );
          })
        }
      </div>
    );
  }
}

export default Breadcrumb;
