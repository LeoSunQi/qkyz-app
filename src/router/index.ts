/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-03 14:07:43
 * @LastEditTime: 2023-12-09 18:36:00
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import customRouteMap from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: customRouteMap
})

export default router