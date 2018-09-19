
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Icon from '../Icon';
import * as loadingSVG from './loadSvg';

export interface ILoadingProps extends IBaseComponent {
  /**
   * loading类型
   */
  type?: 'a' | 'b' | 'c' | 'd';
  /**
   * 大小，默认default
   */
  size?: 'small' | 'default' | 'large';
  /**
   * 加载文本
   */
  text?: string | boolean;
  /**
   * 自定义icon
   */
  icon?: React.ReactNode;
  /**
   * 加载
   */
  loading?: boolean;
  /**
   * 图标颜色
   */
  color?: string;
}

export interface ILoadingState {

}

/**
 * **加载**-表示当前处于加载状态中。
 */
export class Loading extends Component<ILoadingProps, ILoadingState> {
  static defaultProps = {
    type: 'a',
    size: 'default',
    text: false,
    loading: true,
    color: 'rgb(81, 178, 109)',
  };

  render() {
    const {
      className, style, children, type, color,
      size, text, icon, loading, ...otherProps
    } = this.props;
    const preCls = 'yoshino-loading';
    const sizeObj = {
      small: 14,
      default: 20,
      large: 32,
    };
    const fontSize = !!style && style.fontSize !== undefined && Number(style.fontSize);
    const radius = fontSize || sizeObj[size!];
    const iconType = loadingSVG[type!](radius, radius, color!);
    const loadSize = `${preCls}-${size}`;
    const hasChildren = !!children;
    const clsName = classNames(
      preCls, loadSize, className,
      {
        [`${preCls}-children-box`]: hasChildren,
      }
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        {hasChildren ? <div className={`${preCls}-children`}>{children}</div> : null}
        {
          loading ? (
            <>
              <div className={classNames({[`${preCls}-container`]: hasChildren})}>
              <span className={`${preCls}-icon`}>
                {icon ? icon : <Icon svg={iconType}/>}
              </span>
                {
                  text ? (
                    <p className={`${preCls}-text`}>{typeof text === 'string' ? text : '加载中'}</p>
                  ) : null
                }
              </div>
              {hasChildren ? <div className={`${preCls}-mask`}/> : null}
            </>
          ) : null
        }
      </div>
    );
  }
}

export default Loading;
