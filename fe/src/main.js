import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './route'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).mount('#app')