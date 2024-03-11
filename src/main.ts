import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory} from 'vue-router'
import { routes } from './router.js'

import App from './App.vue'

const app = createApp(App)
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'active-link'
})

app.use(createPinia())
app.use(router)
app.mount('#app')
