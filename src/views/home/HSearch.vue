<template>
  <div>
    <van-search
      v-model="searchVal"
      placeholder="请输入搜索关键词"
      show-action
      clearable
      shape="round"
      background="#dcdee0"
      @search="onSearch"
      @cancel="onCancel"
    />
    <div class="history container" v-show="!searchVal">
      <div class="h-wrapper">
        <div class="title">历史</div>
        <div class="del-icon" @click="onDelTags">
          <van-icon name="delete-o" />
        </div>
      </div>
      <div class="list-wrapper">
        <div
          class="l-item"
          v-for="h in historys"
          :key="h.id"
          @click="onSearch(h.title)"
        >
          <van-tag type="primary" size="large" plain round closeable>{{
            h.title
          }}</van-tag>
        </div>
      </div>
    </div>
    <div class="s-list container" v-show="searchVal">
      <div class="s-item" v-for="item in list" :key="item.id">
        <div class="s-image">
          <van-image :src="item.image" />
        </div>
        <div class="s-content">
          <div class="s-title">{{ item.title }}</div>
          <div class="s-text">{{ item.content }}</div>
        </div>
        <div class="s-status">{{ item.type }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { showConfirmDialog, showToast } from 'vant'
import api from '@/api'

const searchVal = ref()
const historys = ref()
const list = ref()

const onDelTags = () => {
  showConfirmDialog({
    title: '删除',
    message: '确定要删除历史记录吗？',
  })
    .then(() => {
      historys.value = []
    })
    .catch(() => {
      showToast('您已取消操作')
    })
}

const onSearch = (val: string) => {
  searchVal.value = val
  list.value = []
  getSearchContent(val)
}

const onCancel = () => {
  searchVal.value = ''
  list.value = []
}

const getSearchContent = async (val: string) => {
  const { code, data } = await api.MCommonSearchApi({ val })
  if (+code === 0) {
    list.value = data
  }
}

const getHistoryData = async () => {
  const { code, data } = await api.MCommonHistorysApi()
  if (+code === 0) {
    historys.value = data
  }
}

onMounted(() => {
  getHistoryData()
})
</script>

<style scoped lang="scss">
.history {
  .h-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    font-weight: 600;
    .title {
      flex: 1;
      font-size: 18px;
    }
    .del-icon {
      box-sizing: border-box;
      padding-left: 15px;
    }
  }
  .list-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .l-item {
      box-sizing: border-box;
      padding: 10px;
      flex-shrink: 0;
    }
  }
}
.s-list {
  .s-item {
    display: flex;
    margin-bottom: 20px;
    .s-image {
      flex-shrink: 0;
      width: 70px;
      height: 70px;
      border-radius: 10px;
      overflow: hidden;
    }
    .s-content {
      flex: 2;
      box-sizing: border-box;
      padding: 0 10px;
      .s-title {
        min-height: 30px;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}
</style>
