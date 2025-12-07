import { createApp } from 'vue';
import App from './App.vue';
import PrdUI from './components/index';
import router from './router';
import './components/style/index.less';

// 环境变量使用示例
console.log('当前环境:', import.meta.env.VITE_ENV);
console.log('API基础URL:', import.meta.env.VITE_API_BASE_URL);
console.log('运行端口:', import.meta.env.VITE_PORT);

const app = createApp(App);
app.use(PrdUI);
app.use(router);
app.mount('#app');

