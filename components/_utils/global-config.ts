/**
 * 全局配置管理
 * @author: ZhangHF adays@foxmail.com
 * @description: 用于管理组件库的全局配置，如组件前缀、全局尺寸等
 * @since: 1.0.0
 */

import type { App, InjectionKey } from 'vue';
import type { GlobalConfig } from './types';

// 默认全局配置
const DEFAULT_CONFIG: GlobalConfig = {
  prefixCls: 'prd',
  size: 'medium',
  zIndex: 1000,
};

// 注入键
export const GLOBAL_CONFIG_KEY: InjectionKey<GlobalConfig> = Symbol('global-config');

/**
 * 设置全局配置
 * @param {App} app - Vue应用实例
 * @param {Partial<GlobalConfig>} config - 全局配置
 */
export function setGlobalConfig(app: App, config: Partial<GlobalConfig> = {}): void {
  const globalConfig = {
    ...DEFAULT_CONFIG,
    ...config,
  };
  app.provide(GLOBAL_CONFIG_KEY, globalConfig);
}

/**
 * 获取全局配置
 * @param {App} app - Vue应用实例
 * @returns {GlobalConfig} 全局配置
 */
export function getGlobalConfig(app?: App): GlobalConfig {
  if (app) {
    return app._context.provides[GLOBAL_CONFIG_KEY as any] || DEFAULT_CONFIG;
  }
  return DEFAULT_CONFIG;
}

/**
 * 获取组件前缀
 * @param {string} componentName - 组件名称
 * @param {string} [customPrefix] - 自定义前缀
 * @returns {string} 组件类名前缀
 */
export function getPrefixCls(componentName: string, customPrefix?: string): string {
  const prefix = customPrefix || DEFAULT_CONFIG.prefixCls;
  return `${prefix}-${componentName}`;
}

/**
 * 获取组件注册前缀
 * @param {string} [customPrefix] - 自定义前缀
 * @returns {string} 组件注册前缀
 */
export function getComponentPrefix(customPrefix?: string): string {
  return customPrefix || DEFAULT_CONFIG.prefixCls;
}
