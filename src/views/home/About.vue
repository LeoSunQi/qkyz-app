<template>
  <div class="container">
    <van-image :src="info?.image" class="base-image b-image" />
    <div class="text">{{ info?.content }}</div>
    <div class="com-wrapper">
      <div class="qc-title">联系我们</div>
      <van-image :src="info?.qc_code" class="qc-code-image" />
      <div class="qc-text">【扫一扫, 二维码】</div>
    </div>
    <ul class="com-wrapper c-ul">
      <li>微信：{{ info?.wx_code }}</li>
      <li>电话：{{ info?.phone }}</li>
      <li>商务合作：{{ info?.email }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import api from '@/api';
import { ref, onMounted } from 'vue'

const info = ref()

const getData = async () => {
  const { code, data } = await api.MCommonAboutApi()
  if (+code === 0) {
    info.value = data
  }
}

onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped>
.b-image {
  border-radius: 10px;
  overflow: hidden;
  height: 150px;
}
.text {
  padding: 15px 0;
  line-height: 1.8;
}
.c-ul {
  line-height: 1.8;
}
.com-wrapper {
  text-align: center;
  margin-top: 30px;
  .qc-title {
    font-size: 16px;
    font-weight: 600;
  }
  .qc-code-image {
    width: 150px;
    height: 150px;
    border-radius: 6px;
    overflow: hidden;
    margin: 10px 0;
  }
  .qc-text {
    font-size: 12px;
    color: $l-gray-6;
  }
}
</style>