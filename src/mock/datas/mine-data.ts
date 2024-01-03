/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-17 13:25:51
 * @LastEditTime: 2023-12-28 10:41:22
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import Mock from 'mockjs'
import { COMMON, BASE_USER, USER_LEVEL, COMMUNITY_INFO } from '.'

export const MineBusiness = Mock.mock({
  ...COMMON,
  image: '@image("750x300", "@color", "banner-image")',
  'contents|1-5': ['@cparagraph'],
})

export const MineBanners = Mock.mock({
  invitationCode: '@integer(100000, 1000000)',
  'image|2-3': ['@image("300x750", "@color", "swipe-image")'],
  'contents|1-5': ['@cparagraph'],
})

export const MineCommunitys = Mock.mock({
  'list|1-10': [
    {
      ...COMMON,
      ...COMMUNITY_INFO,
      type: '@integer(1, 2)',
    }
  ]
})

export const MineWallet = Mock.mock({
  ...COMMON,
  amount: '@integer(1, 10000)',
  extendAmount: '@integer(1, 10000)',
  stock: '@integer(1, 10000)',
  bonus: '@integer(1, 10000)',
  withdraw: '@integer(1, 10000)',
  income: '@integer(1, 10000)',
  total: function() {
    return this.amount + this.extendAmount + this.stock + this.bonus + this.withdraw - this.income
  },
})

export const MineTeams = Mock.mock({
  ...COMMON,
  invitedNum: '@integer(1, 10000)',
  vipNum: '@integer(1, 10000)',
  bonus: '@integer(1, 10000)',
  'list|1-20': [
    {
      ...COMMON,
      ...BASE_USER,
      ...USER_LEVEL,
      bonus: '@integer(1, 10000)'
    }
  ]
})

export const MineProfiles = Mock.mock({
  'evaluation|1-20': [
    {
      ...COMMON,
      type: '@integer(1, 2)',
      title: '@ctitle(5, 20)',
      content: '@cparagraph',
      price: '@integer(1, 10000)',
      isAnswer: '@boolean',
      answer: '@cparagraph'
    }
  ],
  'clue|1-20': [
    {
      ...COMMON,
      type: '@integer(1, 2)',
      title: '@ctitle(5, 20)',
      content: '@cparagraph',
      price: '@integer(1, 10000)',
    }
  ],
  'goodjob|1-10': [
    {
      ...COMMON,
      ...BASE_USER,
      ...USER_LEVEL,
      type: '@integer(1, 2)',
      title: '@ctitle(5,20)',
      content: '@cparagraph',
      likesNum: '@integer(1, 10000)',
    }
  ],
  'comment|1-10': [
    {
      ...COMMON,
      ...BASE_USER,
      ...USER_LEVEL,
      title: '@ctitle(5,20)',
      content: '@cparagraph',
      'list|2-10': [
        {
          ...COMMON,
          ...BASE_USER,
          ...USER_LEVEL,
          reply: '@boolean',
          replier: '@cname',
          content: '@cparagraph',
        }
      ]
    }
  ],
  'fans|1-20': [
    {
      ...COMMON,
      ...BASE_USER,
      ...USER_LEVEL,
      follow: '@boolean',
    }
  ],
  'pulish|20-40': [
    {
      ...COMMON,
      type: '@integer(1, 3)',
      title: '@ctitle',
      content: '@cparagraph',
      price: '@integer(1, 10000)',
      status: '@integer(1, 3)',
    }
  ],
})