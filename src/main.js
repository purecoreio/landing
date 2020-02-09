import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import vBlur from 'v-blur'

Vue.config.productionTip = false


Vue.use(vBlur, {
  opacity: 0.2,
  filter: 'blur(1.2px)',
  transition: 'all .3s linear'
})


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')