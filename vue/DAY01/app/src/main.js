import Vue from 'vue'
import App from './App.vue'
import Footer from './components/Footer'

Vue.config.productionTip = false

// 全局注册组件
Vue.component('Footer', Footer)

new Vue({
  render: h => h(App),
  // comments: {
  //   Footer
  // }
}).$mount('#app')
