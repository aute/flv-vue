import Vue from 'vue';
import App from './app';
import test from './';

Vue.use(test);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
