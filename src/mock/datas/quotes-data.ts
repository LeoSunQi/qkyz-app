/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-26 11:34:12
 * @LastEditTime: 2023-12-27 18:47:04
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import Mock from 'mockjs'
import { COMMON, BASE_USER, USER_LEVEL } from '.'

export const QuotesData = Mock.mock({
  'persons|5-20': [
    {
      ...COMMON,
      avatar: '@image("50x50", "@color", "avatar")',
      name: '@string("upper", 5)',
      readNum: '@integer(1, 10000)',
      rateNum: '@integer(1, 5)',
      website: '@url',
      content: '@cparagraph',
      pact: '@string(7,26)',
      rule: '@cparagraph',
      islock: '@boolean',
      mode: '@ctitle',
      organization: '@cword(3, 5)',
      publish: '@cword(3, 10)',
      price: '@integer(100, 10000)',
    }
  ],
  'circles|5-20': [
    {
      ...COMMON,
      ...BASE_USER,
      ...USER_LEVEL,
      title: '@ctitle',
      content: '@cparagraph',
      'images|1-9': [
        {
          ...COMMON,
          url: '@image("60x60", "@color", "circle-image")',
        }
      ],
      praiseNum: '@integer(1, 10000)',
      commentNum: '@integer(1, 10000)',
    }
  ],
  'transactions|5-20': [
    {
      ...COMMON,
      name: '@string("upper", 5)',
      websiteName: '@ctitle'
    }
  ],
  'news|5-20': [
    {
      ...COMMON,
      image: '@image("750x300", "@color", "news-image")',
      title: '@ctitle',
      content: '@cparagraph',
    }
  ]
})