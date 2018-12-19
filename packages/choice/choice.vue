<template>
  <div class="choice">
    <div class="question-item">
      <label class="question-item_label">{{ subject.title }}</label>
      <div class="question-item_content">
        <div class="choice-group">
          <label
            v-for="(item, index) in choiceLists"
            :key="index"
            :data-index="index"
            class="checkbox">
            <input @change="changeChoice" :data-index="index" v-model="item.value" class="el-checkbox__original" :name="choiceType" :type="choiceType">
            <span :data-index="index" class="el-checkbox__inner">{{ item.label }}</span>
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
      selectedLists: [],
      currentSeleted: [],
      choiceType: 'checkbox',
      choiceLists: []
    }
  },
  props: {
    choiceOptions: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    },
    layout: {
      type: String,
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    customChoice: {
      type: Boolean,
      required: false
    }
  },
  created() {
    this.choiceLists = this.choiceOptions;
    this.subject.title = this.title;
  },
  methods: {
    changeChoice(e) {
      const isChecked = e.target.checked; // 是否选中
      const index = e.target.dataset.index; // 当前选中/删除元素的索引
      const item = this.choiceLists[index]; // 当前元素
      if (isChecked) { // 选中则存入数据列表
        this.selectedLists.push(item);
      } else { // 取消选中从列表中移除
        let delIndex = this.selectedLists.findIndex(el => el.code === item.code);
        this.selectedLists.splice(delIndex, 1);
      }
      this.$store.choice = this.selectedLists;
      this.$emit('getData', this.selectedLists);
    },
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

