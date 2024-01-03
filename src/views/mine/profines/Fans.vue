<template>
  <div>
    <div class="container">
      <div class="item" v-for="item in list" :key="item.id">
        <div class="content">
          <user
            avatar-size="60"
            :avatar="item.avatar"
            :title="item.userName"
            :level="item.level"
            :tag-name="communityContent(item.community)?.text"
            :tag-color="communityContent(item.community)?.color"
            :tag-bg="communityContent(item.community)?.bgColor"
          />
          <div class="btn-wrapper">
            <van-button
              :type="(btnContent(item.follow).type as ButtonType)"
              size="small"
              plain
              class="btn"
              :icon="btnContent(item.follow).icon"
              @click="item.follow = !item.follow"
              >{{ btnContent(item.follow).text }}</van-button
            >
          </div>
        </div>
        <van-divider />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import api from '@/api'
import { communityContent } from '@/utils/format'
import { User } from '@/components'
import type { ButtonType } from 'vant'

const list = ref()
const btnContent = computed(() => {
  return (status: boolean) => {
    const obj = { text: '', type: '', icon: 'plus' }
    obj.text = status ? '关注' : '已关注'
    obj.type = status ? 'primary' : 'default'
    obj.icon = status ? 'plus' : 'exchange'
    return obj
  }
})

const getFans = async () => {
  const { code, data } = await api.MProfileFansApi()
  if (+code === 0) {
    list.value = data
  }
}

onMounted(() => {
  getFans()
})
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  margin-bottom: 15px;
  .content {
    width: 100%;
    display: flex;
    align-items: center;
    .btn-wrapper {
      flex-shrink: 0;
      .btn {
        width: 80px;
      }
    }
  }
}
</style>
