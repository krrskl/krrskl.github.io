// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueParticles from "vue-particles";
import Scrollspy from 'vue2-scrollspy';


Vue.use(Scrollspy);
Vue.use(VueParticles);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});

console.log(
  `%c Bienvenidos a mi portafolio, %c no pegues código aquí. %c`,
  "background:#1f64b5 ; padding: 1px; border-radius: 5px 0 0 5px;  color: #fff;  font-weight: bold; font-size: 2em;",
  "background:#46E839 ; padding: 1px; border-radius: 0 5px 5px 0;  color: #fff;  font-weight: bold; font-size: 2em;",
  "background:transparent"
);
