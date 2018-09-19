
import {Component, ReactNode} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent, TKey} from '../template/component';
import Icon from '../Icon';
import Transitions from '../Transitions';

const Expand = Transitions.Expand;

export interface IPanelProps extends IBaseComponent {
  /**
   * 标记，对应activekey
   */
  keyId: TKey;
  /**
   * 折叠板标题
   */
  title: string | ReactNode;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 激活
   */
  active?: boolean;
  /**
   * 变化回调
   */
  onChange?: (keyId: TKey) => void;
}

export interface IPanelState {

}

/**
 * **面板**-折叠版的子项
 */
export class Panel extends Component<IPanelProps, IPanelState> {

  static defaultProps = {
    disabled: false,
  };

  onChange = () => {
    const {onChange, disabled, keyId} = this.props;
    if (disabled) {
      return;
    }
    if (onChange) {
      onChange(keyId);
    }
  }

  render() {
    const {
      className, style, onChange,
      title, active, children, disabled,
      keyId, ...otherProps
    } = this.props;
    const preCls = 'yoshino-panel';
    const clsName = classNames(
      preCls,
      {
        [`${preCls}-active`]: active,
        [`${preCls}-disabled`]: disabled,
      },
      className,
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        <div className={`${preCls}-title`} onClick={this.onChange}>
          <Icon type='ios-arrow-forward' className={`${preCls}-icon`}/>
          {title}
        </div>
        <Expand
          timeout={300}
          active={active as boolean}
        >
          <div
            className={`${preCls}-content`}
          >
            <div
              className={`${preCls}-inner`}
            >
              {children}
            </div>
          </div>
        </Expand>
      </div>
    );
  }
}

export default Panel;
