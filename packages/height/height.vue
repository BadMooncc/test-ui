<template>
  <div class="question-group question-group--height">
    <div class="question-group__label" :class="layout === 'column' ? 'column' : 'row'">身高: </div>
    <div class="question-group__content" :class="layout === 'column' ? 'column' : 'row'">
      <input v-if="isEdit" @input="changeHeight" v-model="datas" class="question-input">
      <span v-else>{{ datas }}</span>
      <span class="unit">cm</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'height',
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
      datas: '身高',
    }
  },
  methods: {
    changeHeight(val) {
      this.$emit('getData', this.datas);
    }
  },
}
</script>



