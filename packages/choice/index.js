import choice from './choice'

choice.install = function(Vue) {
  Vue.component(choice.name, choice);
}

export default choice;