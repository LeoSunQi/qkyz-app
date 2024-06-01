/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-04 18:28:22
 * @LastEditTime: 2023-12-19 12:07:59
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import type { RouteRecordRaw } from 'vue-router'

const mineRouterMap: RouteRecordRaw[] = [
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/mine/profines/Profile.vue'),
    meta: { title: '个人中心' }
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('@/views/mine/team.vue'),
    meta: { title: '我的团队' }
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import('@/views/mine/Wallet.vue'),
    meta: { title: '我的钱包' }
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('@/views/mine/Community.vue'),
    meta: { title: '我的社区' }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/mine/Auth.vue'),
    meta: { title: '实名认证' }
  },
  {
    path: '/invite',
    name: 'Invite',
    component: () => import('@/views/mine/Invite.vue'),
    meta: { title: '邀请好友' }
  },
  {
    path: '/business',
    name: 'Business',
    component: () => import('@/views/mine/Business.vue'),
    meta: { title: '商务合作' }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('@/views/mine/Setting.vue'),
    meta: { title: '系统设置' }
  },
  {
    path: '/userinfo',
    name: 'UserInfo',
    component: () => import('@/views/mine/profines/UserInfo.vue'),
    meta: { title: '个人信息' }
  },
  {
    path: '/publish',
    name: 'Publish',
    component: () => import('@/views/mine/profines/Publish.vue'),
    meta: { title: '我的发布' }
  },
  {
    path: '/fans',
    name: 'Fans',
    component: () => import('@/views/mine/profines/Fans.vue'),
    meta: { title: '我的粉丝/关注' }
  },
  {
    path: '/comment',
    name: 'Comment',
    component: () => import('@/views/mine/profines/Comment.vue'),
    meta: { title: '我的评论' }
  },
  {
    path: '/goodjob',
    name: 'GoodJob',
    component: () => import('@/views/mine/profines/GoodJob.vue'),
    meta: { title: '我的点赞' }
  },
  {
    path: '/clue',
    name: 'Clue',
    component: () => import('@/views/mine/profines/Clue.vue'),
    meta: { title: '我的线索' }
  },
  {
    path: '/evaluationt',
    name: 'Evaluationt',
    component: () => import('@/views/mine/profines/Evaluationt.vue'),
    meta: { title: '我的评价' }
  }
]

export default mineRouterMap