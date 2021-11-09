import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap' // Import js file
import axios from 'axios'
import VueAxios from 'vue-axios'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

const app = createApp(App)
app.component('Loading', Loading)
app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
