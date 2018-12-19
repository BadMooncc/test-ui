import height from './height';
import weight from './weight';
import choice from './choice';
import bus from '../src/store/state'

const components = [
  height,
  weight,
  choice
];

const install = function(Vue) {
  // Vue.prototype.$getAllDatas = function() {
  //   console.log(bus, 'getAllData');
  //   return bus;
  // }
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  height,
  weight,
  choice
}

// module.exports.default = module.exports;