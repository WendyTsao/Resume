import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/css/style.css';

AOS.init();