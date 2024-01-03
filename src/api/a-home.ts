/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-21 17:55:24
 * @LastEditTime: 2023-12-28 09:01:44
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import request from '@/utils/request'
import type { IResultIO, Recordable } from '@/typings'
import {
  HOME_GUARANTEE_LIST_URL,
  HOME_GUARANTEE_SEARCH_URL,
  HOME_TASK_URL,
  HOME_TOOLS_URL,
  HOME_NETWORK_LIST_URL,
  HOME_HOT_LIST_URL,
} from '@/constants/api-constant'

export const MHomeGuaranteeApi = (data: Recordable) :Promise<IResultIO> => request({
  url: HOME_GUARANTEE_LIST_URL,
  method: 'post',
  data
})

export const MHomeGuaranteeSearchApi = () :Promise<IResultIO> => request({
  url: HOME_GUARANTEE_SEARCH_URL,
  method: 'get',
})

export const MHomeTaskApi = (data: Recordable) :Promise<IResultIO> => request({
  url: HOME_TASK_URL,
  method: 'post',
  data
})

export const MHomeToolApi = () :Promise<IResultIO> => request({
  url: HOME_TOOLS_URL,
  method: 'get'
})

export const MHomeNetworkApi = (): Promise<IResultIO> => request({
  url: HOME_NETWORK_LIST_URL,
  method: 'get',
})

export const MHomeHotApi = (data: Recordable): Promise<IResultIO> => request({
  url: HOME_HOT_LIST_URL,
  method: 'post',
  data
})

const M_HOME = { 
  MHomeGuaranteeApi,
  MHomeGuaranteeSearchApi,
  MHomeTaskApi,
  MHomeToolApi,
  MHomeNetworkApi,
  MHomeHotApi
}

export default M_HOME