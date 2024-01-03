<template>
  <div class="container">
    <cell-tool
      v-for="t in tools"
      :key="t.id"
      :left-icon="t.icon"
      :title="t.title"
      :to="t.to"
      link
    />
    <van-button plain block class="btn" @click="store.logout()"
      >退出</van-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CellTool } from '@/components'
import useUserStroe from '@/store/s-user'

const store = useUserStroe()
const tools = ref([
  { id: 0, title: '帮助中心', icon: 'warning-o', to: '' },
  { id: 1, title: '修改密码', icon: 'shield-o', to: '/reset-pass' },
])
</script>

<style lang="scss" scoped>
.btn {
  margin-top: 20px;
}
</style>
