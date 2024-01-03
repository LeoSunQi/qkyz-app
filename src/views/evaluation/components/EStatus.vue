<template>
  <div>
    <refresh :on-fetch="() => api.MEvaluationStatusApi({})" v-slot="slotProps">
      <div v-for="l in slotProps.data" :key="l.id" class="list">
        <user
          avatar-size="60"
          :avatar="l.avatar"
          :title="l.userName"
          :level="l.level"
          :tag-name="communityContent(l.community)?.text"
          :tag-color="communityContent(l.community)?.color"
          :tag-bg="communityContent(l.community)?.bgColor"
        />
        <div class="l-content">
          <div class="lc-title">
            <span>{{ l.title }}</span>
            <van-tag :type="(stContent(l.type).type as TagType)" plain>{{
              stContent(l.type).text
            }}</van-tag>
          </div>
          <div class="lc-text">{{ l.content }}</div>
          <div class="lc-time">
            {{ l.createTime }}
            <span>{{ evaluationText(l.evaluationType) }}</span>
          </div>
        </div>
        <div class="l-footer">
          <div class="lf-item">
            {{ benefitText(l) }}
            <span class="lfi-span lfi-price">{{ l.rewardMoney }}</span>
            <span v-show="l.type === 3" class="lfi-span"
              >（{{ l.lockNum }} 人解锁）</span
            >
          </div>
          <div
            v-show="l.type === 1"
            class="lf-item"
            :style="{ color: statusContent(l).color }"
          >
            {{ statusContent(l).text }}
          </div>
        </div>
        <van-divider />
      </div>
    </refresh>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { communityContent } from '@/utils/format'
import { Refresh, User } from '@/components'
import { TagType } from 'vant'
import { useEvaluation } from '../composable'

const { evaluationText, stContent, statusContent, benefitText } =
  useEvaluation()
</script>

<style scoped lang="scss">
.list {
  .l-content {
    .lc-title {
      margin-top: 10px;
      padding: 10px 0;
      font-size: 16px;
      font-weight: 600;
      span {
        margin-right: 10px;
      }
    }
    .lc-text {
      font-size: 12px;
    }
    .lc-time {
      font-size: 12px;
      padding: 4px 0;
      color: $l-gray-7;
      span {
        margin-left: 10px;
      }
    }
  }
  .l-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    .lf-item {
      font-size: 14px;
      .lfi-span {
        font-weight: bold;
        color: $l-red-5;
      }
      .lfi-price {
        &::after {
          content: ' USTD';
          font-size: 85%;
        }
      }
    }
  }
}
</style>
../composable/use-evaluation