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
            <span class="status" :style="{ color: setStatus(c).color }">{{
              setStatus(c).text
            }}</span>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import api from '@/api'

const active = ref(0)
const tabs = ref([
  { id: 0, title: '我的贴子' },
  { id: 1, title: '我的线索' },
  { id: 2, title: '评测悬赏' },
])
const list = ref()
const newList = ref()

const setStatus = computed(() => {
  return (o: any) => {
    const obj = { text: '', color: '' }
    if (o.type === 1) {
      if (o.status === 1) {
        obj.text = '已回复'
        obj.color = '#1e3a8a'
      } else {
        obj.text = ''
        obj.color = ''
      }
    } else if (o.type === 2) {
      if (o.status === 1) {
        obj.text = '待审核'
        obj.color = '#f97316'
      } else if (o.status === 2) {
        obj.text = '已审核'
        obj.color = '#64748b'
      } else if (o.status === 3) {
        obj.text = '审核中'
        obj.color = '#ef4444'
      } else {
        obj.text = ''
        obj.color = ''
      }
    } else {
      if (o.status === 1) {
        obj.text = '待评测'
        obj.color = '#f97316'
      } else if (o.status === 2) {
        obj.text = '已评测'
        obj.color = '#64748b'
      } else if (o.status === 3) {
        obj.text = '审核中'
        obj.color = '#ef4444'
      } else {
        obj.text = ''
        obj.color = ''
      }
    }
    return obj
  }
})

const onTabChange = () => {
  newList.value = list.value.filter(
    (item: any) => item.type === active.value + 1
  )
}

const getLists = async () => {
  const { code, data } = await api.MProfilePulishApi()
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
      color: $l-red-5;
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
