<template>
	<template v-if="href">
		<a :class="cls" :href="mergedDisabled || loading ? undefined : href" @click="handleClick">
			<!-- 加载状态图标 -->
			<span v-if="loading || slots.icon || icon" :class="`${prefixCls}__icon`">
				<svg
					v-if="loading"
					width="16"
					height="16"
					viewBox="0 0 1024 1024"
					xmlns="http://www.w3.org/2000/svg"
					class="${prefixCls}__loading"
				>
					<path
						d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 864 150c37.3 47 60.3 104.1 60.3 163.7 0 19.9-16.1 36-36 36z"
					/>
				</svg>
				<slot v-else-if="slots.icon" name="icon" />
				<span v-else-if="icon" class="${prefixCls}__icon-text">{{ icon }}</span>
			</span>

			<!-- 按钮文本 -->
			<span v-if="text || slots.default" :class="`${prefixCls}__text`">
				<slot>{{ text }}</slot>
			</span>
		</a>
	</template>
	<template v-else>
		<button :class="cls" :disabled="mergedDisabled" :type="htmlType" :autofocus="autofocus" @click="handleClick">
			<!-- 加载状态图标 -->
			<span v-if="loading || slots.icon || icon" :class="`${prefixCls}__icon`">
				<svg
					v-if="loading"
					width="16"
					height="16"
					viewBox="0 0 1024 1024"
					xmlns="http://www.w3.org/2000/svg"
					class="${prefixCls}__loading"
				>
					<path
						d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 864 150c37.3 47 60.3 104.1 60.3 163.7 0 19.9-16.1 36-36 36z"
					/>
				</svg>
				<slot v-else-if="slots.icon" name="icon" />
				<span v-else-if="icon" class="${prefixCls}__icon-text">{{ icon }}</span>
			</span>

			<!-- 按钮文本 -->
			<span v-if="text || slots.default" :class="`${prefixCls}__text`">
				<slot>{{ text }}</slot>
			</span>
		</button>
	</template>
</template>

<script setup lang="ts">
import type { ButtonProps, ButtonEmits } from './interface';
import { computed, useSlots } from 'vue';
import { getPrefixCls } from '../_utils/global-config';
import { isString } from '../_utils/is';
import { useSize } from '../_hooks/use-size';

/**
 * Button组件
 * @author: ZhangHF adays@foxmail.com
 * @description: 基础按钮组件，支持多种类型、尺寸和状态
 * @since: 1.0.0
 */

// 定义组件属性
const props = withDefaults(defineProps<ButtonProps>(), {
	type: 'default',
	size: 'medium',
	disabled: false,
	loading: false,
	long: false,
	circle: false,
	htmlType: 'button',
	autofocus: false,
	iconPosition: 'left',
	text: '',
	icon: '',
});

// 定义组件事件
const emit = defineEmits<ButtonEmits>();

// 获取插槽
const slots = useSlots();

// 获取组件前缀
const prefixCls = getPrefixCls('button');

// 使用size hook处理尺寸
const { mergedSize } = useSize(props.size);

// 计算合并后的禁用状态
const mergedDisabled = computed(() => props.disabled || props.loading);

// 计算类名
const cls = computed(() => [
	prefixCls,
	`${prefixCls}--${props.type}`,
	`${prefixCls}--${mergedSize.value}`,
	(props.shape || (props.circle ? 'circle' : undefined)) && `${prefixCls}--shape-${props.shape || 'circle'}`,
	{
		[`${prefixCls}--disabled`]: mergedDisabled.value,
		[`${prefixCls}--loading`]: props.loading,
		[`${prefixCls}--long`]: props.long,
		[`${prefixCls}--link`]: isString(props.href),
		[`${prefixCls}-only-icon`]: (props.icon || slots.icon) && !(slots.default || props.text),
		[`${prefixCls}-icon-${props.iconPosition}`]: (props.icon || slots.icon) && (slots.default || props.text),
	},
]);

/**
 * 点击事件处理
 * @param {MouseEvent} event - 鼠标事件对象
 */
const handleClick = (event: MouseEvent) => {
	if (mergedDisabled.value) {
		event.preventDefault();
		return;
	}
	emit('click', event);
};
</script>

<style lang="less">
@import './style/index.less';
</style>
