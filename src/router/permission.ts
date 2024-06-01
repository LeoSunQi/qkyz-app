/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-09 18:35:28
 * @LastEditTime: 2023-12-22 10:51:14
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import router from "."
import { getToken } from '@/utils/auth'
import mineRouterMap from "./modules/mine"

const authList = mineRouterMap.map(item => item.path)

router.beforeEach((to, _, next) => {
  if (to.meta) {
    document.title = to.meta.title as string
  }
  const hasToken = getToken()
  if (hasToken) { 
    if (to.path === '/login') {
      next({ path: '/mine' })
    } else {
      next()
    }
  } else {
    if (to.path === '/mine' || authList.includes(to.path)) {
      next(`/login?redirect=${to.path}`)
    } else {
      next()
    }
  }
})