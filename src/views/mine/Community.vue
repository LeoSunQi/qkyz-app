，
<template>
  <div>
    <van-tabs v-model:active="active" sticky animated @change="onTabChange">
      <van-tab v-for="item in tabs" :key="item.id" :title="item.title">
        <div class="container">
          <div class="item" v-for="c in newList" :key="c.id">
            <user
              :avatar="c.avatar"
              avatar-size="46"
              :title="`${c.name}交流群`"
            />
            <van-button
              type="primary"
              plain
              class="btn"
              size="small"
              @click="showPopup(c)"
              >查看</van-button
            >
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-popup
      v-model:show="show"
      position="right"
      closeable
      :style="{ width: '70%', height: '100%' }"
    >
      <div class="popup-container">
        <div class="p-title">{{ popupContent.name + '交流群' }}</div>
        <div class="p-desc">
          <div class="p-desc-title">群组简介</div>
          <div>{{ popupContent.content }}</div>
        </div>
        <div class="p-desc">
          <div class="p-desc-title">联系人</div>
          <div>{{ popupContent.userName }}</div>
        </div>
        <div class="p-desc">
          <div class="p-desc-title">联系方式</div>
          <div>{{ popupContent.phone }}</div>
        </div>
        <div class="p-desc">
          <div class="p-desc-title">二维码</div>
          <div>
            <van-image :src="popupContent.QcCode" width="160" height="160" />
            <div>扫一扫, 加入交流群</div>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { ref, onMounted } from 'vue'
import { User } from '@/components'

const active = ref(0)
const tabs = ref([
  { id: 0, title: '可加入群组' },
  { id: 1, title: '我的群组' },
])
const list = ref()
const newList = ref()
const show = ref(false)
const popupContent = ref()

const showPopup = (item: any) => {
  show.value = true
  popupContent.value = item
}

const onTabChange = () => {
  newList.value = list.value.filter(
    (item: any) => item.type === active.value + 1
  )
}

const getList = async () => {
  const { code, data } = await api.MMineCommunityApi()
  if (+code === 0) {
    list.value = data.list
    newList.value = list.value.filter(
      (item: any) => item.type === active.value + 1
    )
  }
}

onMounted(() => {
  getList()
})
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid $l-slate-1;
  .btn {
    flex-shrink: 0;
  }
}
</style>

<style lang="scss" scoped>
@import '@/styles/popup.scss';
</style>
