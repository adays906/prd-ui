/**
 * Button组件常量定义
 * @author: ZhangHF adays@foxmail.com
 * @description: 定义Button组件使用的常量
 * @since: 1.0.0
 */

export type ButtonTypes = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';

export const BUTTON_TYPE = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info',
  DEFAULT: 'default',
} as const;
