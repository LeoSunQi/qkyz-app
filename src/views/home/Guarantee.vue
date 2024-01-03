<template>
  <div class="container">
    <van-search
      v-model="searchVal"
      placeholder="请输入搜索关键词"
      show-action
      clearable
      shape="round"
      @search="onSearch"
      @cancel="onCancel"
      @clear="onCancel"
    />
    <div class="search-box">
      <div class="s-wrapper" v-if="info">
        <user
          v-if="info"
          avatar-size="70"
          :avatar="info.avatar"
          :title="info.userName"
          :level="info.level"
          :tag-name="communityContent(info.community)?.text"
          :tag-color="communityContent(info.community)?.color"
          :tag-bg="communityContent(info.community)?.bgColor"
        />
      </div>
      <div v-else class="s-container">搜索区</div>
    </div>
    <van-row :gutter="20" class="s-row">
      <van-col span="12">
        <van-button type="primary" block>确认信息</van-button>
      </van-col>
      <van-col span="12">
        <van-button type="success" block>发起交易</van-button>
      </van-col>
    </van-row>
    <van-divider />
    <div class="list-title">交易记录</div>
    <div class="list">
      <van-tabs v-model:active="active" shrink sticky animated>
        <van-tab v-for="t in tabs" :key="t.id" :title="t.title">
          <refresh
            :on-fetch="() => api.MHomeGuaranteeApi({})"
            v-slot="slotProps"
          >
            <div
              v-for="(l, i) in slotProps.data.filter(
                item => item.type === active + 1
              )"
              :key="i"
            >
              <van-row :gutter="20" class="l-row">
                <van-col span="12">
                  <user
                    avatar-size="50"
                    :avatar="l.avatar"
                    :title="l.userName"
                    :level="l.level"
                  />
                </van-col>
                <van-col span="12" class="l-col">
                  <div
                    class="col-text"
                    :style="{ color: descContetn(l).color }"
                  >
                    {{ descContetn(l).text }}
                  </div>
                  <van-button
                    :type="(btnContent(l).type as ButtonType)"
                    size="small"
                    >{{ btnContent(l).text }}</van-button
                  >
                </van-col>
              </van-row>
            </div>
          </refresh>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { communityContent } from '@/utils/format'
import { User, Refresh } from '@/components'
import api from '@/api'
import type { ButtonType } from 'vant'

const searchVal = ref()
const info = ref<any>()
const active = ref(0)
const tabs = [
  { id: 0, title: '买入' },
  { id: 1, title: '卖出' },
]

const btnContent = computed(() => {
  return (item: any) => {
    let obj = { text: '确认放行', type: 'primary' }
    switch (+item.status) {
      case 1:
        obj.text = '确认放行'
        obj.type = 'primary'
        break
      case 2:
        obj.text = '确认收到'
        obj.type = 'warning'
        break
      case 3:
        obj.text = '已完成'
        obj.type = 'success'
        break
      default:
        obj.text = '已拒绝'
        obj.type = 'danger'
    }
    return obj
  }
})

const descContetn = computed(() => {
  return (item: any) => {
    let obj = { text: '', color: '' }
    switch (+item.paymentType) {
      case 1:
        obj.text = `已缴纳押金${item.paidNum}USDT`
        obj.color = '#2563eb'
        break
      case 2:
        obj.text = `未缴纳押金${item.paidNum}USDT`
        obj.color = '#2563eb'
        break
      case 3:
        obj.text = `已退回押金${item.refundNum}USDT`
        obj.color = '#27272a'
        break
      default:
        obj.text = ''
        obj.color = ''
    }
    return obj
  }
})

const onSearch = async () => {
  const { code, data } = await api.MHomeGuaranteeSearchApi()
  if (+code === 0) {
    info.value = data
  }
}

const onCancel = () => {
  info.value = null
}
</script>

<style scoped lang="scss">
.search-box {
  margin: 15px 0;
  background-color: $l-gray-2;
  width: 100%;
  min-height: 120px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  overflow: hidden;
  .s-wrapper {
    box-sizing: border-box;
    padding: 15px;
  }
  .s-container {
    width: 100%;
    text-align: center;
  }
  .s-row {
    margin-top: 20px;
  }
}
.list-title {
  padding: 15px 0;
  font-size: 18px;
  font-weight: bold;
}
.list {
  .l-row {
    padding: 15px 0;
    .l-col {
      text-align: end;
      .col-text {
        padding: 10px 0;
        font-size: 12px;
      }
    }
  }
}
</style>
