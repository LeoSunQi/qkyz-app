<template>
  <div>
    <refresh :on-fetch="() => api.MAtticListApi({})" v-slot="slotProps">
      <div v-for="l in slotProps.data" :key="l.id" class="e-list">
        <user
          avatar-size="60"
          :avatar="l.avatar"
          :title="l.userName"
          :level="l.level"
          :tag-name="communityContent(l.community)?.text"
          :tag-color="communityContent(l.community)?.color"
          :tag-bg="communityContent(l.community)?.bgColor"
        />
        <div class="el-content">
          <div class="elc-title">{{ l.title }}</div>
          <div class="elc-text" :style="overlay(l.ispay)">{{ l.content }}</div>
          <div class="elc-footer flex-justify">
            <div>
              <span>{{ l.createTime }}</span>
              <span>{{ typeText(l.type) }}</span>
            </div>
            <div class="elc-btns" v-show="l.ispay">
              <van-button
                size="small"
                type="primary"
                plain
                @click="handlePay(l)"
              >
                购买 (<i class="usdt-price elc-price">{{ l.price }}</i>)
              </van-button>
            </div>
          </div>
        </div>
        <van-divider />
      </div>
    </refresh>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { Refresh, User } from '@/components'
import { communityContent } from '@/utils/format'
import { useAttic } from '../composable'

const { overlay, typeText, handlePay } = useAttic()
</script>

<style scoped lang="scss">
@import '@/styles/evaluation-list.scss';

.elc-price {
  font-weight: bold;
}

.flex-justify {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}
</style>
