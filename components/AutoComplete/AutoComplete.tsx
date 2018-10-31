// tslint:disable
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import Input from '../Input';
import {IInputProps} from '../Input/Input';
import { CSSTransition } from 'react-transition-group';

export interface IAutoCompleteProps extends IInputProps {
  /**
   * 自动补全数据源
   */
  dataSource: any[];
  /**
   * 高亮第一项
   */
  activeFirstOption?: boolean;
  /**
   * 自定义过滤函数
   */
  onFilter?: (value: any, dataSource: any[]) => string[];
}

export interface IAutoCompleteState {
  options: any[]; // 符合条件的筛选项
  show: boolean; // 控制下拉框显示
  active: number; // 下拉框高亮项
  value: any;
}

/**
 * **自动完成**-用于辅助补全输入项
 */
export class AutoComplete extends Component<IAutoCompleteProps, IAutoCompleteState> {
  static defaultProps = {
    activeFirstOption: false,
    defaultValue: '',
    dataSource: [],
  };

  state = {
    options: this.props.dataSource,
    show: false,
    active: this.props.activeFirstOption ? 0 : -1,
    value: this.props.defaultValue!,
  };

  componentWillReceiveProps(netxProps: IAutoCompleteProps) {
    const { dataSource } = this.props;
    const { dataSource: nextDataSource } = netxProps;
    if (JSON.stringify(dataSource) !== JSON.stringify(nextDataSource)) {
      this.setState({
        options: nextDataSource.filter((item) => {
          return String(item).match(new RegExp(this.getValue()));
        }),
      });
    }
  }


  onFocus: React.FormEventHandler<HTMLInputElement> = (e) => {
    const {onFocus} = this.props;
    if (onFocus) {
      onFocus(e);
    }
    this.showList();
  }

  onBlur: React.FormEventHandler<HTMLInputElement> = (e) => {
    const {onBlur} = this.props;
    if (onBlur) {
      onBlur(e);
    }
    this.hideList();
  }

  onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const {onKeyDown} = this.props;
    if (onKeyDown) {
      onKeyDown(e);
    }
    const {options, active} = this.state;
    const keyCode = e.keyCode;
    if (keyCode === 40) {
      const next = active + 1 >= options.length ? 0 : active + 1;
      this.setState({active: next});
    } else if (keyCode === 38) {
      const pre = active - 1 < 0 ? options.length - 1 : active - 1;
      this.setState({active: pre});
    }

    if (keyCode === 13) {
      this.onChangeTrigger(this.state.options[active]);
      this.hideList();
    } else {
      this.showList();
    }
  }

  onFilter = (value: string) => {
    const {onFilter, dataSource} = this.props;
    this.onChangeTrigger(value);

    if (onFilter) {
      const options = onFilter(value, dataSource);
      this.setState({options});
    } else {
      const options =  dataSource.filter((item) => {
        return String(item).match(new RegExp(value));
      });
      this.setState({options});
    }

  }

  getValue = () => {
    const {value} = this.props;
    return value !== undefined ? value : this.state.value;
  }

  onChangeTrigger = (value: any) => {
    const {onChange} = this.props;
    if (onChange) {
      onChange(value);
    }
    this.setState({value});
  }

  // 隐藏list
  hideList = () => {
    const {activeFirstOption} = this.props;
    if (activeFirstOption) {
      this.setState({active: 0});
    }

    // 延时下拉框消失，否侧列表的子项click将不生效
    setTimeout(() => {
      this.setState({show: false});
    }, 100);
  }

  // 显示list
  showList = () => {
    this.setState({show: true});
  }

  render() {
    const {
      className, style, dataSource,
      onFilter, value, onChange,
      activeFirstOption, ...otherProps
    } = this.props;
    const preCls = 'yoshino-auto-complete';
    const clsName = classNames(
      preCls, className,
    );
    const transitionCls = {
      appear: `${preCls}-appear`,
      appearActive: `${preCls}-active-appear`,
      enter: `${preCls}-enter`,
      enterActive: `${preCls}-active-enter`,
      enterDone: `${preCls}-done-enter`,
      exit: `${preCls}-exit`,
      exitActive: `${preCls}-active-exit`,
      exitDone: `${preCls}-done-exit`,
    };
    const {options} = this.state;
    const inValue = this.getValue();
    return (
      <div
        className={clsName}
      >
        <Input
          {...otherProps}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyDown={this.onKeyDown}
          onChange={this.onFilter}
          style={style}
          value={inValue}
        />
        <CSSTransition
          timeout={50}
          classNames={transitionCls}
          in={this.state.show && options.length > 0}
          appear
          mountOnEnter
        >
          {
            () => {
              return (
                <ul className={`${preCls}-list`}>
                  {
                    options.map((item, key) => {
                      const {active} = this.state;
                      const cls = classNames(
                        `${preCls}-item`,
                        {[`${preCls}-item-active`]: key === active},
                      );
                      return (
                        <li
                          className={cls}
                          key={key}
                          onMouseOver={() => this.setState({active: key})}
                          onClick={() => this.onChangeTrigger(item)}
                        >
                          {item}
                        </li>
                      );
                    })
                  }
                </ul>
              );
            }
          }

        </CSSTransition>
      </div>
    );
  }
}

export default AutoComplete;
