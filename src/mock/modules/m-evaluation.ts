/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-26 19:51:36
 * @LastEditTime: 2023-12-28 09:55:18
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import type { Recordable } from '@/typings'
import { MockMethod } from 'vite-plugin-mock'
import { basicsResponse, paginationResponse } from '../utils/resultFn'
import { EvaluationData } from '../datas/evaluation-data'
import { EVALUATION_LIST_URL, EVALUATION_PLAZA_URL } from '@/constants/api-constant'

const evaluation_list = {
  url: EVALUATION_LIST_URL,
  method: 'post',
  response: (req: Recordable) => {
    const { pageNum = 1, pageSize = 15 } = req.body
    const data = paginationResponse({
      data: EvaluationData.list,
      total: EvaluationData.list.length,
      pageNum,
      pageSize
    })
    return basicsResponse(data)
  }
}

const evaluation_plaza = {
  url: EVALUATION_PLAZA_URL,
  method: 'post',
  response: (req: Recordable) => {
    const { pageNum = 1, pageSize = 15 } = req.body
    const data = paginationResponse({
      data: EvaluationData.plaza,
      total: EvaluationData.plaza.length,
      pageNum,
      pageSize,
    })
    return basicsResponse(data)
  }
} 

export default [evaluation_list, evaluation_plaza] as MockMethod[]