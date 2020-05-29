import Vue from 'vue'
import less from 'less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import App from './App.vue'

Vue.use(ElementUI, less)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
