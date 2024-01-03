<template>
  <van-tabbar
    v-model="(active as string)"
    :active-color="activeColor"
    :inactive-color="inacticeColor"
    :border="border"
    @change="onChange"
  >
    <van-tabbar-item
      v-for="item in list"
      :key="item.id"
      :name="item.url"
      :icon="item.icon"
      :to="item.url"
      >{{ item.name }}</van-tabbar-item
    >
  </van-tabbar>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import useAppStore from '@/store/app'

defineProps({
  activeColor: {
    type: String,
    default: '#1989fa',
  },
  inacticeColor: {
    type: String,
    default: '#7d7e80',
  },
  border: {
    type: Boolean,
    default: true,
  },
  list: {
    type: Array as PropType<any[]>,
    default: () => [],
  }
})

const store = useAppStore()
const active = computed(() => store.activePath)
const onChange = (name: string) => {
  store.setActivePath(name)
}
</script>
