<template>
  <div id="app">
    <!-- <hello-world @getData="getHeight"></hello-world>
    <weight @getData="getWeight"></weight> -->
    <question :componentList="['q-height', 'q-weight', 'q-choice']"></question>
  </div>
</template>

<script>
// import HelloWorld from '../packages/height/height'
// import weight from '../packages/weight/weight'
import question from '../packages/question/'
console.log(question);
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // weight
    question
  },
  methods: {
    getHeight(val) {
      console.log(val, '身高');
    },
    getWeight(val) {
      console.log(val, '体重');
    }
  },
}
</script>
<style lang="less">
// @import './styles/index.less';
.height {
  height: 100px;
}
</style>


