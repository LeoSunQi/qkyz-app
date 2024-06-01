/*
 * @Description:
 * @Author: LeoSunQi
 * @Date: 2023-12-03 14:09:29
 * @LastEditTime: 2024-06-01 12:36:29
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/Layout.vue'
import tabbarRouterMap from './modules/tabbar'

/**
 * 手动导入模块下的路由
 */
// import loginRouterMap from './modules/login'
// import homeRouterMap from './modules/home'
// import quotesRouterMap from './modules/quotes'
// import evaluationRouterMap from './modules/evaluation'
// import atticRouterMap from './modules/attic'
// import mineRouterMap from './modules/mine'

// const customRouteMap: RouteRecordRaw[] = [
//   {
//     path: '/',
//     redirect: '/',
//     component: Layout,
//     children: [...tabbarRouterMap],
//   },
//   ...loginRouterMap,
//   ...homeRouterMap,
//   ...quotesRouterMap,
//   ...evaluationRouterMap,
//   ...atticRouterMap,
//   ...mineRouterMap,
// ]

/**
 * import.meta.glob 动态导入模块
 */
let routesModules: RouteRecordRaw[] = []
const modules = import.meta.glob('./modules/**/*.ts', {
  import: 'default',
  eager: true,
})

Object.keys(modules).forEach(key => {
  if (
    key.includes('./modules/tabbar.ts') ||
    key.includes('./modules/index.ts')
  ) {
    return
  }
  routesModules = routesModules.concat(modules[key] as any)
})

const customRouteMap: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/',
    component: Layout,
    children: [...tabbarRouterMap],
  },
  ...routesModules,
]

export default customRouteMap
