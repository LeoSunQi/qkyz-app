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
import { EPlaza, EStatus } from './components' 

const active = ref(0)
const tabs = ref([
  { id: 0, title: '评测广场' },
  { id: 1, title: '我的评测' },
])

const comps = [EPlaza, EStatus]
</script>

<style scoped lang="scss"></style>