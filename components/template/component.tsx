import {ReactNode} from 'react';

/**
 * 所有组件都应该实现的
 */
export interface IBaseComponentNoChildren {
  /**
   * 附加额外的 class
   */
  className?: string;
  /**
   * 附加额外的样式
   */
  style?: { [key: string]: any }; // tslint:disable-line:no-any
}

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
  style?: { [key: string]: any }; // tslint:disable-line:no-any
}
