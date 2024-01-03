/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-04 18:48:27
 * @LastEditTime: 2023-12-09 18:15:46
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { defineStore } from "pinia"
import { ref } from 'vue'
import { ACTIVE_PATH } from './constant'
import { setSession, getSession } from '@/utils/storage'

const useAppStore = defineStore('APP_STROE', () => {
  const activePath = ref(getSession(ACTIVE_PATH) || '/')

  const setActivePath = (path: string) => {
    activePath.value = path
    setSession(ACTIVE_PATH, activePath.value)
  }

  return {
    activePath,
    setActivePath
  }
})

export default useAppStore