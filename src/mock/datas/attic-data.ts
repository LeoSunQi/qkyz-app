/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-28 11:12:03
 * @LastEditTime: 2023-12-28 14:13:05
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import Mock from 'mockjs'
import { BASE_USER, COMMON, USER_LEVEL } from '.'

const Users = {
  ...COMMON,
  ...BASE_USER,
  ...USER_LEVEL,
}

export const Attics = Mock.mock({
  'list|10-30': [
    {
      ...Users,
      type: '@integer(1, 2)',
      ispay: '@boolean',
      title: '@ctitle',
      content: function () {
        return this.ispay ? '@string("symbol", 50)' : '@cparagraph'
      },
      price: function () {
        return this.ispay ? '@integer(100, 1000)' : '0'
      },
      pay_Time: '@datetime'
    }
  ],
  'infos|10-30': [
    {
      ...Users,
      type: '@integer(1, 2)',
      publish_type: '@integer(1, 3)',
      status: '@integer(1, 3)',
      title: '@ctitle',
      content: '@cparagraph',
      price: '@integer(100, 1000)',
      pay_num: '@integer(5, 100)',
      total_price: function() {
        const price = Number(this.price)
        const pay_num = Number(this.pay_num)
        return price * pay_num
      }
    }
  ]
})