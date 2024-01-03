<template>
  <div class="container">
    <refresh :on-fetch="() => api.MCommonMessageApi({})" v-slot="slotProps">
      <div
        v-for="item in slotProps.data"
        :key="item.id"
        class="c-list"
        :style="{ color: item.isRead ? '' : '#969799' }"
      >
        <van-badge
          :dot="item.isRead"
          position="top-left"
          :offset="[-10, 12]"
          color="#3b82f6"
          :style="{ marginLeft: item.isRead ? '15px' : '' }"
        >
          <div class="c-title">{{ item.title }}</div>
        </van-badge>
        <div class="c-content">{{ item.content }}</div>
        <div class="c-time">{{ item.createTime }}</div>
      </div>
    </refresh>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { Refresh } from '@/components'
</script>

<style lang="scss" scoped>
.c-list {
  box-sizing: border-box;
  padding: 15px 0;
  .c-title {
    font-size: 18px;
    font-weight: 600;
    min-height: 40px;
  }
  .c-time {
    font-size: 14px;
    color: #999;
    padding: 10px 0;
  }
}
</style>
