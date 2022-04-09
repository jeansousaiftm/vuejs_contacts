import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vueTheStorages from 'vue-the-storages';

const app = createApp(App);

app.use(router);

app.use(vueTheStorages);

app.mount('#app');
