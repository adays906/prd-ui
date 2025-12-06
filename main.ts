import { createApp } from 'vue';
import App from './App.vue';
import PrdUI from './components/index';
import './components/style/index.less';

const app = createApp(App);
app.use(PrdUI);
app.mount('#app');
