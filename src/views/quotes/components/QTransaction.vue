<template>
  <div>
    <refresh :on-fetch="() => api.MQuotesTransactionApi({})" v-slot="slotProps">
      <div class="list">
        <van-steps direction="vertical" :active="0">
          <van-step v-for="l in slotProps.data" :key="l.id">
            <van-row :gutter="20">
              <van-col span="12" class="l-col">{{ l.name }}</van-col>
              <van-col span="12">{{ l.websiteName }}</van-col>
            </van-row>
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

<style scoped lang="scss">
.list {
  .l-col {
    font-weight: bold;
  }
}
</style>
