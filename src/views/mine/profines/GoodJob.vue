<template>
  <div>
    <van-tabs v-model:active="active" sticky animated @change="onTabChange">
      <van-tab v-for="item in tabs" :key="item.id" :title="item.title">
        <div class="container" v-for="item in newList" :key="item.id">
          <user
            :avatar="item.avatar"
            :title="item.nickName"
            :level="item.level"
            :tag-name="communityContent(item.community)?.text"
            :tag-color="communityContent(item.community)?.color"
            :tag-bg="communityContent(item.community)?.bgColor"
          />
          <van-divider />
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
          <div class="footer" v-show="active === 1">
            <span
              ><van-icon name="good-job-o" /><i class="price">{{
                item.likesNum
              }}</i></span
            >
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { User } from '@/components'
import api from '@/api'
import { communityContent } from '@/utils/format'

const active = ref(0)
const tabs = ref([
  { id: 0, title: '我的点赞' },
  { id: 1, title: '收到点赞' },
])
const list = ref()
const newList = ref()

const onTabChange = () => {
  newList.value = list.value.filter(
    (item: any) => item.type === active.value + 1
  )
}

const getGoodJob = async () => {
  const { code, data } = await api.MProfileGoodJobApi()
  if (+code === 0) {
    list.value = data
    newList.value = list.value.filter(
      (item: any) => item.type === active.value + 1
    )
  }
}

onMounted(() => {
  getGoodJob()
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
      color: $l-blue-6;
      font-weight: bold;
      padding-left: 6px;
    }
  }
  .status {
    text-align: end;
  }
}
</style>
