<template>
  <van-pull-refresh v-model="refresh" @refresh="onRefresh(() => onFetch(), data)">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      :finished-text="finishedText"
      @load="onLoad(() => onFetch(), data)"
    >
      <slot :data="list" />
    </van-list>
  </van-pull-refresh>
</template>

<script setup lang="ts">
import { useRefresh } from '@/hooks'
import { IResultIO } from '@/typings';

const { onRefresh, onLoad, refresh, loading, finished, finishedText, list } =
  useRefresh()

defineProps({
  onFetch: {
    type: Function,
    default: () => Promise<IResultIO>,
    required: true,
  },
  data: {
    type: Object,
    default: () => ({}),
  },
})
</script>
