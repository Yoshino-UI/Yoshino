
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

export interface ISkeletonProps extends IBaseComponent {
  /**
   * 加载态
   */
  loading?: boolean;
  /**
   * 是否带动画效果
   */
  active?: boolean;
  /**
   * 段落占位图
   */
  rows?: number | React.CSSProperties[];
  /**
   * 最后一行宽度
   */
  lastWidth?: number | string;
}

export interface ISkeletonState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class Skeleton extends Component<ISkeletonProps, ISkeletonState> {
  preCls = 'yoshino-skeleton';

  static defaultProps = {
    rows: 3,
    lastWidth: '80%',
    loading: true,
  };

  createLi = (rows: number, width?: number | string) => {
    const temp: JSX.Element[] = [];
    for (let i = 1; i <= rows; i++) {
      if (i === rows && width !== undefined) {
        temp.push(<li style={{width}}/>);
      } else {
        temp.push(<li key={i}/>);
      }
    }
    return temp;
  }

  render() {
    const {
      className, style, active, loading, rows, lastWidth,
      children,
      ...otherProps} = this.props;
    const preCls = this.preCls;
    const clsName = classNames(
      preCls, className,
      {[`${preCls}-animate`]: active}
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        {
          loading ? (
            <ul className={`${preCls}-paragraph`}>
              {
                typeof rows === 'number' ? (
                  <React.Fragment>
                    {this.createLi(rows, lastWidth)}
                  </React.Fragment>
                ) : (
                  rows!.map((item, index) => {
                    return (<li key={index} style={item}/>);
                  })
                )
              }
            </ul>
          ) : children
        }
      </div>
    );
  }
}

export default Skeleton;
