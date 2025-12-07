/**
 * Button组件入口
 * @author: ZhangHF adays@foxmail.com
 * @description: 导出Button组件及类型定义
 * @since: 1.0.0
 */

import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import Button from './button.vue';
import type { ButtonProps, ButtonEmits } from './interface';

// 设置组件名称
Button.name = 'PrdButton';

const PrdButton = Object.assign(Button, {
  install: (app: App, options?: ArcoOptions) => {
    const componentPrefix = getComponentPrefix(options?.prefixCls);
    app.component(componentPrefix + '-button', Button);
  },
});

export type { ButtonProps, ButtonEmits };

export { PrdButton };

export default PrdButton;
