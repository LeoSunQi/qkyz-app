/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-21 17:51:42
 * @LastEditTime: 2023-12-28 09:21:38
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import Mock from 'mockjs'
import { COMMON, BASE_USER, USER_LEVEL } from '.'

export const HomeGuarantees = Mock.mock({
  search: {
    ...COMMON,
    ...BASE_USER,
    ...USER_LEVEL,
  },
  'list|1-10': [
    {
      ...COMMON,
      ...BASE_USER,
      ...USER_LEVEL,
      type: '@integer(1, 2)',
      status: '@integer(1, 4)',
      paymentType: '@integer(1, 3)',
      paidNum: '@integer(50, 10000)',
      unPaidNum: '@integer(50, 10000)',
      refundNum: '@integer(50, 10000)'
    }
  ]
})

export const HomeTasks = Mock.mock({
  'list|3-20': [
    {
      ...COMMON,
      image: '@image("70x70", "@color", "image")',
      name: '@ctitle(2, 4)',
      text: '@string("upper", 4)',
      exchangedNum: '@integer(100, 1000)',
      unconvertedNum: '@integer(100, 1000)',
      status: '@integer(1, 4)',
    }
  ]
})

export const HomeTools = Mock.mock({
  'transactions|3-10': [
    {
      ...COMMON,
      name: '@ctitle',
      url: '@url',
      isUse: '@boolean'
    }
  ],
  "contracts|2-5": [
    {
      ...COMMON,
      name: '@string("upper", 4)',
      title: '@ctitle',
      code: '@string(7,26)',
    }
  ],
  "appleIds|1-5": [
    {
      ...COMMON,
      email: '@email',
      code: '@string("number",5)'
    }
  ],
  "tools|1-5": [
    {
      ...COMMON,
      title: '@ctitle',
      email: '@email',
      code: '@string("number",5)',
    }
  ],
  "vips": [
    {
      ...COMMON,
      title: '@ctitle',
      email: '@email',
      code: '@string("number",5)',
    }
  ]
})

export const HomeNetworks = Mock.mock({
  ...COMMON,
  todayNum: '@integer(100, 99999)',
  vipNum: '@integer(100, 99999)',
  'list|5': [
    {
      ...COMMON,
      name: '@string("upper", 5)',
      reads: '@integer(100, 99999)'
    }
  ],
  'evaluations|5': [
    {
      ...COMMON,
      type: '@integer(1, 3)',
      title: '@ctitle',
      content: '@cparagraph',
    }
  ]
})

export const HomeHots = Mock.mock({
  'list|15-45': [
    {
      ...COMMON,
      ...BASE_USER,
      ...USER_LEVEL,
      type: '@integer(1, 4)',
      title: '@ctitle',
      content: '@cparagraph',
    }
  ],
  total: function () {
    return this.list.length
  }
})