import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import Axios from 'axios'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './assets/custom.css'



const app = createApp(App)

app.use(router)
app.use(VueAxios, Axios)
app.mount('#app')
