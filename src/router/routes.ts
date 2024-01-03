/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-03 14:09:29
 * @LastEditTime: 2023-12-09 15:53:52
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/Layout.vue'
import loginRouterMap from './moudules/login'
import tabbarRouterMap from './moudules/tabbar'
import homeRouterMap from './moudules/home'
import quotesRouterMap from './moudules/quotes'
import evaluationRouterMap from './moudules/evaluation'
import atticRouterMap from './moudules/attic'
import mineRouterMap from './moudules/mine'

const customRouteMap: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/',
    component: Layout,
    children: [ ...tabbarRouterMap ]
  },
  ...loginRouterMap,
  ...homeRouterMap,
  ...quotesRouterMap,
  ...evaluationRouterMap,
  ...atticRouterMap,
  ...mineRouterMap
]

export default customRouteMap