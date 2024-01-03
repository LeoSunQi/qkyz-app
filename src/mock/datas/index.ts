/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-08 14:09:13
 * @LastEditTime: 2023-12-28 09:49:36
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
export const COMMON = {
  id: '@id',
  createTime: '@datetime',
  updateTime: '@datetime',
}

export const BASE_USER = {
  avatar: '@image("100x100", "@color", "avatar")',
  userName: '@cname',
  nickName: '@cname',
  gender: '@integer(1, 2)',
  birthday: '@datetime("yyyy-MM-dd")',
  email: '@email',
  phone: '@phone',
  isAuth: '@boolean',
  uid: '@guid'
}

export const USER_LEVEL = {
  level: '@integer(1, 100)',
  community: '@integer(1, 6)',
  vip: '@integer(0, 3)',
  vipTime: '@now("yyyy-MM-dd")'
}

export const COMMUNITY_INFO = {
  avatar: '@image("100x100", "@color", "avatar")',
  name: '@cword(2,5)',
  content: '@cparagraph',
  userName: '@cname',
  phone: '@phone',
  QcCode: '@image("100x100", "@color", "二维码")',
}
