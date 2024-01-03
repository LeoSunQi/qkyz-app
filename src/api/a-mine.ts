/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-18 15:48:45
 * @LastEditTime: 2023-12-28 10:10:14
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import request from '@/utils/request'
import type { IResultIO } from '@/typings'
import { 
  MINE_BANNER_URL,
  MINE_BUSINESS_URL,
  MINE_COMMUNITY_URL,
  MINE_TEAM_URL,
  MINE_WALLET_URL,
 } from '@/constants/api-constant'

export const MMineBusinessApi = () :Promise<IResultIO> => request({
  url: MINE_BUSINESS_URL,
  method: 'get',
})

export const MMineBannerApi = () :Promise<IResultIO> => request({
  url: MINE_BANNER_URL,
  method: 'get',
})

export const MMineCommunityApi = () :Promise<IResultIO> => request({
  url: MINE_COMMUNITY_URL,
  method: 'get'
})

export const MMineWalletApi = () :Promise<IResultIO> => request({
  url: MINE_WALLET_URL,
  method: 'get'
})

export const MMineTeamApi = (): Promise<IResultIO> => request({
  url: MINE_TEAM_URL,
  method: 'get'
})

const M_MINE = { 
  MMineBusinessApi,
  MMineBannerApi,
  MMineCommunityApi,
  MMineWalletApi,
  MMineTeamApi
}

export default M_MINE