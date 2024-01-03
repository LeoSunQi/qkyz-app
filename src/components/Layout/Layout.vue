<template>
  <router-view />
  <MTabBar :list="tabbars" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MTabBar from './MTabBar.vue'

const tabbars = ref([
  { id: 0, name: '首页', icon: 'home-o', url: '/' },
  { id: 1, name: '行情榜', icon: 'bar-chart-o', url: '/quotes' },
  { id: 2, name: '评测榜', icon: 'todo-list-o', url: '/evaluation' },
  { id: 3, name: '藏经阁', icon: 'fire-o', url: '/attic' },
  { id: 4, name: '我的', icon: 'manager-o', url: '/mine' }
])
</script>