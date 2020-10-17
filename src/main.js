// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueParticles from "vue-particles";
import VueScrollactive from "vue-scrollactive";

import "./assets/scss/app.scss";

Vue.use(VueParticles);
Vue.use(VueScrollactive);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});

console.log(
  `%c Bienvenidos a mi portafolio, no pegues código aquí.`,
  "font-size: 1.5em; color: #000; font-weight: bold"
);
