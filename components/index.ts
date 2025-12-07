/**
 * 组件库入口文件
 * @author: ZhangHF adays@foxmail.com
 * @description: 导出所有组件，支持全量导入和按需导入
 * @since: 1.0.0
 */

import type { App } from 'vue';
import type { ArcoOptions } from './_utils/types';
import { setGlobalConfig } from './_utils/global-config';

// 导入全局样式
import './style/index.less';

// 导入Button组件
import Button, { type ButtonProps, type ButtonEmits } from './Button';

// 组件列表
export const components = {
  Button,
};

// 组件库默认导出
const PrdUI = {
  ...components,
  install: (app: App, options?: ArcoOptions) => {
    // 设置全局配置
    setGlobalConfig(app, options?.globalConfig);
    
    // 注册所有组件
    Object.keys(components).forEach((key) => {
      const component = components[key as keyof typeof components];
      // 调用组件的 install 方法
      if (component.install) {
        component.install(app, options);
      } else {
        // 如果没有 install 方法，则直接注册组件
        app.component(component.name || key, component);
      }
    });
  },
};

// 导出所有组件
export { Button, ButtonProps, ButtonEmits };

// 默认导出组件库
export default PrdUI;

// 导出类型
export type { ArcoOptions } from './_utils/types';
export type { Size, Status, BorderShape } from './_utils/constant';
