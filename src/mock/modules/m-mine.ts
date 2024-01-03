/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-18 15:46:17
 * @LastEditTime: 2023-12-28 10:07:54
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { MockMethod } from 'vite-plugin-mock'
import { basicsResponse } from '../utils/resultFn'
import { 
  MineTeams,
  MineWallet,
  MineCommunitys,
  MineBanners,
  MineBusiness
} from '../datas/mine-data'
import { 
  MINE_BANNER_URL,
  MINE_BUSINESS_URL,
  MINE_COMMUNITY_URL,
  MINE_TEAM_URL,
  MINE_WALLET_URL,
 } from '@/constants/api-constant'

const mine_business = {
  url: MINE_BUSINESS_URL,
  method: 'get',
  response: () => basicsResponse(MineBusiness)
}

const mine_banner = {
  url: MINE_BANNER_URL,
  method: 'get',
  response: () => basicsResponse(MineBanners)
}

const mine_community = {
  url: MINE_COMMUNITY_URL,
  method: 'get',
  response: () => basicsResponse(MineCommunitys)
}

const mine_wallet = {
  url: MINE_WALLET_URL,
  method: 'get',
  response: () => basicsResponse(MineWallet)
}

const mine_team = {
  url: MINE_TEAM_URL,
  method: 'get',
  response: () => basicsResponse(MineTeams)
}

export default [
  mine_business,
  mine_banner,
  mine_community,
  mine_wallet,
  mine_team
] as MockMethod[]