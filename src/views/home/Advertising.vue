<template>
  <div class="container">
    <div class="banner-image">
      <van-image :src="image" class="base-image" />
    </div>
    <div class="content">
      <van-divider class="d-text">广告申请</van-divider>
      <van-form @submit="onSubmit">
        <van-cell-group>
          <van-field
            v-model="form.projectName"
            label="项目名称"
            name="projectName"
            input-align="right"
            placeholder="请输入项目名称"
            clearable
            :rules="[
              {
                required: true,
                message: '请填写项目名称',
              },
            ]"
          />
          <van-field
            v-model="form.phone"
            label="手机"
            name="phone"
            input-align="right"
            placeholder="请输入手机号码"
            clearable
            :rules="[
              {
                validator: validatorMobile,
                required: true,
                message: '请填写手机号码',
              },
            ]"
          />
          <van-field
            v-model="form.wxcode"
            label="微信"
            name="wxcode"
            input-align="right"
            placeholder="请输入微信"
            clearable
            :rules="[
              {
                required: true,
                message: '请填写微信',
              },
            ]"
          />
          <van-field
            v-model="form.introduction"
            label="一句话介绍"
            name="introduction"
            type="textarea"
            label-align="top"
            placeholder="请输入介绍"
            clearable
            autosize
            :rules="[
              {
                message: '请填写介绍',
              },
            ]"
          />
          <van-field
            v-model="form.remark"
            label="备注"
            name="remark"
            input-align="right"
            placeholder="请输入备注"
            clearable
            :rules="[
              {
                message: '请填写备注',
              },
            ]"
          />
        </van-cell-group>
        <van-button
          type="primary"
          :loading="loading"
          block
          native-type="submit"
          class="btn"
          >提交申请</van-button
        >
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { ref, reactive, onMounted } from 'vue'
import { isMobile } from '@/utils/test'

const image = ref()
const form = reactive({
  projectName: '',
  phone: '',
  wxcode: '',
  introduction: '',
  remark: '',
})
const loading = ref(false)

const validatorMobile = (val: string) => {
  if (!isMobile(val)) {
    return '手机号格式不正确'
  }
  return ''
}

const onSubmit = () => {}

const getBanners = async () => {
  const { code, data } = await api.MCommonBannerApi()
  if (code === 0) {
    image.value = data.image
  }
}

onMounted(() => {
  getBanners()
})
</script>

<style scoped lang="scss">
.banner-image {
  width: 100%;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
}
.content {
  padding-top: 30px;
  .d-text {
    font-size: 18px;
    font-weight: 600;
    color: $l-gray-8;
  }

  .btn {
    margin-top: 20px;
  }
}
</style>
