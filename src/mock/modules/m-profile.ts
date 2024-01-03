/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-16 14:15:56
 * @LastEditTime: 2023-12-28 10:27:58
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { MockMethod } from 'vite-plugin-mock'
import { basicsResponse } from '../utils/resultFn'
import { MineProfiles } from '../datas/mine-data'
import { 
  PROFILE_CLUE_URL,
  PROFILE_COMMENT_URL,
  PROFILE_EVALUATION_URL,
  PROFILE_FANS_URL,
  PROFILE_GOODJOB_URL,
  PROFILE_PUBLISH_URL
 } from '@/constants/api-constant'

const profile_evaluation = {
  url: PROFILE_EVALUATION_URL,
  method: 'get',
  response: () => basicsResponse(MineProfiles.evaluation)
}

const profile_clue = {
  url: PROFILE_CLUE_URL,
  method: 'get',
  response: () => basicsResponse(MineProfiles.clue)
}

const profile_goodjob = {
  url: PROFILE_GOODJOB_URL,
  method: 'get',
  response: () => basicsResponse(MineProfiles.goodjob)
}

const profile_comment = {
  url: PROFILE_COMMENT_URL,
  menthod: 'get',
  response: () => basicsResponse(MineProfiles.comment)
}

const profile_fans = {
  url: PROFILE_FANS_URL,
  method: 'get',
  response: () => basicsResponse(MineProfiles.fans)
}

const profile_publish = {
  url: PROFILE_PUBLISH_URL,
  method: 'get',
  response: () => basicsResponse(MineProfiles.pulish)
}

export default [
  profile_evaluation,
  profile_clue,
  profile_goodjob,
  profile_comment,
  profile_fans,
  profile_publish
] as MockMethod[]