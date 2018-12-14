import height from './packages/height';
import weight from './packages/weight';
import choice from './packages/choice';

const components = [
  height,
  weight,
  choice
];

const install = function() {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  install,
  height,
  weight,
  choice
}

module.exports.default = module.exports;