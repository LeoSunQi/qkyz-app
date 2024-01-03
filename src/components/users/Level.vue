<template>
  <div class="level-wrapper" :style="levelStyle">
    <span class="l-span">{{ title }}</span>
    <span class="r-span" @click="handleClick"
      >规则<van-icon name="arrow"
    /></span>
  </div>
</template>

<script setup lang="ts">
import { StyleValue, computed } from 'vue'
import { showDialog } from 'vant'

const props = defineProps({
  bg: {
    type: String,
    default: 'linear-gradient(45deg, #00b4ff, #81d8ff)',
  },
  color: {
    type: String,
    default: '#000',
  },
  title: {
    type: String,
    default: '用户等级：铂金社区长',
  },
  messages: {
    type: String,
    default: '升级社区长，可享受更多权益',
  }
})

const emit = defineEmits(['onClick'])

const handleClick = () => {
  emit('onClick')
  showDialog({
    message: props.messages,
  })
}

const levelStyle = computed(() => {
  const style: StyleValue = {}
  style.background = props.bg
  style.color = props.color
  return style
})
</script>

<style scoped lang="scss">
.level-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  min-height: 56px;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 14px;
  .l-span {
    flex: 2;
    white-space: nowrap;
  }
  .r-span {
    flex: 1;
    text-align: end;
  }
}
</style>
