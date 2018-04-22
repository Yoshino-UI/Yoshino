
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
  defaultCurrent: number;
  /**
   * 每页条数
   */
  pageSize: number;
  /**
   * 总页数
   */
  total: number;
  /**
   * 页码改变回调
   */
  onChange?: (current: number, pageSize: number) => void;
  /**
   * 显示页码块最多的个数 - 默认值5
   */
  max: number;
  /**
   * 自定义文本-下一页
   */
  next?: string | ReactNode;
  /**
   * 自定义文本-上一页
   */
  previous?: string | ReactNode;
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
    current: this.props.defaultCurrent,
  };

  renderPageList() {
    const preCls = 'yoshino-pagination';
    const {current, max} = this.props;
    const currentPage = current ? current : this.state.current;
    const page = this.getPageSum();
    let list = [];
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
          <div className={clsName(counter)} onClick={this.itemClick.bind(this, counter)}><span>{counter}</span></div>,
        );
      }
    } else {
      let counter = 0; // 计数器  记录已渲染的item数
      const header = [];
      const footer = [];
      if (currentPage >= max - 1) {
        header.push(
          <div className={clsName(1)} onClick={this.itemClick.bind(this, 1)}><span>1</span></div>,
        );
        counter++;
        header.push(
          <div className={`${preCls}-item ${preCls}-item-more`} onClick={this.onPreviousMore}>
            <span><Icon type='more'/></span>
          </div>,
        );
      }

      if (currentPage < page - max + 2) {
        footer.push(
          <div className={`${preCls}-item ${preCls}-item-more`} onClick={this.onNextMore}>
            <span><Icon type='more'/></span>
          </div>,
        );
        footer.push(
          <div className={clsName(page)} onClick={this.itemClick.bind(this, page)}><span>{page}</span></div>,
        );
        counter++;
      }
      if (currentPage < max - 1) {
        for (let i = 1; i <= max - 1; i++) {
          list.push(
            <div className={clsName(i)} onClick={this.itemClick.bind(this, i)}><span>{i}</span></div>,
          );
        }
      } else if (currentPage >= page - max + 2) {
        for (let i = page - max + 2; i <= page; i++) {
          list.push(
            <div className={clsName(i)} onClick={this.itemClick.bind(this, i)}><span>{i}</span></div>,
          );
        }
      } else {
        const half = Math.floor((max - counter) / 2);
        for (let i = currentPage - half; i <= currentPage + half; i++) {
          list.push(
            <div className={clsName(i)} onClick={this.itemClick.bind(this, i)}><span>{i}</span></div>,
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
    let current = this.props.current ? this.props.current : this.state.current;
    if (current === 1) {
      return;
    }
    current = current - 1;

    this.onChangeTrigger(current);
  }

  onNext = () => {
    let current = this.props.current ? this.props.current : this.state.current;
    const page = this.getPageSum();
    if (current === page) {
      return;
    }
    current = current + 1;

    this.onChangeTrigger(current);
  }

  onChangeTrigger = (current: number) => {
    const {onChange, pageSize} = this.props;
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
    const current = this.props.current ? this.props.current : this.state.current;
    const pageSum = this.getPageSum();
    const {max} = this.props;
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
    const current = this.props.current ? this.props.current : this.state.current;
    const {max} = this.props;
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
    const {total, pageSize} = this.props;
    return Math.ceil(total / pageSize);
  }

  render() {
    const {className, style, onChange, total, pageSize, next, previous, ...otherProps} = this.props;
    const page = this.getPageSum();
    const current = this.props.current ? this.props.current : this.state.current;
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
