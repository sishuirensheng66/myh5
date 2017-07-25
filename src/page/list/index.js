import Vue from 'vue'
import App from './components/App.vue'
import store from './store/index.js'
import '../../public/css/reset.css'
import '../../public/css/font.css'
import '../../public/css/base.css'
import './css/index.css'
Vue.config.productionTip = false
new Vue({
	el: '#app',
	store,
	template: '<App/>',
	components: { App }
})
