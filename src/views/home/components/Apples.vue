<template>
  <div v-show="show">
    <van-row :gutter="20" v-for="l in list" :key="l.id">
      <van-col span="8" class="a-col">{{ l.email }}</van-col>
      <van-col span="6" class="a-col"
        ><van-button
          type="primary"
          size="mini"
          block
          @click="handleCopy(l.email, $event)"
          >复制</van-button
        ></van-col
      >
      <van-col span="4" class="a-col">{{ l.code }}</van-col>
      <van-col span="6" class="a-col">
        <van-button
          type="primary"
          size="mini"
          block
          @click="handleCopy(l.code, $event)"
          >复制</van-button
        >
      </van-col>
    </van-row>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { useClipboard } from '@/hooks'

const { handleCopy } = useClipboard()

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  list: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
})
</script>

<style scoped lang="scss">
.a-col {
  font-size: 12px;
  padding: 10px 0;
  word-wrap: break-word;
  overflow: hidden;
}
</style>
