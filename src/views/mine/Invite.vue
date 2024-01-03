<template>
  <div>
    <van-swipe :loop="false" :width="300" :height="300">
      <van-swipe-item v-for="b in banners" :key="b">
        <van-image :src="b" class="base-image" />
      </van-swipe-item>
    </van-swipe>
    <div class="container">
      <div class="code-box">
        <div class="c-text">
          <div>我的邀请码</div>
          <div class="c-code">{{ invitationCode }}</div>
        </div>
        <van-button type="primary">复制</van-button>
      </div>
      <div class="content">
        <div class="c-title">邀请规则</div>
        <ul class="c-ul">
          <li v-for="(l, i) in contents" :key="l">{{ i + 1 }}.{{ l }}</li>
        </ul>
      </div>
      <van-button plain block type="primary" class="btn">分享海报</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { ref, onMounted } from 'vue'

const banners = ref()
const contents = ref()
const invitationCode = ref()

const getInfo = async () => {
  const { code, data } = await api.MMineBannerApi()
  if (+code === 0) {
    banners.value = data.image
    contents.value = data.contents
    invitationCode.value = data.invitationCode
  }
}

onMounted(() => {
  getInfo()
})
</script>

<style lang="scss" scoped>
.code-box {
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid $l-blue-6;
  border-radius: 10px;
  display: flex;
  align-items: center;
  .c-text {
    flex: 1;
    .c-code {
      font-size: 24px;
      font-weight: bold;
      margin-top: 6px;
    }
  }
}
.content {
  margin-top: 15px;
  .c-title {
    font-size: 16px;
    font-weight: bold;
    margin: 15px 0;
  }
  .c-ul {
    line-height: 1.8;
  }
}
.btn {
  margin-top: 15px;
}
</style>
