import { createApp } from 'vue';
import App from './app.vue';
import Router from './router';

const app = createApp(App);
app.use(Router);
app.mount('#app');
