<template>
  <div>
    <div class="grid-bg">
      <van-grid :column-num="3">
        <van-grid-item v-for="item in grid" :key="item.id">
          <div class="nums">{{ item.num }}</div>
          <div class="text">{{ item.text }}</div>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="container">
      <van-sticky>
        <van-row gutter="20" class="row-header">
          <van-col v-for="t in coltitles" :key="t.text" :span="t.span">
            <div class="col-title" :class="unitClass(t.text)">{{ t.text }}</div>
          </van-col>
        </van-row>
      </van-sticky>
      <van-row gutter="20" v-for="item in list" :key="item.id" class="row-item col-even">
        <van-col span="6">
          <div class="col-item">
            <van-image :src="item.avatar" round width="30" />
          </div>
        </van-col>
        <van-col span="6"
          ><div class="col-item">{{ item.nickName }}</div></van-col
        >
        <van-col span="6"
          ><div
            class="col-item"
            :style="{ color: setAuthContent(item.isAuth).color }"
          >
            {{ setAuthContent(item.isAuth).text }}
          </div></van-col
        >
        <van-col span="6"
          ><div class="col-item bonus">{{ item.bonus }}</div></van-col
        >
      </van-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { ref, onMounted, computed } from 'vue'

const grid = ref([
  { id: 0, text: '邀请人数', num: 0 },
  { id: 1, text: '会员人数', num: 0 },
  { id: 2, text: '邀请奖励', num: 0 },
])
const list = ref()
const coltitles = ref([
  { span: 6, text: '头像' },
  { span: 6, text: '昵称' },
  { span: 6, text: '是否实名' },
  { span: 6, text: '获得奖励' },
])

const unitClass = computed(() => {
  return (text: string) => {
    return text === '获得奖励' ? 'unit' : ''
  }
})

const setAuthContent = computed(() => {
  return (isAuth: boolean) => {
    const obj = { text: '已实名', color: '#07c160' }
    if (!isAuth) {
      obj.text = '未实名'
      obj.color = '#ee0a24'
    }
    return obj
  }
})

const getTeam = async () => {
  const { code, data } = await api.MMineTeamApi()
  if (+code === 0) {
    list.value = data.list
    grid.value[0].num = data.invitedNum
    grid.value[1].num = data.vipNum
    grid.value[2].num = data.bonus
  }
}

onMounted(() => {
  getTeam()
})
</script>

<style lang="scss" scoped>
.grid-bg {
  padding: 15px 0;
  background-color: $l-white;
  .nums {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }
  .text {
    font-size: 12px;
  }
}
.row-header {
  padding: 15px 0;
  background: $l-white;
  .col-title {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
  }
  .unit {
    &::after {
      content: '(USDT)';
      font-size: 80%;
      font-weight: 400;
    }
  }
}

.row-item {
  display: flex;
  align-items: center;
  .col-item {
    font-size: 14px;
    text-align: center;
  }
  .bonus {
    color: $l-blue-9;
  }
}
</style>
