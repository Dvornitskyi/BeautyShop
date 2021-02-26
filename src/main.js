import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

// import AppLink from './components/AppLink.vue';
 import AppButton from './components/AppButton.vue';
 import demoButton from './components/demoButton.vue'

Vue.config.productionTip = false
Vue.use(VueGlide)
 Vue.component('AppButton', AppButton);
 Vue.component('demoButton', demoButton);
// Vue.component('AppLink', AppLink);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')

