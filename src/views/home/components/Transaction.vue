<template>
  <div class="t-wrapper" v-show="show">
    <van-row :gutter="20" class="t-row">
      <van-col span="8">交易所名称</van-col>
      <van-col span="10">网址</van-col>
      <van-col span="6">是否可用</van-col>
    </van-row>
    <van-row :gutter="20" v-for="t in list" :key="t.id" class="t-row-1">
      <van-col span="8" class="t-col">{{ t.name }}</van-col>
      <van-col span="10" class="t-col">{{ t.url }}</van-col>
      <van-col
        span="6"
        class="t-col"
        :style="{ color: useText(t.isUse).color }"
        >{{ useText(t.isUse).text }}</van-col
      >
    </van-row>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue';

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  list: {
    type: Array as PropType<any[]>,
    default: () => [],
  }
})

const useText = computed(() => {
  return (isUse: boolean) => {
    let obj = { text: '可用', color: '#1e3a8a' }
    if (!isUse) {
      obj = { text: '不可用', color: '#ef4444' }
    } else {
      obj = { text: '可用', color: '#1e3a8a' }
    }
    return obj
  }
})
</script>

<style scoped lang="scss">
.t-wrapper {
  .t-row {
    padding: 10px 0;
    font-weight: bold;
  }
  .t-row-1 {
    padding: 6px 0;
    font-size: 14px;
    .t-col {
      padding: 6px 0;
      word-wrap: break-word;
      overflow: hidden;
    }
  }
}
</style>
