<template>
  <div class="choice">
    <div class="question-item">
      <label class="question-item_label">{{ subject.title }}</label>
      <div class="question-item_content">
        <div class="choice-group" @click="changeChoice">
          <label
            v-for="(item, index) in choiceLists"
            :key="index"
            class="checkbox">
            <input v-model="item.value" class="el-checkbox__original" type="checkbox">
            <span class="el-checkbox__inner">{{ item.label }}</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'choice',
  data() {
    return {
      subject: {
        type: '多选题',
        title: '选择题噜噜啦',
        options: []
      },
      choiceLists: [
        { sort: 'A', code: 1, label: '第一题', value: false },
        { sort: 'B', code: 2, label: '2题', value: false },
        { sort: 'C', code: 3, label: '第3题', value: false },
        { sort: 'D', code: 4, label: '4题', value: false },
        { sort: 'E', code: 5, label: '第5题', value: false },
      ]
    }
  },
  props: {
    choiceOptions: {
      type: Array,
      required: false,
      default() {
        return ['A', 'B', 'C', 'D'];
      }
    },
    customChoice: {
      type: Boolean,
      required: false
    }
  },
  created() {
    if (true) {
      let newChoiceLists = [];
      let ChoiceListsItem;
      this.choiceLists.forEach((item) => {
        ChoiceListsItem = this.choiceOptions.find(item2 => item2 === item.sort);
        if (ChoiceListsItem) newChoiceLists.push(item);
      });

      this.choiceLists = newChoiceLists;
    }
  },
  methods: {
    changeChoice() {
      this.$emit('changeChoice', this.choiceLists);
      console.log(this.choiceLists);
    }
  },
}
</script>
<style lang="less">
.choice {
  width: 320px;
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 40px;
  .choice-group {
    width: 320px;
    margin: 0;
    padding: 0;
    list-style: none;
    .checkbox {
      width: 160px;
      padding-right: 20px;
      margin: 0;
      padding: 0;
      color: #606266;
      font-weight: 500;
      font-size: 14px;
      position: relative;
      cursor: pointer;
      display: inline-block;
      white-space: nowrap;
      user-select: none;
    }
  }
}
</style>

