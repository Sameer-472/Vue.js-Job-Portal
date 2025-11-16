import App from './App.vue';
import './assets/main.css';
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import router from './router';
// import Composition from './Composition.vue'

// createApp(Composition).mount('#app');
const app =  createApp(App);

app.use(router);
app.mount('#app')
