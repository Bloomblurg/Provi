import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import PrimeVue from 'primevue/config';
import Axios from './axios'

import 'primeflex/primeflex.css';
import './style/root.css';
import './style/themeDark.css';



let app = createApp(App)
	//.use(store)
	.use(router)
	.use(PrimeVue)

app.config.globalProperties.$axios = Axios

app.mount('#app')