<template>
  <div>
    <div>
      <!-- <component v-for="(view, index) in componentList" refs="view" :key="index" :is="view" :ref="view"></component> -->
      <q-choice @getData="getChoice" :choice-options="['A', 'B', 'C', 'D']"></q-choice>
      <button @click="aa">添加</button>
    </div>
  </div>
</template>
<script>
import Height from '../height/height';
import Weight from '../weight/weight';
import Choice from '../choice/choice';

export default {
  name: 'question',
  props: {
    componentList: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      allDatas: {}
    }
  },
  components: {
    'q-height': Height,
    'q-weight': Weight,
    'q-choice': Choice,
  },
  methods: {
    aa() {
      // 获取子组件数据
      // this.$refs
      Object.keys(this.$refs).forEach((item) => {
        this.allDatas[item] = this.$refs[item][0].datas;
      });
      console.log(this.allDatas);
    },
    getChoice(val) {
      console.log(val);
    }
  },
  mounted() {
    // this.componentList.forEach(item => {
    //   this.allDatas[item] = this.$refs[item][0].datas;
    // });
    // Height.$getAlldata();
    // this.$getQuestionDatas
    // this.componentList = ['q-height', 'q-weight'];
  }
}
</script>

