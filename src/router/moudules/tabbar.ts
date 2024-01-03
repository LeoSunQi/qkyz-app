/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-07 14:55:35
 * @LastEditTime: 2023-12-07 15:31:23
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import type { RouteRecordRaw } from "vue-router"

const tabbarRouterMap: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: () => import('@/views/quotes/Quotes.vue'),
    meta: { title: '行情榜',},
  },
  {
    path: '/evaluation',
    name: 'Evaluation',
    component: () => import('@/views/evaluation/Evaluation.vue'),
    meta: { title: '评测榜' }
  },
  {
    path: '/attic',
    name: 'Attic',
    component: () => import('@/views/attic/Attic.vue'),
    meta: { title: '藏经阁' }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/mine/Mine.vue'),
    meta: { title: '我的' }
  },
]

export default tabbarRouterMap