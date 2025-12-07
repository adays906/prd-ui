/**
 * 尺寸处理 Hook
 * @author: ZhangHF adays@foxmail.com
 * @description: 用于处理组件尺寸的 Hook
 * @since: 1.0.0
 */

import { computed, ref } from 'vue';
import type { Size } from '../_utils/constant';
import { SIZE } from '../_utils/constant';

/**
 * 尺寸处理 Hook
 * @param {Size | undefined} size - 组件尺寸
 * @returns {Object} 包含合并后尺寸的对象
 */
export function useSize(size?: Size) {
  // 创建尺寸响应式引用
  const _size = ref<Size>(size || SIZE.MEDIUM);

  // 合并后的尺寸
  const mergedSize = computed(() => _size.value);

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
