import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import vBlur from "v-blur";
import VueRellax from "vue-rellax";
import VueTilt from "vue-tilt.js";

Vue.config.productionTip = false;
Vue.use(VueRellax);

Vue.use(vBlur, {
  opacity: 0.2,
  filter: "blur(1.2px)",
  transition: "all .3s linear",
});

Vue.use(VueTilt);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
