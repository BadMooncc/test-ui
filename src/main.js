// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import choice from '../packages/choice/index';
// import Height from '../packages/height/index';
// import state from './store/state';
// console.log(state, 'state');
// import VvUI from 'element' // 引入组件库

// import 'vvui/packages/theme-default/lib/index.css' // 引入样式库

// Vue.use(Height);
Vue.use(choice);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  // state,
})
