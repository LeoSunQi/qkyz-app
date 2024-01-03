<template>
  <div>
    <div class="head-wrapper head-bg">
      <div class="h-item">
        <div class="h-num">{{ todayNum }}</div>
        <div class="h-text">今日日活</div>
      </div>
      <div class="h-item">
        <div class="h-num">{{ vipNum }}</div>
        <div class="h-text">累计会员</div>
      </div>
    </div>
    <div class="container">
      <div class="c-title">上榜新币</div>
      <div class="c-list">
        <van-row gutter="20" class="c-row">
          <van-col span="8">项目名称</van-col>
          <van-col span="8" class="c-text-content">上榜时间</van-col>
          <van-col span="8" class="c-text-end">阅读人数</van-col>
        </van-row>
        <van-row gutter="20" v-for="l in list" :key="l.id" class="col-even">
          <van-col span="8" class="item-col"
            ><span class="c-text-start">{{ l.name }}</span></van-col
          >
          <van-col span="8" class="item-col c-text-content">{{
            l.createTime
          }}</van-col>
          <van-col span="8" class="item-col"
            ><div class="c-text-end num-color">{{ formatUnit(l.reads) }}</div></van-col
          >
        </van-row>
      </div>
      <van-divider />
      <div class="c-title">评测榜</div>
      <div class="c-list">
        <div v-for="c in evaluations" :key="c.id" class="c-item">
          <div class="c-item-title">{{ c.title }}</div>
          <van-text-ellipsis
            rows="3"
            :content="c.content"
            expand-text="展开"
            collapse-text="收起"
            class="c-item-content"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { ref, onMounted } from 'vue'
import { formatUnit } from '@/utils/format'

const todayNum = ref(0)
const vipNum = ref(0)
const list = ref()
const evaluations = ref()

const getDatas = async () => {
  const { code, data } = await api.MHomeNetworkApi()
  if (+code === 0) {
    todayNum.value = data.todayNum
    vipNum.value = data.vipNum
    list.value = data.list
    evaluations.value = data.evaluations
  }
}

onMounted(() => {
  getDatas()
})
</script>

<style lang="scss" scoped>
.head-bg {
  background: linear-gradient(150deg, $l-indigo-5, $l-indigo-10);
}
.head-wrapper {
  padding: 20px 0;
  min-height: 140px;
  display: flex;
  align-items: center;
  .h-item {
    width: 50%;
    height: 100%;
    text-align: center;
    &:nth-child(1) {
      border-right: 1px solid $l-zinc-5;
    }
    .h-num {
      font-size: 30px;
      font-weight: bold;
      padding: 8px 0;
      color: $l-white;
    }
    .h-text {
      color: $l-zinc-3;
      font-size: 14px;
    }
  }
}

.c-title {
  padding: 15px 0;
  font-size: 20px;
  font-weight: bold;
  color: $l-indigo-5;
}

.c-list {
  width: 100%;
  box-sizing: border-box;
  .c-text-start {
    padding-left: 6px;
  }
  .c-text-content {
    text-align: center;
  }
  .c-text-end {
    text-align: end;
    padding-right: 6px;
  }
  .c-row {
    padding: 15px 0;
    font-weight: bold;
  }
  .item-col {
    font-size: 14px;
  }
  .num-color {
    color: $l-red-5;
    font-weight: bold;
  }
  .c-item {
    padding-bottom: 20px;
    .c-item-title {
      font-size: 16px;
      font-weight: bold;
      padding: 10px 0;
    }
    .c-item-content {
      font-size: 14px;
    }
  }
}
</style>
