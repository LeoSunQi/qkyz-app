<template>
  <div class="login-container">
    <div class="header-wrap">
      <span class="title">修改密码</span>
    </div>
    <div>
      <van-form required="auto" @submit="onSubmit">
        <van-cell-group>
          <van-field
            v-model="form.phone"
            label="手机"
            name="phone"
            placeholder="请输入手机号码"
            label-align="top"
            clearable
            :rules="[{ required: true, message: '请填写手机号码' }]"
          />
          <van-field
            v-model="form.password"
            :type="(types as any)"
            label="密码"
            name="password"
            placeholder="请输入密码"
            label-align="top"
            clearable
            :right-icon="eyeIcon"
            :rules="[{ required: true, message: '请填写密码' }]"
            @click-right-icon="resetPassType"
          />
          <van-field
            v-model="form.code"
            label="短信验证码"
            type="number"
            name="code"
            placeholder="请输入短信验证码"
            label-align="top"
            clearable
            :rules="[{ required: true, message: '请填写验证码' }]"
          >
            <template #button>
              <van-button size="small" type="primary">发送验证码</van-button>
            </template>
          </van-field>
        </van-cell-group>
        <van-button
          type="primary"
          :loading="loading"
          block
          native-type="submit"
          class="login-btn"
          >修改</van-button
        >
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { ILoginParams } from '@/typings/t-login'
import useLogin from './use-login'

const { types, eyeIcon, loading, resetPassType } = useLogin()

const form = reactive<ILoginParams>({
  phone: '',
  password: '',
  code: '',
})

const onSubmit = (valuse: object) => {
  console.log(valuse)
}
</script>

<style lang="scss" scoped>
@import '@/styles/login.scss';
</style>