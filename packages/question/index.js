import question from './question.vue'

question.install = function(Vue) {
  Vue.component(question.name, question);
}

export default question;