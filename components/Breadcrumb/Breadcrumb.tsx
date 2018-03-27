
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';
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
 * **组件中文名称**-组件描述。
 */
export class Breadcrumb extends Component<IBreadcrumbProps, IBreadcrumbState> {
  static Item: ReactNode;

  static defaultProps = {
    separator: '/',
  };

  render() {
    const {className, style, separator = '/', ...otherProps} = this.props;
    const preCls = 'yoshino-breadcrumb';
    return (
      <div
        className={classNames(className, preCls)}
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
