
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';

export interface ITableProps extends IBaseComponent {
  // tslint:disable-next-line no-any
  data: any[];
  columns: IColumns[];
  fixedTitle?: boolean;
  scroll?: {
    x?: number | boolean;
    y: number;
  };
}

export interface IColumns {
  title: string;
  width?: number | string;
  dataIndex: string;
  fixed?: 'left' | 'right';
  style?: React.CSSProperties;
}

export interface ITableState {
  leftShadow: boolean;
  rightShadow: boolean;
}

/**
 * **组件中文名称**-组件描述。
 */
export class Table extends Component<ITableProps, ITableState> {
  preCls = 'yoshino-table';

  refScrollHeader: HTMLDivElement;
  refScrollBody: HTMLDivElement;
  // header与body滚动时的锁，如果其中一个滚动，另一个上锁，约定500ms后解锁
  lockHeaderAndBody: boolean | 'header' | 'body' = false;
  unlockTime = 500;
  timeoutlockHeaderAndBody = 0;

  refFixedLeft: HTMLElement;
  refFixedRight: HTMLElement;
  lockFixedAndBody: boolean | 'left' | 'right' | 'body' = false;
  timeoutlockFixedAndBody = 0;

  state = {
    leftShadow: false,
    rightShadow: false,
  };

  defaultProps = {
    fixedTitle: false,
    scroll: {
      y: 280,
      x: true,
    },
  };

  lockHeaderAndBodyFunc = (lock: 'header' | 'body') => {
    this.lockHeaderAndBody = lock;
    if (this.timeoutlockHeaderAndBody) {
      clearTimeout(this.timeoutlockHeaderAndBody);
    }
    this.timeoutlockHeaderAndBody = window.setTimeout(() => {
      this.lockHeaderAndBody = false; // 解锁
    }, this.unlockTime);
  }

  lockFixedAndBodyFunc = (lock: 'left' | 'right' | 'body') => {
    this.lockFixedAndBody = lock;
    if (this.timeoutlockFixedAndBody) {
      clearTimeout(this.timeoutlockFixedAndBody);
    }
    this.timeoutlockFixedAndBody = window.setTimeout(() => {
      this.lockFixedAndBody = false; // 解锁
    }, this.unlockTime);
  }

  // 滚动列表头部监听
  scrollHeaderAndBodyEventListener = () => {
    if (this.lockHeaderAndBody === 'body') {
      return;
    }
    this.lockHeaderAndBodyFunc('header');
    this.refScrollBody.scrollLeft = this.refScrollHeader.scrollLeft;
  }

  // 滚动table主体监听
  scrollBodyAndHeaderEventListener = () => {
    // 主体与header同步
    if (this.lockHeaderAndBody === 'header') {
      return;
    }
    this.lockHeaderAndBodyFunc('body');
    this.refScrollHeader.scrollLeft = this.refScrollBody.scrollLeft;
  }

  // 左侧锁列监听
  scrollFixedLeftEventListener = () => {
    const lock = this.lockFixedAndBody;
    if (lock !== false && lock !== 'left') {
      return;
    }
    this.lockFixedAndBodyFunc('left');
    const top = this.refFixedLeft.scrollTop;
    this.refScrollBody.scrollTop = top;
    if (this.hasFixedRight) {
      this.refFixedRight.scrollTop = top;
    }
  }

  // 右侧锁列监听
  scrollFixedRightEventListener = () => {
    const lock = this.lockFixedAndBody;
    if (lock !== false && lock !== 'right') {
      return;
    }
    this.lockFixedAndBodyFunc('right');
    const top = this.refFixedRight.scrollTop;
    this.refScrollBody.scrollTop = top;
    if (this.hasFixedLeft) {
      this.refFixedLeft.scrollTop = top;
    }
  }

  // 主体与锁列同步
  scrollBodyAndFixedEventListener = () => {
    this.setFixedShadow();
    const dom = this.refScrollBody;
    const lock = this.lockFixedAndBody;
    if (lock !== false && lock !== 'body') {
      return;
    }
    this.lockFixedAndBodyFunc('body');
    const top = dom.scrollTop;
    if (this.hasFixedRight) {
      this.refFixedRight.scrollTop = top;
    }
    if (this.hasFixedLeft) {
      this.refFixedLeft.scrollTop = top;
    }
  }

  // 设置shadow显示
  setFixedShadow = () => {
    const dom = this.refScrollBody;
    if (dom.scrollLeft > 0 && this.hasFixedLeft()) {
      if (!this.state.leftShadow) {
        this.setState({leftShadow: true});
      }
    } else {
      if (this.state.leftShadow) {
        this.setState({leftShadow: false});
      }
    }

    if (dom.scrollLeft === dom.scrollWidth - dom.clientWidth) {
      if (this.state.rightShadow) {
        this.setState({rightShadow: false});
      }
    } else {
      if (!this.state.rightShadow) {
        this.setState({rightShadow: true});
      }
    }
  }
  // 是否左侧锁列
  hasFixedLeft = () => {
    return !!this.props.columns.filter((item) => item.fixed === 'left').length;
  }

  // 是否右侧锁列
  hasFixedRight = () => {
    return !!this.props.columns.filter((item) => item.fixed === 'right').length;
  }

  componentDidMount() {
    const { fixedTitle } = this.props;
    const isFixedLeft = this.hasFixedLeft();
    const isFixedRight = this.hasFixedRight();
    if (fixedTitle) {
      this.refScrollBody.addEventListener('scroll', this.scrollBodyAndHeaderEventListener);
      this.refScrollHeader.addEventListener('scroll', this.scrollHeaderAndBodyEventListener);
    }

    if (isFixedLeft || isFixedRight) {
      this.refScrollBody.addEventListener('scroll', this.scrollBodyAndFixedEventListener);
    }

    if (isFixedLeft) {
      this.refFixedLeft.addEventListener('scroll', this.scrollFixedLeftEventListener);
    }

    if (isFixedRight) {
      this.refFixedRight.addEventListener('scroll', this.scrollFixedRightEventListener);
    }

    this.setFixedShadow();
  }

  componentWillUnmount() {
    const { fixedTitle } = this.props;
    const isFixedLeft = this.hasFixedLeft();
    const isFixedRight = this.hasFixedRight();
    if (fixedTitle) {
      this.refScrollBody.removeEventListener('scroll', this.scrollBodyAndHeaderEventListener);
      this.refScrollHeader.removeEventListener('scroll', this.scrollHeaderAndBodyEventListener);
    }

    if (isFixedLeft || isFixedRight) {
      this.refScrollBody.removeEventListener('scroll', this.scrollBodyAndFixedEventListener);
    }

    if (isFixedLeft) {
      this.refFixedLeft.removeEventListener('scroll', this.scrollFixedLeftEventListener);
    }

    if (isFixedRight) {
      this.refFixedRight.removeEventListener('scroll', this.scrollFixedRightEventListener);
    }
  }

  renderColgroup = (columns: IColumns[]) => {
    return (
      <colgroup>
        {
          columns.map((item, key) => (
            <col key={key} style={{width: item.width}}/>
          ))
        }
      </colgroup>
    );
  }

  renderThead = (columns: IColumns[]) => {
    return (
      <thead>
        <tr>
          {
            columns.map((item, key) => (
              <th key={key}>{item.title}</th>
            ))
          }
        </tr>
      </thead>
    );
  }

  renderTbody = (columns: IColumns[]) => {
    const { data } = this.props;
    const content = data.map((item, key) => {
      return (
        <tr key={key}>
          {
            columns.map((column, index) => (
              <td key={index}>{item[column.dataIndex]}</td>
            ))
          }
        </tr>
      );
    });
    return (
      <tbody>
        {content}
      </tbody>
    );
  }

  renderScrollHeader = () => {
    const { columns, fixedTitle, scroll } = this.props;
    const scrollX = scroll!.x;
    const width = typeof scrollX === 'boolean' && scrollX ? undefined : scrollX ? scrollX : undefined;
    const style = fixedTitle ? {
      width,
    } : {};
    return (
      <table style={style}>
        {this.renderColgroup(columns)}
        {this.renderThead(columns)}
      </table>
    );
  }

  renderScrollBody = () => {
    const {
      columns, fixedTitle,
      scroll,
     } = this.props;
    const scrollX = scroll!.x;
    const width = typeof scrollX === 'boolean' && scrollX ? undefined : scrollX ? scrollX : undefined;
    const style = fixedTitle ? {
      width,
    } : {};
    return (
      <table style={style}>
        {this.renderColgroup(columns)}
        {fixedTitle ? null : this.renderThead(columns)}
        {this.renderTbody(columns)}
      </table>
    );
  }

  renderFixedHeader = (columns: IColumns[]) => {
    return (
      <div className={`${this.preCls}-header-inner`}>
        <table>
          {this.renderColgroup(columns)}
          {this.renderThead(columns)}
        </table>
      </div>
    );
  }

  renderFixedBody = (columns: IColumns[], pos: 'left' | 'right') => {
    const { fixedTitle, scroll } = this.props;
    const bodyStyle = fixedTitle ? {
      height: scroll!.y,
    } : {};
    return (
      <div
        className={`${this.preCls}-body-inner`}
        style={bodyStyle}
        ref={(v) => {
          if (!v) {
            return;
          }
          if (pos === 'left') {
            this.refFixedLeft = v;
          } else if (pos === 'right') {
            this.refFixedRight = v;
          }
        }}
      >
        <table>
          {this.renderColgroup(columns)}
          {fixedTitle ? null : this.renderThead(columns)}
          {this.renderTbody(columns)}
        </table>
      </div>
    );
  }

  render() {
    const {
      className, style, columns,
      data, fixedTitle, scroll,
      ...otherProps} = this.props;
    const preCls = this.preCls;
    const clsName = classNames(
      preCls, className,
      {[`${preCls}-fixed-header`]: fixedTitle},
    );
    const bodyStyle = fixedTitle ? {
      height: scroll!.y,
    } : {};

    const fixedLeftCol = columns.filter((item) => item.fixed === 'left');
    const fixedRightCol = columns.filter((item) => item.fixed === 'right');
    const fixedLeftCls = classNames(
      `${preCls}-fixed-left`,
      {[`${preCls}-fixed-left-shadow`]: this.state.leftShadow}
    );
    const fixedRightCls = classNames(
      `${preCls}-fixed-right`,
      {[`${preCls}-fixed-right-shadow`]: this.state.rightShadow}
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        <div className={`${preCls}-content`}>
          <div className={`${preCls}-scroll`}>
            {
              fixedTitle ? (
                <div
                  className={`${preCls}-header`}
                  ref={(v) => {
                    if (v) {
                      this.refScrollHeader = v;
                    }
                  }}
                >
                  {this.renderScrollHeader()}
                </div>
              ) : null
            }
            <div
              className={`${preCls}-body`}
              style={bodyStyle}
              ref={(v) => {
                if (v) {
                  this.refScrollBody = v;
                }
              }}
            >
              {this.renderScrollBody()}
            </div>
          </div>
          {
            fixedLeftCol.length ? (
              <div className={fixedLeftCls}>
                <div className={`${preCls}-header-outter`}>
                  {this.renderFixedHeader(fixedLeftCol)}
                </div>
                <div className={`${preCls}-body-outter`}>
                  {this.renderFixedBody(fixedLeftCol, 'left')}
                </div>
              </div>
            ) : null
          }
          {
            fixedRightCol.length ? (
              <div className={fixedRightCls}>
                <div className={`${preCls}-header-ouuter`}>
                  {this.renderFixedHeader(fixedRightCol)}
                </div>
                <div className={`${preCls}-body-outter`}>
                  {this.renderFixedBody(fixedRightCol, 'right')}
                </div>
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default Table;
