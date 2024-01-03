/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-28 11:07:10
 * @LastEditTime: 2023-12-28 13:29:29
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import request from '@/utils/request'
import type { IResultIO, Recordable } from '@/typings'
import {
  ATTIC_INFOS_URL,
  ATTIC_LIST_URL
} from '@/constants/api-constant'

export const MAtticInfosApi = (data?: Recordable): Promise<IResultIO> => request({
  url: ATTIC_INFOS_URL,
  method: 'post',
  data
})

export const MAtticListApi = (data?: Recordable): Promise<IResultIO> => request({
  url: ATTIC_LIST_URL,
  method: 'post',
  data
})

const M_ATTIC = {
  MAtticInfosApi,
  MAtticListApi
}

export default M_ATTIC