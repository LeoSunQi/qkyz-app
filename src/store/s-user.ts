/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-09 17:11:13
 * @LastEditTime: 2023-12-28 10:46:15
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { USER_INFO } from './constant'
import { setSession, getSessionJson, removeSession } from '@/utils/storage'
import { setToken, getToken, removeToken } from '@/utils/auth'
import api from '@/api'
import router from '@/router'
import { showNotify, showConfirmDialog } from 'vant'
import useAppStore from './app'

const useUserStroe = defineStore('USER', () => {
  const appStore = useAppStore()
  const token = ref(getToken())
  const userinfo = ref(getSessionJson(USER_INFO) || {})

  const logout = () => {
    showConfirmDialog({
      title: '退出登录',
      message: '确定要退出登录吗？'
    })
      .then(() => {
        removeToken()
        removeSession(USER_INFO)
        router.push('/mine')
      })
      .catch(() => {
        showNotify({ type: 'primary', message: '您已取消退出' })
      })
  }

  const login = async (form: object) => {
    const { code, data } = await api.MCommonAuthApi(form)
    if (+code === 0) {
      setToken(data.token)
      getUserInfo()
      router.push('/mine')
      appStore.setActivePath('/mine')
      return
    }
    showNotify({ type: 'danger', message: '登录失败' })
  }

  const vipTime = computed(() => userinfo.value.vipTime ? `有效期：${userinfo.value.vipTime}` : '开通会员享受更多权益')

  const setVipText = () => {
    const vip = userinfo.value.vip
    let text = ''
    switch (+vip) {
      case 1:
        text = '月卡会员'
        break
      case 2:
        text = '季卡会员'
        break
      case 3:
        text = '年卡会员'
        break
      default:
        text = '您尚未开通会员'
    }
    return text
  }

  const bgLinearGradient = computed(() => {
    let bgColor = ''
    const color1 = communityContent()?.color
    const color2 = communityContent()?.bgColor
    bgColor = `linear-gradient(150deg, ${color1}, ${color2})`
    return bgColor
  })

  const communityText = computed(() => communityContent()?.text)
  const communityColor = computed(() => communityContent()?.color)
  const communityBgColor = computed(() => communityContent()?.bgColor)

  const communityContent = () => {
    const community = userinfo.value.community
    if (!community) return
    const obj = { text: '青铜粉丝', color: '#1989fa', bgColor: '#fff' }
    switch (+community) {
      case 2:
        obj.text = '白银玩家'
        obj.color = '#64748b'
        obj.bgColor = '#fff'
        break
      case 3:
        obj.text = '黄金群主'
        obj.color = '#f97316'
        obj.bgColor = '#ffedd5'
        break
      case 4:
        obj.text = '铂金社区长'
        obj.color = '#22c55e'
        obj.bgColor = '#dcfce7'
        break
      case 5:
        obj.text = '钻石股东'
        obj.color = '#10b981'
        obj.bgColor = '#ecfdf5'
        break
      case 6:
        obj.text = '联合创始人'
        obj.color = '#6366f1'
        obj.bgColor = '#e0e7ff'
        break
      default:
        obj.text = '青铜粉丝'
        obj.color = '#0ea5e9'
        obj.bgColor = '#e0f2fe'
    }
    return obj
  }

  const setUserInfo = (user: object) => {
    userinfo.value = user
    setSession(USER_INFO, userinfo.value)
  }

  const getUserInfo = async () => {
    const { code, data } = await api.MCommonUserInfoApi()
    if (code === 0) {
      setUserInfo(data)
    }
  }


  return {
    token,
    login,
    logout,
    userinfo,
    vipTime,
    setVipText,
    bgLinearGradient,
    communityText,
    communityColor,
    communityBgColor,
    communityContent,
    setUserInfo,
    getUserInfo,
  }
})

export default useUserStroe
