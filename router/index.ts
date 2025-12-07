import { createRouter, createWebHashHistory } from 'vue-router';
import ButtonDemo from '../demo/ButtonDemo.vue';

// 路由配置
const routes = [
  {
    path: '/',
    redirect: '/button'
  },
  {
    path: '/button',
    name: 'Button',
    component: ButtonDemo,
    meta: {
      title: '按钮组件'
    }
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;