/**
 * Button组件类型定义
 * @author: ZhangHF adays@foxmail.com
 * @description: 定义Button组件的Props、事件等类型
 * @since: 1.0.0
 */

/**
 * 按钮类型枚举
 */
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';

/**
 * 按钮尺寸枚举
 */
export type ButtonSize = 'large' | 'default' | 'small';

/**
 * Button组件属性
 */
export interface ButtonProps {
	/**
	 * 按钮类型
	 * @default 'default'
	 */
	type?: ButtonType;
	/**
	 * 按钮尺寸
	 * @default 'default'
	 */
	size?: ButtonSize;
	/**
	 * 是否为禁用状态
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * 是否为加载状态
	 * @default false
	 */
	loading?: boolean;
	/**
	 * 是否为圆角按钮
	 * @default false
	 */
	round?: boolean;
	/**
	 * 是否为圆形按钮
	 * @default false
	 */
	circle?: boolean;
	/**
	 * 是否为链接按钮
	 * @default false
	 */
	link?: boolean;
	/**
	 * 按钮原生类型
	 * @default 'button'
	 */
	nativeType?: 'button' | 'submit' | 'reset';
	/**
	 * 按钮文本
	 */
	text?: string;
	/**
	 * 按钮图标
	 */
	icon?: string;
	/**
	 * 图标位置
	 * @default 'left'
	 */
	iconPosition?: 'left' | 'right';
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
