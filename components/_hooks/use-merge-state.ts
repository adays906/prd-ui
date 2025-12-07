/**
 * 状态合并 Hook
 * @author: ZhangHF adays@foxmail.com
 * @description: 用于合并内部状态和外部传入的 props
 * @since: 1.0.0
 */

import { ref, computed, WatchStopHandle } from 'vue';

type SetState<T> = T | ((prevState: T) => T);

type UseMergeStateReturn<T> = [
  computed<T>,
  (value: SetState<T>, emitChange?: boolean) => void
];

/**
 * 合并内部状态和外部传入的 props
 * @param {T} defaultStateValue - 默认状态值
 * @param {Object} options - 配置选项
 * @param {T} [options.value] - 外部传入的 props 值
 * @param {Function} [options.onChange] - 值变化时的回调函数
 * @returns {UseMergeStateReturn<T>} 包含合并后状态和设置状态函数的数组
 */
export function useMergeState<T>(
  defaultStateValue: T,
  options: {
    value?: T;
    onChange?: (value: T) => void;
  } = {}
): UseMergeStateReturn<T> {
  const { value, onChange } = options;
  const internalValue = ref<T>(defaultStateValue);
  let stopWatch: WatchStopHandle | null = null;

  // 判断是否由外部控制
  const hasExternalControl = computed(() => value !== undefined);

  // 合并后的状态
  const mergedValue = computed(() => (hasExternalControl.value ? value! : internalValue.value));

  /**
   * 设置状态
   * @param {SetState<T>} newValue - 新的状态值
   * @param {boolean} [emitChange=true] - 是否触发 onChange 回调
   */
  const setMergedState = (newValue: SetState<T>, emitChange = true) => {
    const finalValue = typeof newValue === 'function' ? (newValue as (prev: T) => T)(mergedValue.value) : newValue;

    // 如果是外部控制，调用 onChange
    if (hasExternalControl.value) {
      emitChange && onChange?.(finalValue);
    } else {
      // 否则更新内部状态
      internalValue.value = finalValue;
      emitChange && onChange?.(finalValue);
    }
  };

  return [mergedValue, setMergedState];
}
