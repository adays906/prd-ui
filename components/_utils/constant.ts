/**
 * 常量定义
 * @author: ZhangHF adays@foxmail.com
 * @description: 定义组件库中使用的常量，如尺寸、状态、边框形状等
 * @since: 1.0.0
 */

export type Size = 'mini' | 'small' | 'medium' | 'large';
export type Status = 'normal' | 'success' | 'warning' | 'danger';
export type BorderShape = 'square' | 'round' | 'circle';

export const SIZE = {
  MINI: 'mini',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export const STATUS = {
  NORMAL: 'normal',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
} as const;

export const BORDER_SHAPE = {
  SQUARE: 'square',
  ROUND: 'round',
  CIRCLE: 'circle',
} as const;
