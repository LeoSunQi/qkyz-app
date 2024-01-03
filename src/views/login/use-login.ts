/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-10 15:51:03
 * @LastEditTime: 2023-12-10 19:54:12
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { ref } from 'vue'
import { isMobile } from '@/utils/test'

export default function useLogin() {
  const types = ref('password')
  const eyeIcon = ref('closed-eye')
  const loading = ref(false)

  const setLoading = (val: boolean) => loading.value = val

  const resetPassType = () => {
    eyeIcon.value = eyeIcon.value === 'closed-eye' ? 'eye-o' : 'closed-eye'
    types.value = eyeIcon.value === 'closed-eye' ? 'password' : 'text'
  }

  const validatorMobile = (val: string) => {
    if (!isMobile(val)) {
      return '手机号格式不正确'
    }
    return ''
  }

  return {
    types,
    eyeIcon,
    loading,
    setLoading,
    resetPassType,
    validatorMobile
  }
}