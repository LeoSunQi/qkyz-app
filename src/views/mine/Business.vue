<template>
  <div class="container">
    <div class="images">
      <van-image :src="image" class="base-image" />
    </div>
    <div class="text-box">
      <ul class="t-ul">
        <li>说明</li>
        <li v-for="(t, i) in list" :key="t">{{ i+1 }}.{{ t }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { ref, onMounted } from 'vue'

const list = ref()
const image = ref()

const getDatas = async () => {
  const { code, data } = await api.MMineBusinessApi()
  if (+code === 0) {
    list.value = data.contents
    image.value = data.image
  }
}

onMounted(() => {
  getDatas()
})
</script>

<style scoped lang="scss">
.text-box {
  margin-top: 20px;
  .t-ul {
    line-height: 1.8;
  }
}
</style>
