<template>
  <div class="container">
    <div class="head-wrapper">
      <van-row :gutter="20">
        <van-col span="12">
          <user avatar-size="60" :avatar="obj.avatar" :title="obj.name" />
        </van-col>
        <van-col span="12" class="h-col">
          <van-rate v-model="obj.rateNum" color="#ffd21e" />
        </van-col>
      </van-row>
    </div>
    <van-divider />
    <van-cell-group>
      <van-cell title="项目官网" :value="obj.website" />
      <van-cell title="项目介绍" :label="obj.content" />
      <van-cell title="释放规则" :label="obj.rule" />
      <van-cell title="代币合约" :value="obj.pact" />
      <van-cell title="是否锁仓" :value="obj.islock ? '是' : '否'" />
      <van-cell title="类型模型" :value="obj.mode" />
      <van-cell title="投资机构" :value="obj.organization" />
      <van-cell title="预计上市时间" :value="obj.createTime" />
      <van-cell title="代币发行" :value="obj.publish" />
      <van-cell title="募资价格" :value="obj.price + ' U/枚'" />
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onActivated } from 'vue'
import { useRoute } from 'vue-router'
import { User } from '@/components'

const route = useRoute()
const id = ref(route.params.id as string)
let obj = reactive(JSON.parse(route.query.obj as string))

onActivated(() => {
  if (id.value !== route.params.id) {
    id.value = route.params.id as string
    obj = JSON.parse(route.query.obj as string)
    return
  }
})
</script>

<style lang="scss" scoped>
.h-col {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
