<template>
  <div class="pages">
    <van-search
      placeholder="请输入搜索关键词"
      show-action
      clearable
      shape="round"
      background="#3b82f6"
      @focus="onFocus"
    >
      <template #action>
        <div class="search-icon" @click="$router.push('/messages')">
          <van-icon name="smile-comment-o" size="30" color="#fff" />
        </div>
      </template>
    </van-search>
    <div>
      <van-swipe
        style="height: 150px"
        vertical
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item v-for="item in banner" :key="item.id">
          <van-image :src="item.image" class="base-image" />
        </van-swipe-item>
      </van-swipe>
      <van-notice-bar
        left-icon="volume-o"
        :scrollable="false"
        color="#1989fa"
        background="#ecf9ff"
      >
        <van-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :touchable="false"
          :show-indicators="false"
        >
          <van-swipe-item v-for="n in notices" :key="n.id">{{
            n.content
          }}</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
      <van-grid :gutter="10" :border="false">
        <van-grid-item
          v-for="m in menus"
          :key="m.id"
          :icon="m.icon"
          :text="m.title"
          :to="m.path"
        />
      </van-grid>
    </div>
    <div class="container">
      <div class="img-wrapper">
        <van-image :src="image" class="base-image" />
      </div>
    </div>
    <div class="list">
      <van-tabs v-model:active="active" sticky animated @change="onTabChange">
        <van-tab v-for="t in tabs" :key="t.id" :title="t.title">
          <refresh :on-fetch="() => api.MHomeHotApi({})" v-slot="slotProps">
            <div
              v-for="l, i in list(slotProps.data)"
              :key="i"
              class="container"
            >
              <user
                avatar-size="70"
                :avatar="l.avatar"
                :title="l.userName"
                :level="l.level"
                :tag-name="communityContent(l.community)?.text"
                :tag-color="communityContent(l.community)?.color"
                :tag-bg="communityContent(l.community)?.bgColor"
              />
              <div class="l-content">
                <div class="l-title">{{ l.title }}</div>
                <van-text-ellipsis
                  rows="3"
                  :content="l.content"
                  expand-text="展开"
                  collapse-text="收起"
                  class="l-text"
                />
              </div>
            </div>
          </refresh>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api'
import { menus } from './menuData'
import { Refresh, User } from '@/components'
import { communityContent } from '@/utils/format'

const router = useRouter()
const banner = ref()
const notices = ref()
const image = ref()
const active = ref(0)
const tabs = ref([
  { id: 0, title: '评测榜' },
  { id: 1, title: '小道信息' },
  { id: 2, title: '韭菜圈' },
  { id: 3, title: '邀请榜' },
])

const list = computed(() => {
  return (arr: any[]) => {
    let list = []
    list = arr.filter(item => item.type === active.value + 1)
    return list
  }
})

const onTabChange = () => {}

const onFocus = () => {
  router.push('/search')
}

const getImages = async () => {
  const { code, data } = await api.MCommonBannerApi()
  if (+code === 0) {
    image.value = data.image
  }
}

const getNotices = async () => {
  const { code, data } = await api.MCommonNoticesApi()
  if (+code === 0) {
    notices.value = data
  }
}

const getBanner = async () => {
  const { code, data } = await api.MCommonSwipeBanner()
  if (+code === 0) {
    banner.value = data
    getNotices()
    getImages()
  }
}

onMounted(() => {
  getBanner()
})
</script>

<style scoped lang="scss">
.search-icon {
  display: flex;
  align-items: center;
}
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
.img-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.l-content {
  margin-top: 15px;
  .l-title {
    font-size: 16px;
    font-weight: 600;
    padding: 6px 0;
  }
  .l-text {
    font-size: 12px;
    color: $l-gray-8;
  }
}
</style>
