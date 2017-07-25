import Vue from 'vue'
import App from './components/App.vue'
import '../../public/css/reset.css'
Vue.config.productionTip = false
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
})
