/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-04 18:38:14
 * @LastEditTime: 2023-12-23 11:27:37
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import type { RouteRecordRaw } from "vue-router"

const homeRouterMap: RouteRecordRaw[] = [
  {
    path: '/guarantee',
    name: 'Guarantee',
    component: () => import('@/views/home/Guarantee.vue'),
    meta: { title: '担保服务' }
  },
  {
    path: '/task',
    name: 'Task',
    component: () => import('@/views/home/Task.vue'),
    meta: { title: '任务空投' }
  },
  {
    path: '/advertising',
    name: 'Advertising',
    component: () => import('@/views/home/Advertising.vue'),
    meta: { title: '广告投放' }
  },
  {
    path: '/tool',
    name: 'Tool',
    component: () => import('@/views/home/HTool.vue'),
    meta: { title: '实用工具' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/home/About.vue'),
    meta: { title: '关于我们' }
  },
  {
    path: '/network',
    name: 'Network',
    component: () => import('@/views/home/Network.vue'),
    meta: { title: '全网数据' }
  },
  {
    path: '/vip',
    name: 'Vip',
    component: () => import('@/views/home/Vip.vue'),
    meta: { title: '会员中心' }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/home/HSearch.vue'),
    meta: { title: '搜索' }
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import('@/views/home/Messages.vue'),
    meta: { title: '站内信息' }
  }
]

export default homeRouterMap