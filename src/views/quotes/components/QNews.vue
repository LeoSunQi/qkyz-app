<template>
  <div>
    <refresh :on-fetch="() => api.MQuotesNewsApi({})" v-slot="slotProps">
      <div>
        <van-steps direction="vertical" :active="0">
          <van-step v-for="l in slotProps.data" :key="l.id">
            <div class="l-title">{{ l.title }}</div>
            <div class="l-image">
              <van-image :src="l.image" class="base-image" />
            </div>
            <div class="l-content">
              <van-text-ellipsis
                rows="3"
                :content="l.content"
                expand-text="展开"
                collapse-text="收起"
              />
            </div>
            <van-divider>{{ l.createTime }}</van-divider>
          </van-step>
        </van-steps>
      </div>
    </refresh>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { Refresh } from '@/components'
</script>

<style lang="scss" scoped>
.l-title {
  font-size: 20px;
  font-weight: bold;
}
.l-image {
  width: 100%;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
  margin: 15px 0;
}
</style>
