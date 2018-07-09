
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

export interface ITableProps extends IBaseComponent {
  data: object[];
  columns: IColumns[];
  fixedTitle?: boolean;
  scroll: {
    x: number | string;
    y: number;
  };
}

export interface IColumns {
  title: string;
  width?: number;
  dataIndex: string;
  fixed?: boolean;
  style?: React.CSSProperties;
}

export interface ITableState {
  showShadow: boolean;
}

/**
 * **组件中文名称**-组件描述。
 */
export class Table extends Component<ITableProps, ITableState> {
  tableScroll: HTMLElement;
  tableArr: HTMLElement[] = [];

  static defaultProps = {
    fixedTitle: true,
  };

  state = {
    showShadow: false,
  };

  componentDidMount() {
    this.tableArr.forEach((item) => {
      item.addEventListener('scroll', this.syncDomScrollTop);
    });
  }

  componentWillUnmount() {
    this.tableArr.forEach((item) => {
      item.removeEventListener('scroll', this.syncDomScrollTop);
    });
  }

  // 同步个表格组件scrolltop
  // tslint:disable:no-any
  syncDomScrollTop = (e: any) => {
    let scrollTop = 0;
    let scrollLeft = 0;
    this.tableArr.forEach((item) => {
      if (e.target.className === item.className) {
        scrollTop = item.scrollTop;
        scrollLeft = item.scrollLeft;
        if (e.target.className === 'yoshino-table-fixed-left') {
          scrollLeft = this.tableScroll.scrollLeft;
        }
        if (e.target.className === 'yoshino-table-fixed-top') {
          scrollTop = this.tableScroll.scrollTop;
        }
      }
    });
    // 阴影控制
    if (!this.state.showShadow && scrollLeft > 0) {
      this.setState({ showShadow: true });
    } else if (scrollLeft === 0 && this.state.showShadow) {
      this.setState({ showShadow: false });
    }
    scrollTo(this.tableArr, scrollLeft, scrollTop);
  }

  render() {
    const {
      className, style, columns,
      data, fixedTitle, scroll,
      ...otherProps} = this.props;
    const preCls = 'yoshino-table';
    const clsName = classNames(
      preCls, className,
    );
    this.tableArr = []; // 清空
    // 判断是否需要固定左侧列表
    const fixedLeft = columns.some((item) => !!item.fixed);
    let fixedWidth = 0;
    for (const column of columns) {
      if (column.fixed) {
        fixedWidth += column.width || 0;
      }
    }
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
          <div className={`${preCls}-box`} style={{height: scroll.y}}>
            <div
              className={`${preCls}-scroll`}
              ref={(dom) => {
                if (!dom) {
                  return;
                }
                this.tableArr.push(dom);
                this.tableScroll = dom;
              }}
            >
              {/* <div className={`${preCls}-header`}>
                <table>
                  <thead>
                    <tr>
                      {columns.map((item, index) => {
                        const style: React.CSSProperties = {
                          width: item.width,
                          ...item.style,
                        };
                        return (
                          <th key={index}>
                            <div
                              style={style}
                            >
                              {item.title}
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                </table>
              </div> */}
              {/* <div className={`${preCls}-body`}> */}
                <table style={{width: scroll.x}}>
                  <thead>
                    <tr>
                      {columns.map((item, index) => {
                        const style: React.CSSProperties = {
                          width: item.width,
                          ...item.style,
                        };
                        return (
                          <th key={index}>
                            <div
                              style={style}
                            >
                              {item.title}
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr key={index}>
                          {columns.map((column, i) => {
                            const style: React.CSSProperties = {
                              width: column.width,
                            };
                            return (
                              <td key={i} style={style}>
                                <div style={style}>
                                  <div
                                    style={column.style}
                                  >
                                    {item[column.dataIndex]}
                                  </div>
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              {/* </div> */}
            </div>
            {
              fixedLeft ? (
                <React.Fragment>
                  <div
                    className={`${preCls}-fixed-left`}
                    style={{
                      width: fixedWidth || `${fixedWidth}px`,
                    }}
                    ref={(dom) => {
                      if (!dom) {
                        return;
                      }
                      this.tableArr.push(dom);
                    }}
                  >
                    <div className={`${preCls}-header`}>
                      <table>
                        <thead>
                          <tr>
                            {columns.map((item, index) => {
                              const style: React.CSSProperties = {
                                width: item.width,
                              };
                              return item.fixed ? (
                                <th key={index} style={style}>
                                  <div
                                    style={item.style}
                                  >
                                    {item.title}
                                  </div>
                                </th>
                              ) : null;
                            })}
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className={`${preCls}-body`}>
                      <table>
                        <tbody>
                          {data.map((item, index) => {
                            return (
                              <tr key={index}>
                                {columns.map((column, i) => {
                                  const style: React.CSSProperties = {
                                    width: column.width,
                                  };
                                  return column.fixed ? (
                                    <td key={i} style={style}>
                                      <div style={style}>
                                        <div
                                          style={column.style}
                                        >
                                          {item[column.dataIndex]}
                                        </div>
                                      </div>
                                    </td>
                                  ) : null;
                                })}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className={`${preCls}-fixed-left-top`}
                  >
                    <div className={`${preCls}-header`}>
                      <table>
                        <thead>
                          <tr>
                            {columns.map((item, index) => {
                              const style: React.CSSProperties = {
                                width: item.width,
                              };
                              return item.fixed ? (
                                <th key={index} style={style}>
                                  <div
                                    style={item.style}
                                  >
                                    {item.title}
                                  </div>
                                </th>
                              ) : null;
                            })}
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </React.Fragment>
              ) : null
            }
            {
              fixedTitle ? (
                <div
                  className={`${preCls}-fixed-top`}
                  ref={(dom) => {
                    if (!dom) {
                      return;
                    }
                    this.tableArr.push(dom);
                  }}
                >
                  <div className={`${preCls}-header`}>
                    <table style={{width: scroll.x}}>
                      <thead>
                        <tr>
                          {columns.map((item, index) => {
                            const style: React.CSSProperties = {
                              width: item.width,
                            };
                            return (
                              <th key={index} style={style}>
                                <div
                                  style={{...style, ...item.style}}
                                >
                                  {item.title}
                                </div>
                              </th>
                            );
                          })}
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              ) : null
            }
            {this.state.showShadow ? (
              <div className='shadow' style={{ left: `${fixedWidth}px` }} />
            ) : null}
          </div>
      </div>
    );
  }
}

function scrollTo(doms: HTMLElement[], x: number, y: number) {
  for (const dom of doms) {
    dom.scrollTop = dom.scrollHeight <= y ? dom.scrollHeight : y;
    dom.scrollLeft = dom.scrollWidth <= x ? dom.scrollWidth : x;
  }
}

export default Table;
