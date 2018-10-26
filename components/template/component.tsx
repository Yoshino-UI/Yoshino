import {ReactNode} from 'react';

// 通用事件
export interface IEvent {
  // tslint:disable
  onEnter?: any;
  onKeyDown?: any;
  onKeyUp?: any;
  onChange?: any;
  onClick?: any;
  onFocus?: any;
  onBlur?: any;
}

/**
 * 所有组件都应该实现的
 */
export interface IBaseComponent extends IEvent {
  /**
   * 子元素
   */
  children?: ReactNode;
  /**
   * 附加额外的 class
   */
  className?: string;
  /**
   * 附加id
   */
  id?: string;
  /**
   * 附加额外的样式
   */
  style?: React.CSSProperties; // tslint:disable-line:no-any
}

export interface IAbstractInput<T> extends IBaseComponent {
  value?: T;
  defaultValue?: T;
  placeholder?: string;
  type?: string;
  id?: string;
  name?: string;
  size?: 'large' | 'default' | 'small';
  maxLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  onEnter?: React.FormEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onChange?: (value: T) => void;
  onClick?: React.FormEventHandler<HTMLInputElement>;
  onFocus?: React.FormEventHandler<HTMLInputElement>;
  onBlur?: React.FormEventHandler<HTMLInputElement>;
}

// 通用Type
export type TKey = string;
export type TSize = 'large' | 'small' | 'default';
