import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Vue3 Click Away Agregar Libreria
import VueClickAway from "vue3-click-away";

createApp(App).use(VueClickAway).use(router).mount('#app')
