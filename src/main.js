import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import PrimeVue from 'primevue/config';
//import Axios from './axios'

import 'primeflex/primeflex.css';
import './style/root.css';
import './style/themeDark.css';


createApp(App)
	//.provide('$axios', Axios)  //Not installed, might not be needed
	//.use(store)
	.use(router)
	.use(PrimeVue)
	.mount('#app')
