/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-08 14:14:35
 * @LastEditTime: 2023-12-08 14:15:32
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import Mock from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'

Mock.Random.extend({
  phone: function () {
    const phonePrefixs = ['132', '135', '189']
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/)
  },
})

export default [] as MockMethod[]