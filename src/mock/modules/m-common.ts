/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-25 14:27:03
 * @LastEditTime: 2023-12-28 10:44:10
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { MockMethod } from 'vite-plugin-mock'
import { Recordable } from '@/typings'
import { basicsResponse, paginationResponse } from '../utils/resultFn'
import { 
  CommonSwipeBanner,
  CommonBanner,
  CommonAbout,
  CommonSms,
  CommonAuth,
  CommonMessages,
  CommonSearchData,
  CommonUserInfo
} from '../datas/common-data'
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

const common_about = {
  url: COMMON_ABOUT_URL,
  method: 'get',
  response: () => basicsResponse(CommonAbout)
}

const common_historys = {
  url: COMMON_HISTORYS_URL,
  method: 'get',
  response: () => basicsResponse(CommonSearchData.historys)
}

const common_searchs = {
  url: COMMON_SEARCHS_URL,
  method: 'get',
  response: () => basicsResponse(CommonSearchData.searchs)
}

const common_swipe_banner = {
  url: COMMON_SWIPE_BANNER_URL,
  method: 'get',
  response: () => basicsResponse(CommonSwipeBanner.banners)
}

const common_banner = {
  url: COMMON_BANNER_URL,
  method: 'get',
  response: () => basicsResponse(CommonBanner)
}

const common_messages = {
  url: COMMON_MESSAGES_URL,
  method: 'post',
  response: (req: Recordable) => {
    const { pageNum = 1, pageSize = 15 } = req.body
    const data = paginationResponse({
      data: CommonMessages.msgs,
      total: CommonMessages.msgs.length,
      pageNum,
      pageSize
    })
    return basicsResponse(data)
  }
}

const common_notices = {
  url: COMMON_NOTICES_URL,
  method: 'get',
  response: () => basicsResponse(CommonMessages.notices)
}

const common_user_info = {
  url: COMMON_USER_INFO_URL,
  method: 'get',
  response: () => basicsResponse(CommonUserInfo)
}

const common_sendsms = {
  url: COMMON_SENDSMS_URL,
  method: 'post',
  response: (req: Recordable) => {
    const { phone } = req.body
    if (!phone) return basicsResponse({}, false)
    return basicsResponse(CommonSms)
  }
}

const common_auth = {
  url: COMMON_AUTH_URL,
  method: 'post',
  response: (req: Recordable) => {
    const { phone, password, code } = req.body
    if ((phone && password) || (phone && code)) return basicsResponse(CommonAuth)
    return basicsResponse({}, false)
  }
}

export default [
  common_about,
  common_historys,
  common_searchs,
  common_messages,
  common_notices,
  common_swipe_banner,
  common_banner,
  common_user_info,
  common_sendsms,
  common_auth
] as MockMethod[]