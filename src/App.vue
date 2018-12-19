<template>
  <div id="app">
    <height @getData="getHeight"></height>
    <!-- <weight @getData="getWeight"></weight> -->
    <choice
      width="500"
      :key="index"
      :title="defaultData.title" 
      :choiceOptions="defaultData.list" 
      @getData="getChoice">
    </choice>
    <choice
      width="500"
      :key="index"
      :title="defaultData2.title" 
      :choiceOptions="defaultData2.list"
      @getData="getChoice">
    </choice>
    <button @click="showData">显示数据</button>
    <!-- <question :componentList="['q-height', 'q-weight', 'q-choice']"></question> -->
  </div>
</template>

<script>
// import HelloWorld from '../packages/height/height'
// import weight from '../packages/weight/weight'
// import choice from '../packages/choice/choice'
// import question from '../packages/question/'

export default {
  name: 'App',
  components: {
    // weight,
    // choice,
    // question
  },
  data() {
    return {
      defaultData2: {
        title: '选择题2',
        list: [
          { code: 1, label: '脑壳炎', value: false },
          { code: 2, label: '2题', value: false },
          { code: 3, label: '第3题', value: false },
          { code: 4, label: '4题', value: false },
          { code: 5, label: '第5题', value: false },
        ]
      },
      defaultData: {
        title: '选择题1',
        list: [
          { code: 1, label: '脑壳炎1', value: false },
          { code: 2, label: '2题1', value: false },
          { code: 3, label: '第3题1', value: false },
          { code: 4, label: '4题1', value: false },
          { code: 5, label: '第5题1', value: false },
        ]
      }
    }
  },
  created() {
    // console.log(this.$store, 'store');
  },
  methods: {
    getHeight(val) {
      console.log(val, '身高');
    },
    getWeight(val) {
      console.log(val, '体重');
    },
    getChoice(val) {
      console.log(val, 'choice');
    },
    showData() {
      // this.$getHeight();
      console.log(this.$store);
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


