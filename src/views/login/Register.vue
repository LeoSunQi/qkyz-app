<template>
  <div class="login-container">
    <div class="header-wrap">
      <span class="title"> 注册</span>
      <span class="register" @click="$router.push('/login')">登录</span>
    </div>
    <div>
      <van-form required="auto" @submit="onSubmit">
        <van-cell-group>
          <van-field
            v-model="form.nickName"
            label="昵称"
            name="nickName"
            placeholder="请输入昵称"
            label-align="top"
            clearable
            :rules="[{ required: true, message: '请填写昵称' }]"
          />
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
            name="password"
            label="密码"
            placeholder="请输入密码"
            label-align="top"
            clearable
            :rules="[{ required: true, message: '请填写密码' }]"
            :right-icon="eyeIcon"
            @click-right-icon="resetPassType"
          />
          <van-field
            v-model="form.newPassword"
            :type="(types as any)"
            name="newPassword"
            label="再一次密码"
            placeholder="请输入再一次密码"
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
          >重置</van-button
        >
      </van-form>
    </div>
    　
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { IResgiterParams } from '@/typings/t-login'
import useLogin from './use-login'

const { types, eyeIcon, loading, resetPassType } = useLogin()

const form = reactive<IResgiterParams>({
  nickName: '',
  phone: '',
  password: '',
  newPassword: '',
  code: '',
})

const onSubmit = (valuse: object) => {
  console.log(valuse)
}
</script>

<style lang="scss" scoped>
@import '@/styles/login.scss';
</style>
