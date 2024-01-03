<template>
  <div>
    <van-tabs v-model:active="active" sticky animated @change="onTabChange">
      <van-tab v-for="item in tabs" :key="item.id" :title="item.title">
        <div class="container" v-for="c in newList" :key="c.id">
          <div class="title">{{ c.title }}</div>
          <div class="content">{{ c.content }}</div>
          <div class="footer">
            <span
              >价值: <i class="price">{{ c.price }}</i></span
            >
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '@/api'

const active = ref(0)
const tabs = ref([
  { id: 0, title: '已购买' },
  { id: 1, title: '已发布' }
])
const list = ref()
const newList = ref()

const onTabChange = () => {
  newList.value = list.value.filter(
    (item: any) => item.type === active.value + 1
  )
}

const getLists = async () => {
  const { code, data } = await api.MProfileClueApi()
  if (+code === 0) {
    list.value = data
    newList.value = list.value.filter(
      (item: any) => item.type === active.value + 1
    )
  }
}

onMounted(() => {
  getLists()
})
</script>

<style lang="scss" scoped>
.title {
  font-size: 18px;
}
.content {
  font-size: 12px;
  box-sizing: border-box;
  padding: 10px 0;
}
.footer {
  display: flex;
  align-items: center;
  font-size: 14px;
  span {
    flex: 1;
    i {
      color: $l-red-6;
      font-weight: bold;
      &::after {
        content: ' USDT';
        font-size: 90%;
        font-weight: 400;
      }
    }
  }
  .status {
    text-align: end;
  }
}
</style>