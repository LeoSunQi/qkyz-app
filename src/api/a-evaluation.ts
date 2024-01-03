/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-26 19:57:26
 * @LastEditTime: 2023-12-28 11:07:24
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import request from '@/utils/request'
import type { IResultIO, Recordable } from '@/typings'
import { 
  EVALUATION_LIST_URL,
  EVALUATION_PLAZA_URL
} from '@/constants/api-constant'

export const MEvaluationStatusApi = (data?: Recordable) :Promise<IResultIO> => request({
  url: EVALUATION_LIST_URL,
  method: 'post',
  data
})

export const MEvaluationPlazaApi = (data?: Recordable) :Promise<IResultIO> => request({
  url: EVALUATION_PLAZA_URL,
  method: 'post',
  data
})

const M_EVALUATION = { MEvaluationStatusApi, MEvaluationPlazaApi }
export default M_EVALUATION