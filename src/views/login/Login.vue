<template>
  <div class="login-container">
    <div class="header-wrap">
      <span class="title">登录</span>
      <span class="register" @click="$router.push('/register')">注册</span>
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
            :rules="[
              {
                validator: validatorMobile,
                required: true,
                message: '请填写手机号码',
              },
            ]"
          />
          <section v-if="!isVerfy">
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
          </section>
          <section v-else>
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
                <van-button
                  size="small"
                  type="primary"
                  :disabled="disabled"
                  plain
                  @click="beforeSend(form.phone, getVerificationCode)"
                  >{{ verificationText }}</van-button
                >
              </template>
            </van-field>
          </section>
        </van-cell-group>
        <div class="login-text">
          <span class="verification" @click="onVerify">{{ activeText }}</span>
          <span class="forget" @click="$router.push('/forget')"
            >忘记密码？</span
          >
        </div>
        <van-button
          type="primary"
          :loading="loading"
          block
          native-type="submit"
          class="login-btn"
          >登录</van-button
        >
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import api from '@/api'
import useUserStore from '@/store/s-user'
import type { ILoginParams } from '@/typings/t-login'
import useLogin from './use-login'
import useVerificationCode from './use-verification-code'
import { showNotify } from 'vant'

const sotre = useUserStore()
const { types, eyeIcon, loading, setLoading, resetPassType, validatorMobile } =
  useLogin()
const { verificationText, status, beforeSend, setStatus } =
  useVerificationCode()

const form = reactive<ILoginParams>({
  phone: '',
  password: '',
  code: '',
})

const isVerfy = ref(false)
const activeText = ref('验证码登录')

const disabled = computed(() => {
  return status.value === 'initial' ? false : true
})

const onVerify = () => {
  isVerfy.value = !isVerfy.value
  activeText.value = !isVerfy.value ? '验证码登录' : '密码登录'
  if (isVerfy.value) {
    form.password = ''
  } else {
    form.code = ''
  }
}

const getVerificationCode = async () => {
  const { code, data } = await api.MCommonSendSmsApi({ phone: form.phone })

  if (+code === 0) {
    showNotify({ type: 'primary', message: `验证码:${data.code}`})
    setStatus('success')
    return
  }

  setStatus('fail')
}

const onSubmit = async (values: object) => {
  setLoading(true)
  await sotre.login(values)
  await setTimeout(() => {
    setLoading(false)
  }, 700)
}
</script>

<style lang="scss" scoped>
@import '@/styles/login.scss';
</style>
