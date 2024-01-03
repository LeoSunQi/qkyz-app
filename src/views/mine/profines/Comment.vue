<template>
  <div class="container">
    <div v-for="item in list" :key="item.id" class="wrapper">
      <user
        :avatar="item.avatar"
        :title="item.nickName"
        :level="item.level"
        :tag-name="communityContent(item.community)?.text"
        :tag-color="communityContent(item.community)?.color"
        :tag-bg="communityContent(item.community)?.bgColor"
      />
      <van-divider />
      <div class="header">
        <div class="title">{{ item.title }}</div>
        <van-text-ellipsis
          rows="3"
          :content="item.content"
          expand-text="展开"
          collapse-text="收起"
        />
      </div>
      <div class="content container" v-show="item.list.length > 0">
        <div v-for="child in item.list.slice(0, 3)" :key="child.id">
          <span class="line-clamp-3 c-span">
            <i>{{ setReplier(child) }}</i
            ><em v-show="child.reply">@我：</em>
            {{ child.content }}
          </span>
        </div>
        <div class="total" @click="showPopup(item.list)">
          共 {{ item.list.length }} 条 <van-icon name="arrow" />
        </div>
      </div>
      <van-divider />
    </div>
    <van-popup v-model:show="show" position="bottom" round closeable>
      <div class="container p-container">
        <div class="p-title">聊天记录</div>
        <div class="p-list">
          <div v-for="item in popupContent" :key="item.id" class="p-item">
            <van-divider>{{ item.createTime }}</van-divider>
            <span class="p-span">
              <i>{{ setReplier(item) }}</i
              ><em v-show="item.reply">@我：</em>
              {{ item.content }}
            </span>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { ref, onMounted, computed } from 'vue'
import { communityContent } from '@/utils/format'
import { User } from '@/components'

const list = ref()
const show = ref(false)
const popupContent = ref()

const showPopup = (content: any[]) => {
  show.value = true
  popupContent.value = content
}

const setReplier = computed(() => {
  return (item: any) => {
    return item.reply ? `${item.replier}回复` : '我：'
  }
})

const getCommentList = async () => {
  const { code, data } = await api.MProfileCommentApi()
  if (+code === 0) {
    list.value = data
  }
}

onMounted(() => {
  getCommentList()
})
</script>

<style scoped lang="scss">
.wrapper {
  padding-bottom: 15px;
  .header {
    margin: 15px 0;
    .title {
      margin: 15px 0;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .content {
    background-color: $l-gray-3;
    font-size: 12px;
    border-radius: 10px;
    .c-span {
      width: 100%;
      margin-bottom: 10px;
      em {
        color: $l-blue-6;
      }
    }
    .total {
      color: $l-blue-6;
      font-weight: bold;
    }
  }
}
.p-container {
  max-height: 80vh;
  .p-title {
    padding-bottom: 20px;
  }
  .p-list {
    box-sizing: border-box;
    padding-bottom: 20px;
    max-height: 70vh;
    line-height: 1.8;
    overflow: hidden;
    overflow-y: auto;
    .p-item {
      .p-span {
        width: 100%;
        i {
          font-weight: bold;
        }
        em {
          color: $l-blue-6;
        }
      }
    }
  }
}
</style>
