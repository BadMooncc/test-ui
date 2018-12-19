<template>
  <div class="question-group question-group--weight">
    <div class="question-group__label" :class="layout === 'column' ? 'column' : 'row'">体重: </div>
    <div class="question-group__content" :class="layout === 'column' ? 'column' : 'row'">
      <input v-if="isEdit" @input="changeWeight" v-model="datas" class="question-input">
      <span v-else>{{ datas }}</span>
      <span class="unit">kg</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'weight',
  props: {
    layout: {
      type: String,
      default: 'row'
    },
    isEdit: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      datas: '体重',
    }
  },
  methods: {
    changeWeight(val) {
      this.$emit('getData', this.datas);
    }
  },
}
</script>
<style lang="less">
.question-group--weight {

}
</style>


