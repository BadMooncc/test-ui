import height from './height'

height.alert = function() {
  console.log('alert');
}
height.install = function(Vue) {
  Vue.component(height.name, height);
}

export default height;