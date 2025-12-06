/**
 * 组件库入口文件
 * @author: ZhangHF adays@foxmail.com
 * @description: 导出所有组件，支持全量导入和按需导入
 * @since: 1.0.0
 */

// 导入全局样式
import './style/index.less';

// 导入Button组件
import Button from './Button';
import type { ButtonProps, ButtonEmits } from './Button/interface';

// 导出所有组件
export { Button, ButtonProps, ButtonEmits };

// 组件库默认导出
export default {
	Button,
};

// 导出组件安装函数，用于Vue.use()
export const install = (app: any) => {
	// 注册所有组件
	app.component('PrdButton', Button);
};
