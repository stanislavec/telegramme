import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false

Vue.use(VeeValidate);

new Vue({
  render: h => h(App),
}).$mount('#app')
