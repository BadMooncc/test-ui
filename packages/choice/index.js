import choice from './choice'
import state from '../../src/store/state';
choice.install = function(Vue) {
  Vue.use(state);
  Vue.component(choice.name, choice);
}

export default choice;