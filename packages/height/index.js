import Height from './height'

Height.install = function(Vue) {
  Vue.prototype.$getHeight = function() {
    console.log(bus, 'getAllData');
    return bus.Height;
  }
  Vue.component(Height.name, Height);
}

export default Height;