<template>
  <div>
    <van-tabs v-model:active="active" sticky animated>
      <van-tab v-for="item in tabs" :key="item.id" :title="item.title">
        <div class="container">
          <Transaction :show="active === 0" :list="transactions" />
          <Contracts :show="active === 1" :list="contracts" />
          <Apples :show="active === 2" :list="appleIds" />
          <Tools :show="active === 3" :list="tools" />
          <Tools :show="active === 4" :list="vips" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { ref, onMounted } from 'vue'
import { Transaction, Contracts, Apples, Tools } from './components'

const active = ref(0)
const tabs = ref([
  { id: 0, title: '交易记录' },
  { id: 1, title: '合约' },
  { id: 2, title: '苹果ID' },
  { id: 3, title: '分身工具' },
  { id: 4, title: 'VIP' },
])
const transactions = ref()
const contracts = ref()
const appleIds = ref()
const tools = ref()
const vips = ref()

const getDatas = async () => {
  const { code, data } = await api.MHomeToolApi()
  if (+code === 0) {
    transactions.value = data.transactions
    contracts.value = data.contracts
    appleIds.value = data.appleIds
    tools.value = data.tools
    vips.value = data.vips
  }
}

onMounted(() => {
  getDatas()
})
</script>

<style scoped lang="scss"></style>
