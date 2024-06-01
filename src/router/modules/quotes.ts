/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-04 18:10:22
 * @LastEditTime: 2023-12-26 14:33:25
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import type { RouteRecordRaw } from 'vue-router'

const quotesRouterMap: RouteRecordRaw[] = [
  {
    path: '/quotes/persons-details/:id',
    name: 'QPersonsDetails',
    component: () => import('@/views/quotes/QPersonsDetails.vue'),
    meta: { title: '新秀详情' }
  }
]

export default quotesRouterMap