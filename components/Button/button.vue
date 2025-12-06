<template>
  <button
    :class="[
      'prd-button',
      `prd-button--${type}`,
      `prd-button--${size}`,
      {
        'prd-button--disabled': disabled || loading,
        'prd-button--loading': loading,
        'prd-button--round': round,
        'prd-button--circle': circle,
        'prd-button--link': link,
        [`prd-button--icon-${iconPosition}`]: icon && $slots.default,
      },
    ]"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick"
  >
    <!-- 加载状态图标 -->
    <span
      v-if="loading"
      class="prd-button__loading"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 864 150c37.3 47 60.3 104.1 60.3 163.7 0 19.9-16.1 36-36 36z"
        />
      </svg>
    </span>

    <!-- 图标 -->
    <span
      v-else-if="icon"
      class="prd-button__icon"
    >
      <slot name="icon">{{ icon }}</slot>
    </span>

    <!-- 按钮文本 -->
    <span
      v-if="text || $slots.default"
      class="prd-button__text"
    >
      <slot>{{ text }}</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps, ButtonEmits } from './interface';

/**
 * Button组件
 * @author: ZhangHF adays@foxmail.com
 * @description: 基础按钮组件，支持多种类型、尺寸和状态
 * @since: 1.0.0
 */

// 定义组件属性
withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'default',
  disabled: false,
  loading: false,
  round: false,
  circle: false,
  link: false,
  nativeType: 'button',
  text: '',
  icon: '',
  iconPosition: 'left'
});

// 定义组件事件
const emit = defineEmits<ButtonEmits>();

/**
 * 点击事件处理
 * @param {MouseEvent} event - 鼠标事件对象
 */
const handleClick = (event: MouseEvent) => {
  emit('click', event);
};
</script>

<style lang="less" scoped>
@import './style/index';
</style>
