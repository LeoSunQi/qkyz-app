<template>
  <div>
    <van-tabs v-model:active="active" sticky animated>
      <van-tab v-for="t in tabs" :key="t.id" :title="t.title">
        <div class="container">
          <component :is="comps[t.id]" :key="t.id" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QPersons, QCircle, QTransaction, QNews } from './components' 

const active = ref(0)
const tabs = ref([
  { id: 0, title: '新秀榜' },
  { id: 1, title: '韭菜圈' },
  { id: 2, title: '交易预报' },
  { id: 3, title: '新闻榜' },
])

const comps = [QPersons, QCircle, QTransaction, QNews]
</script>

<style scoped lang="scss"></style>