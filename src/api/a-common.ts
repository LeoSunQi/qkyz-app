/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-25 14:32:49
 * @LastEditTime: 2023-12-28 10:45:12
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import request from '@/utils/request'
import type { IResultIO, Recordable } from '@/typings'
import {
  COMMON_ABOUT_URL,
  COMMON_AUTH_URL,
  COMMON_BANNER_URL,
  COMMON_HISTORYS_URL,
  COMMON_MESSAGES_URL,
  COMMON_NOTICES_URL,
  COMMON_SEARCHS_URL,
  COMMON_SENDSMS_URL,
  COMMON_SWIPE_BANNER_URL,
  COMMON_USER_INFO_URL
} from '@/constants/api-constant'

export const MCommonAboutApi = (): Promise<IResultIO> => request({
  url: COMMON_ABOUT_URL,
  method: 'get',
})

export const MCommonHistorysApi = (): Promise<IResultIO> => request({
  url: COMMON_HISTORYS_URL,
  method: 'get',
})

export const MCommonSearchApi = (params: Recordable): Promise<IResultIO> => request({
  url: COMMON_SEARCHS_URL,
  method: 'get',
  params
})

export const MCommonSwipeBanner = (): Promise<IResultIO> => request({
  url: COMMON_SWIPE_BANNER_URL,
  method: 'get',
})

export const MCommonBannerApi = (): Promise<IResultIO> => request({
  url: COMMON_BANNER_URL,
  method: 'get',
})

export const MCommonMessageApi = (data?: Recordable): Promise<IResultIO> => request({
  url: COMMON_MESSAGES_URL,
  method: 'post',
  data
})

export const MCommonNoticesApi = (): Promise<IResultIO> => request({
  url: COMMON_NOTICES_URL,
  method: 'get',
})

export const MCommonUserInfoApi = (): Promise<IResultIO> => request({
  url: COMMON_USER_INFO_URL,
  method: 'get',
})

export const MCommonSendSmsApi = (data: Recordable): Promise<IResultIO> => request({
  url: COMMON_SENDSMS_URL,
  method: 'post',
  data
})

export const MCommonAuthApi = (data: Recordable): Promise<IResultIO> => request({
  url: COMMON_AUTH_URL,
  method: 'post',
  data
})

const M_COMMON = {
  MCommonAboutApi,
  MCommonHistorysApi,
  MCommonSearchApi,
  MCommonSwipeBanner,
  MCommonBannerApi,
  MCommonMessageApi,
  MCommonNoticesApi,
  MCommonUserInfoApi,
  MCommonSendSmsApi,
  MCommonAuthApi
}

export default M_COMMON