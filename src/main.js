import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import VueMask from 'di-vue-mask';
import store from './store';
import router from './router';
import App from './app/Main.vue';
import './assets/main.scss';
import './assets/fontawesome';
import './components';
import './filters';
import './plugins';

Vue.use(VueMask);

sync(store, router);

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
});

