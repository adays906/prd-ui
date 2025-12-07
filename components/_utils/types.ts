/**
 * 公共类型定义
 * @author: ZhangHF adays@foxmail.com
 * @description: 定义组件库中使用的公共类型
 * @since: 1.0.0
 */

import type { App } from 'vue';

/**
 * 全局配置选项
 */
export interface GlobalConfig {
  /**
   * 组件前缀
   */
  prefixCls?: string;
  /**
   * 全局尺寸
   */
  size?: 'mini' | 'small' | 'medium' | 'large';
  /**
   * 全局zIndex
   */
  zIndex?: number;
}

/**
 * 组件安装选项
 */
export interface ArcoOptions {
  /**
   * 组件前缀
   */
  prefixCls?: string;
  /**
   * 全局配置
   */
  globalConfig?: GlobalConfig;
}

/**
 * 组件属性基础接口
 */
export interface BaseProps {
  /**
   * 尺寸
   */
  size?: 'mini' | 'small' | 'medium' | 'large';
  /**
   * 是否禁用
   */
  disabled?: boolean;
}

/**
 * 注入键类型
 */
export type InjectionKey<T> = symbol;
