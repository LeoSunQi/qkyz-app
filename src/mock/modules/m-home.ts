/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-21 17:48:40
 * @LastEditTime: 2023-12-28 09:22:00
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { MockMethod } from 'vite-plugin-mock'
import type { Recordable } from '@/typings'
import { basicsResponse, paginationResponse } from '../utils/resultFn'
import {
  HomeHots,
  HomeNetworks,
  HomeTools,
  HomeTasks,
  HomeGuarantees
} from '../datas/home-data'
import {
  HOME_GUARANTEE_LIST_URL,
  HOME_GUARANTEE_SEARCH_URL,
  HOME_TASK_URL,
  HOME_TOOLS_URL,
  HOME_NETWORK_LIST_URL,
  HOME_HOT_LIST_URL,
} from '@/constants/api-constant'

const home_guarantee_list = {
  url: HOME_GUARANTEE_LIST_URL,
  method: 'post',
  response: (req: Recordable) => {
    const { pageNum = 1, pageSize = 15 } = req.body
    const data = paginationResponse({
      data: HomeGuarantees.list,
      total: HomeGuarantees.list.length,
      pageNum,
      pageSize,
      query: {},
      search: {}
    })
    return basicsResponse(data)
  }
}

const home_guarantee_search = {
  url: HOME_GUARANTEE_SEARCH_URL,
  method: 'get',
  response: () => basicsResponse(HomeGuarantees.search)
}

const home_task = {
  url: HOME_TASK_URL,
  method: 'post',
  response: (req: Recordable) => {
    const { pageNum = 1, pageSize = 15 } = req.body
    const data = paginationResponse({
      data: HomeTasks.list,
      total: HomeTasks.list.length,
      pageNum,
      pageSize
    })
    return basicsResponse(data)
  }
}

const home_tools = {
  url: HOME_TOOLS_URL,
  method: 'get',
  response: () => basicsResponse(HomeTools)
}

const home_network_list = {
  url: HOME_NETWORK_LIST_URL,
  method: 'get',
  response: () => basicsResponse(HomeNetworks)
}

const home_hot_list = {
  url: HOME_HOT_LIST_URL,
  method: 'post',
  response: (req: Recordable) => {
    const { pageNum = 1, pageSize = 15 } = req.body
    const data = paginationResponse({
      data: HomeHots.list,
      total: HomeHots.list.length,
      pageNum,
      pageSize
    })
    return basicsResponse(data)
  }
}

export default [
  home_guarantee_list,
  home_guarantee_search,
  home_task,
  home_tools,
  home_network_list,
  home_hot_list
] as MockMethod[]