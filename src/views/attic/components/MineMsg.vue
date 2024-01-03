<template>
  <div>
    <refresh :on-fetch="() => api.MAtticInfosApi({})" v-slot="slotProps">
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
          <div class="elc-title">
            <span>{{ l.title }}</span>
            <van-tag
              plain
              :type="(publishTypeContent(l.publish_type).type as TagType)"
              class="elc-tag"
              >{{ publishTypeContent(l.publish_type).text }}</van-tag
            >
          </div>
          <div class="elc-text">{{ l.content }}</div>
          <div class="elc-footer">
            <span>{{ l.createTime }}</span>
            <span>{{ typeText(l.type) }}</span>
          </div>
          <van-row :gutter="20" v-show="l.publish_type !== 3" class="clc-row">
            <van-col span="8">
              <span
                v-show="l.publish_type === 2"
                class="usdt-price elcr-price"
                >{{ l.price }}</span
              >
            </van-col>
            <van-col span="16" class="elcr-clo">
              <span
                v-show="l.publish_type === 1"
                :style="{ color: statusContent(l.status).color }"
                >{{ statusContent(l.status).text }}</span
              >
              <span v-show="l.publish_type === 2" class="elcr-text"
                ><i class="usdt-price">{{ l.total_price }}</i> 
                ({{ l.pay_num }}人购买)
              </span>
            </van-col>
          </van-row>
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
import { TagType } from 'vant'

const { typeText, publishTypeContent, statusContent } = useAttic()
</script>

<style scoped lang="scss">
@import '@/styles/evaluation-list.scss';

.elc-tag {
  margin-left: 10px;
}

.clc-row {
  padding: 10px 0;
  font-weight: bold;
  font-size: 14px;
}
.elcr-price {
  color: $l-red-5;
}
.elcr-clo {
  text-align: end;
}
.elcr-text {
  color: $l-blue-5;
}
</style>
