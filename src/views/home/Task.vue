<template>
  <div class="container">
    <refresh :on-fetch="() => api.MHomeTaskApi({})" v-slot="slotProps">
      <div class="h-row" v-for="l in slotProps.data" :key="l.id">
        <van-row :gutter="20">
          <van-col span="14">
            <div class="h-box">
              <div class="h-img">
                <van-image :src="l.image" />
              </div>
              <div class="h-content">
                <div class="h-c-title">{{ l.name }}</div>
                <div class="h-c-text">{{ l.text }}</div>
              </div>
            </div>
          </van-col>
          <van-col span="10">
            <div class="h-right">
              <div class="h-r-text h-r-blue">
                已兑换 <i>{{ l.exchangedNum }}</i>
              </div>
              <div class="h-r-text h-r-red">
                未兑换 <i>{{ l.unconvertedNum }}</i>
              </div>
            </div>
          </van-col>
        </van-row>
        <div class="h-footer">
          <span>{{ l.createTime }}</span>
          <van-tag :type="(setStatus(l.status).type as TagType)">{{
            setStatus(l.status).text
          }}</van-tag>
        </div>
        <van-divider />˝
      </div>
    </refresh>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { computed } from 'vue'
import type { TagType } from 'vant'
import { Refresh } from '@/components'

const setStatus = computed(() => {
  return (type: number) => {
    let obj = { text: '提交审核', type: 'primary' }
    switch (+type) {
      case 2:
        obj.text = '审核中'
        obj.type = 'warning'
        break
      case 3:
        obj.text = '已空投'
        obj.type = 'success'
        break
      case 4:
        obj.text = '已拒绝'
        obj.type = 'danger'
        break
      default:
        obj.text = '提交审核'
        obj.type = 'primary'
    }
    return obj
  }
})
</script>

<style scoped lang="scss">
.h-row {
  .h-box {
    display: flex;
    padding-bottom: 15px;
    .h-img {
      width: 60px;
      height: 60px;
      border-radius: 6px;
      overflow: hidden;
      margin-right: 10px;
    }
    .h-content {
      .h-c-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 8px;
      }
      .h-c-text {
        font-size: 14px;
        color: $l-gray-6;
      }
    }
  }
  .h-right {
    text-align: end;
    .h-r-text {
      font-size: 14px;
      padding: 4px 0;
      i {
        font-weight: bold;
      }
    }
    .h-r-blue {
      color: $l-blue-5;
    }
    .h-r-red {
      color: $l-red-5;
    }
  }
  .h-footer {
    font-size: 12px;
    color: $l-gray-6;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
