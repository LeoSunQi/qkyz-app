/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-04 18:24:22
 * @LastEditTime: 2023-12-27 19:38:42
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import type { RouteRecordRaw } from 'vue-router'

const evaluationRouterMap: RouteRecordRaw[] = [
  {
    path: '/evaluation/details/:id',
    name: 'EvaluationDetails',
    component: () => import('@/views/evaluation/EvaluationDetails.vue'),
    meta: { title: '评测详情' }
  }
]

export default evaluationRouterMap