import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Player from 'seec-player';
Vue.use(Player);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
