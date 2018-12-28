
import {Component, ReactNode} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import Icon from '../Icon';

export interface IPaginationProps extends IBaseComponent {
  /**
   * 当前页数
   */
  current?: number;
  /**
   * 默认当前页数
   */
  defaultCurrent?: number;
  /**
   * 每页条数
   */
  pageSize?: number;
  /**
   * 总条数
   */
  total: number;
  /**
   * 页码改变回调
   */
  onChange?: (current: number, pageSize: number) => void;
  /**
   * 显示页码块最多的个数 - 默认值5
   */
  max?: number;
  /**
   * 自定义文本-下一页
   */
  next?: string | ReactNode;
  /**
   * 自定义文本-上一页
   */
  previous?: string | ReactNode;
}

export interface IPaginationDefaultProps extends IPaginationProps {
  defaultCurrent: number;
  max: number;
  pageSize: number;
}

export interface IPaginationState {

}

/**
 * **分页**-用于分割多页内容。
 */
export class Pagination extends Component<IPaginationProps, IPaginationState> {
  static defaultProps = {
    defaultCurrent: 1,
    pageSize: 10,
    max: 5,
  };

  state = {
    current: this.props.defaultCurrent as number,
  };

  renderPageList() {
    const preCls = 'yoshino-pagination';
    const {max} = this.props as IPaginationDefaultProps;
    const currentPage = this.getCurrent();
    const page = this.getPageSum();
    let list = [];
    let key = 0;
    const paginationItem = (className: string, pageNo: number) => {
      return (
        <div
          className={className}
          onClick={this.itemClick.bind(this, pageNo)}
          key={key++}
        >
          <span>{pageNo}</span>
        </div>
      );
    };

    // itemClsName  -  主要用于判断item-active
    const clsName = (counter: number) => {
      return classNames(
        `${preCls}-item`,
        {
          [`${preCls}-item-active`]: currentPage === counter,
        },
      );
    };
    if (page <= max + 2) {
      for (let counter = 1; counter <= page; counter++) {
        list.push(
          paginationItem(clsName(counter), counter),
        );
      }
    } else {
      let counter = 0; // 计数器  记录已渲染的item数
      const header = [];
      const footer = [];
      if (currentPage >= max - 1) {
        header.push(
          paginationItem(clsName(1), 1),
        );
        counter++;
        header.push(
          <div className={`${preCls}-item ${preCls}-item-more`} onClick={this.onPreviousMore} key={key++}>
            <span><Icon type='md-more'/></span>
          </div>,
        );
      }

      if (currentPage < page - max + 2) {
        footer.push(
          <div className={`${preCls}-item ${preCls}-item-more`} onClick={this.onNextMore} key={key++}>
            <span><Icon type='md-more'/></span>
          </div>,
        );
        footer.push(
          paginationItem(clsName(page), page),
        );
        counter++;
      }
      if (currentPage < max - 1) {
        for (let i = 1; i <= max - 1; i++) {
          list.push(
            paginationItem(clsName(i), i),
          );
        }
      } else if (currentPage >= page - max + 2) {
        for (let i = page - max + 2; i <= page; i++) {
          list.push(
            paginationItem(clsName(i), i),
          );
        }
      } else {
        const half = Math.floor((max - counter) / 2);
        for (let i = currentPage - half; i <= currentPage + half; i++) {
          list.push(
            paginationItem(clsName(i), i),
          );
        }
      }
      list = [...header, ...list, ...footer];
    }
    return list;
  }

  itemClick = (current: number) => {
    this.onChangeTrigger(current);
  }

  onPrevious = () => {
    let current = this.getCurrent();
    if (current === 1) {
      return;
    }
    current = current - 1;

    this.onChangeTrigger(current);
  }

  onNext = () => {
    let current = this.getCurrent();
    const page = this.getPageSum();
    if (current === page) {
      return;
    }
    current = current + 1;

    this.onChangeTrigger(current);
  }

  onChangeTrigger = (current: number) => {
    if (this.getCurrent() === current) {
      return;
    }
    const {onChange, pageSize} = this.props as IPaginationDefaultProps;
    if (!this.props.current) {
      this.setState({
        current,
      });
    }
    if (onChange) {
      onChange(current, pageSize);
    }
  }

  onNextMore = () => {
    const current = this.getCurrent();
    const pageSum = this.getPageSum();
    const {max} = this.props as IPaginationDefaultProps;
    const pageNo = current + max - 2;
    const jump = pageNo < pageSum ? pageNo : pageSum;
    if (!this.props.current) {
      this.setState({
        current: jump,
      });
    }
    this.onChangeTrigger(jump);
  }

  onPreviousMore = () => {
    const current = this.getCurrent();
    const {max} = this.props as IPaginationDefaultProps;
    const pageNo = current - max - 2;
    const jump = pageNo >= 1 ? pageNo : 1;
    if (!this.props.current) {
      this.setState({
        current: jump,
      });
    }
    this.onChangeTrigger(jump);
  }

  getPageSum = () => {
    const {total, pageSize} = this.props as IPaginationDefaultProps;
    return Math.ceil(total / pageSize);
  }

  getCurrent = () => {
    const {current} = this.props;
    return current !== undefined ? current : this.state.current;
  }

  render() {
    const {
      className, style, onChange, total,
      pageSize, next, previous,
      defaultCurrent, ...otherProps
    } = this.props;
    const page = this.getPageSum();
    const current = this.getCurrent();
    const preCls = 'yoshino-pagination';
    const clsName = classNames(
      preCls, className,
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        <div
          className={`${preCls}-header ${preCls}-item`}
          onClick={this.onPrevious}
          style={current > 1 ? {} : {cursor: 'not-allowed'}}
        >
          <span>{previous ? previous : <Icon type='ios-arrow-back'/>}</span>
        </div>
        {this.renderPageList()}
        <div
          className={`${preCls}-footer ${preCls}-item`}
          onClick={this.onNext}
          style={current < page ? {} : {cursor: 'not-allowed'}}
        >
          <span>{next ? next : <Icon type='ios-arrow-forward'/>}</span>
        </div>
      </div>
    );
  }
}

export default Pagination;
