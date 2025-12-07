/**
 * 尺寸处理 Hook
 * @author: ZhangHF adays@foxmail.com
 * @description: 用于处理组件尺寸的 Hook，支持从全局配置获取尺寸
 * @since: 1.0.0
 */

import { computed, inject, ref } from 'vue';
import type { Size } from '../_utils/constant';
import { SIZE } from '../_utils/constant';
import type { GlobalConfig } from '../_utils/types';
import { GLOBAL_CONFIG_KEY } from '../_utils/global-config';

/**
 * 尺寸处理 Hook
 * @param {Size | undefined} size - 组件尺寸
 * @returns {Object} 包含合并后尺寸的对象
 */
export function useSize(size?: Size) {
  // 获取全局配置
  const globalConfig = inject<GlobalConfig | undefined>(GLOBAL_CONFIG_KEY);

  // 创建尺寸响应式引用
  const _size = ref<Size>(size || (globalConfig?.size as Size) || SIZE.MEDIUM);

  // 合并后的尺寸 - 优先使用组件传入的尺寸，否则使用全局配置的尺寸
  const mergedSize = computed(() => size || (globalConfig?.size as Size) || _size.value);

  /**
   * 更新尺寸
   * @param {Size} newSize - 新尺寸
   */
  const updateSize = (newSize: Size) => {
    _size.value = newSize;
  };

  return {
    mergedSize,
    updateSize,
  };
}
