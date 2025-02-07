import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  {io } from "Socket.io-client"

import App from './App.vue'
import router from './router'
// import type { Socket } from 'socket.io-client'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

