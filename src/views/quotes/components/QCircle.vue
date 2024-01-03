<template>
  <div>
    <refresh :on-fetch="() => api.MQuotesCirclesApi({})" v-slot="slotProps">
      <div v-for="l in slotProps.data" :key="l.id">
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
          <div class="l-text">
            <van-text-ellipsis
              rows="3"
              :content="l.content"
              expand-text="展开"
              collapse-text="收起"
            />
          </div>
          <div class="l-img-box">
            <van-row :gutter="20">
              <van-col span="8" v-for="m in l.images" :key="m.id">
                <div class="l-item-img">
                  <van-image :src="m.url" class="base-image" />
                </div>
              </van-col>
            </van-row>
          </div>
          <div class="l-footer">
            <van-row :gutter="20">
              <van-col span="8">
                <div class="l-f-item l-praise">
                  <van-icon name="good-job" />
                  <span>点赞 {{ l.praiseNum }}</span>
                </div>
              </van-col>
              <van-col span="8">
                <div class="l-f-item l-comment">
                  <van-icon name="chat" />
                  <span>评论 {{ l.commentNum }}</span>
                </div>
              </van-col>
            </van-row>
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
</script>

<style scoped lang="scss">
.l-content {
  padding: 20px 0;
  .l-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .l-text {
    font-size: 14px;
  }
  .l-img-box {
    margin-top: 20px;
    width: 100%;
    .l-item-img {
      width: 100px;
      height: 100px;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 15px;
    }
  }
  .l-footer {
    padding: 15px 0;
    .l-f-item {
      span {
        margin-left: 6px;
      }
    }
    .l-praise {
      color: $l-sky-5;
    }
    .l-comment {
      color: $l-emerald-5;
    }
  }
}
</style>
