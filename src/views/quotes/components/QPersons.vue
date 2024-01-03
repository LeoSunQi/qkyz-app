<template>
  <div>
    <van-row :gutter="20" class="head-row">
      <van-col span="6">项目名称</van-col>
      <van-col span="8">上榜时间</van-col>
      <van-col span="6">阅读人数</van-col>
      <van-col span="4"></van-col>
    </van-row>
    <refresh :on-fetch="() => api.MQuotesPersonsApi({})" v-slot="slotProps">
      <div class="list">
        <van-row
          v-for="l in slotProps.data"
          :key="l.id"
          :gutter="20"
          class="l-row col-odd"
        >
          <van-col span="6" class="l-col">{{ l.name }}</van-col>
          <van-col span="8">{{ l.createTime }}</van-col>
          <van-col span="6" class="l-read">{{ formatUnit(l.readNum) }}</van-col>
          <van-col span="4" class="l-details"
            ><span @click="toDetails(l)">详情</span></van-col
          >
        </van-row>
      </div>
    </refresh>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { formatUnit } from '@/utils/format'
import { Refresh } from '@/components'
import { useRouter } from 'vue-router'

const router = useRouter()
const toDetails = (item: any) => {
  const obj = JSON.stringify(item)
  router.push({
    path: `/quotes/persons-details/${item.id}`,
    query: { obj },
  })
}
</script>

<style scoped lang="scss">
.head-row {
  padding: 15px 0;
  font-size: 12px;
  font-weight: bold;
}
.list {
  .l-row {
    font-size: 14px;
    .l-col {
      box-sizing: border-box;
      padding: 0 6px;
    }
    .l-read {
      font-weight: bold;
      color: $l-indigo-10;
    }
    .l-details {
      color: $l-blue-5;
    }
  }
}
</style>
