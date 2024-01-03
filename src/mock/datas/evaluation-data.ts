/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-26 19:26:55
 * @LastEditTime: 2023-12-27 21:12:16
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import Mock from 'mockjs'
import { COMMON, BASE_USER, USER_LEVEL } from '.'

const USERS = {
  ...COMMON,
  ...BASE_USER,
  ...USER_LEVEL,
}

export const EvaluationData = Mock.mock({
  'list|10-40': [
    {
      ...USERS,
      type: '@integer(1, 3)',
      status: '@integer(1, 3)',
      evaluationType: '@integer(1, 2)',
      title: '@ctitle',
      content: '@cparagraph',
      rewardMoney: '@integer(10, 100)',
      lockNum: '@integer(1, 100)',
    }
  ],
  'plaza|5-20': [
    {
      ...USERS,
      type: '@integer(1, 2)',
      title: '@ctitle',
      content: '@cparagraph',
      rewardMoney: '@integer(10, 100)',
      evaluationType: '@integer(1, 2)',
      islock: '@boolean',
      leng: '@integer(3, 10)',
      lockPrice: function () {
        return this.islock ? '@integer(10, 100)' : null
      },
      evaluationInfo: function () {
        if (this.type == '2') return {}
        return {
          ...USERS,
          replyNum: '@integer(1, 100)',
          praiseNum: '@integer(1, 100)',
          replyContent: this.islock ? '@string("symbol", 50)' : '@cparagraph',
        }
      },
      evaluations: function () {
        const leng = Object.keys(this.evaluationInfo).length > 0 ? this.leng : 0
        return Array.from({ length: leng as number }, () => this.evaluationInfo)
      },
    }
  ]
})