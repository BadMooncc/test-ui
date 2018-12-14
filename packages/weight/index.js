import weight from './weight.Vue'

weight.install = function(Vue) {
  Vue.component(weight.name, weight);
}

export default weight;