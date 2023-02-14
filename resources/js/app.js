import './bootstrap';
import router from '@/router';
import store from '@/store';
import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp({});
app.use(router).use(store).mount('#app');

