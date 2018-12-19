class Store {
  constructor(Vue, state) {
    const bus = new Vue({
      data: {
        state
      }
    });
    // this.state = bus._data.state;
    this.install = (function(Vue) {
      Vue.prototype.$store = bus._data.state;
    })(Vue);
  }
}

export default Store;