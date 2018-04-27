import {ReactNode} from 'react';

/**
 * 所有组件都应该实现的
 */
export interface IBaseComponent {
  /**
   * 子元素
   */
  children?: ReactNode;
  /**
   * 附加额外的 class
   */
  className?: string;
  /**
   * 附加额外的样式
   */
  style?: React.CSSProperties; // tslint:disable-line:no-any
}

export interface IAbstractInput extends IBaseComponent {
  placeholder?: string;
  type?: string;
  id?: string;
  name?: string;
  size?: 'large' | 'default' | 'small';
  maxLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
  onEnter?: React.FormEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.FormEventHandler<HTMLInputElement>;
  onFocus?: React.FormEventHandler<HTMLInputElement>;
  onBlur?: React.FormEventHandler<HTMLInputElement>;
  autoComplete?: string;
  autoFocus?: boolean;
}
