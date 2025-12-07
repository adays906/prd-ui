/**
 * Button组件类型定义
 * @author: ZhangHF adays@foxmail.com
 * @description: 定义Button组件的Props、事件等类型
 * @since: 1.0.0
 */

import { Size, Status, BorderShape } from '../_utils/constant';
import { ButtonTypes } from './constants';

/**
 * Button组件属性
 */
export interface ButtonProps {
  /**
   * 按钮类型
   * @default 'default'
   */
  type?: ButtonTypes;
  /**
   * 按钮形状
   * @default 'square'
   */
  shape?: BorderShape;
  /**
   * 按钮状态
   * @default 'normal'
   */
  status?: Status;
  /**
   * 按钮尺寸
   * @default 'medium'
   */
  size?: Size;
  /**
   * 是否为长按钮
   * @default false
   */
  long?: boolean;
  /**
   * 是否为加载状态
   * @default false
   */
  loading?: boolean;
  /**
   * 是否为禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 按钮原生类型
   * @default 'button'
   */
  htmlType?: 'button' | 'submit' | 'reset';
  /**
   * 是否自动获取焦点
   * @default false
   */
  autofocus?: boolean;
  /**
   * 链接地址，设置此属性时按钮渲染为a标签
   */
  href?: string;
  /**
   * 图标位置
   * @default 'left'
   */
  iconPosition?: 'left' | 'right';
  /**
   * 按钮文本
   */
  text?: string;
}

/**
 * Button组件事件
 */
export interface ButtonEmits {
  /**
   * 点击事件
   * @param {MouseEvent} event - 鼠标事件对象
   */
  (e: 'click', event: MouseEvent): void;
}
