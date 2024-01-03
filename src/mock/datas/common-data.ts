/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-25 14:29:50
 * @LastEditTime: 2023-12-28 10:40:42
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import Mock from 'mockjs'
import { BASE_USER, COMMON, USER_LEVEL } from '.'

export const CommonSearchData = Mock.mock({
  'historys|3-10': [
    {
      ...COMMON,
      title: '@ctitle',
    }
  ],
  'searchs|1-10': [
    {
      ...COMMON,
      image: '@image("150x150", "@color", "image")',
      title: '@ctitle',
      type: '@integer(1,4)',
      content: '@cword(2,4)',
    }
  ]
})

export const CommonMessages = Mock.mock({
  'msgs|5-20': [
    {
      ...COMMON,
      title: '@ctitle',
      content: '@cparagraph',
      isRead: '@boolean'
    }
  ],
  'notices|3-5': [
    {
      ...COMMON,
      content: '@cparagraph'
    }
  ],
})

export const CommonAbout = Mock.mock({
  ...COMMON,
  image: '@image("750x300", "@color", "about-image")',
  content: '@cparagraph',
  wx_code: '@string',
  phone: '@phone',
  email: '@email',
  qc_code: '@image("300x300", "@color", "二维码")',
})

export const CommonBanner = Mock.mock({
  ...COMMON,
  image: '@image("750x300", "@color", "banner-image")'
})

export const CommonSwipeBanner = Mock.mock({
  'banners|3-5': [
    {
      ...COMMON,
      image: '@image("750x300", "@color", "swipe-banner-image")'
    }
  ]
})

export const CommonUserInfo = Mock.mock({
  ...COMMON,
  ...BASE_USER,
  ...USER_LEVEL,
  role: '@integer(1, 5)',
  fans: '@integer(1, 100000)',
  praise: '@integer(1, 100000)',
  comment: '@integer(1, 100000)',
  follow: '@integer(1, 100000)',
  like: '@integer(1, 100000)',
})

export const CommonSms = Mock.mock({
  code: '@integer(1000, 9999)'
})

export const CommonAuth = Mock.mock({
  token: '@string(32)'
})