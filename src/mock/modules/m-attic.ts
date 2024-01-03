/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-28 11:00:59
 * @LastEditTime: 2023-12-28 13:28:49
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import type { Recordable } from '@/typings'
import { MockMethod } from 'vite-plugin-mock'
import { basicsResponse, paginationResponse } from '../utils/resultFn'
import {
  ATTIC_INFOS_URL,
  ATTIC_LIST_URL
} from '@/constants/api-constant'
import { Attics } from '../datas/attic-data'

const attic_infos = {
  url: ATTIC_INFOS_URL,
  method: 'post',
  response: (req: Recordable) => {
    const { pageNum = 1, pageSize = 15 } = req.body
    const data = paginationResponse({
      data: Attics.infos,
      total: Attics.infos.length,
      pageNum,
      pageSize,
    })
    return basicsResponse(data)
  }
}

const attic_list = {
  url: ATTIC_LIST_URL,
  method: 'post',
  response: (req: Recordable) => {
    const { pageNum = 1, pageSize = 15 } = req.body
    const data = paginationResponse({
      data: Attics.list,
      total: Attics.list.length,
      pageNum,
      pageSize,
    })
    return basicsResponse(data)
  }
}

export default [
  attic_infos,
  attic_list
] as MockMethod[]