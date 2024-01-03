/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-17 13:35:03
 * @LastEditTime: 2023-12-28 10:31:33
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import request from '@/utils/request'
import type { IResultIO } from '@/typings'
import { 
  PROFILE_CLUE_URL,
  PROFILE_COMMENT_URL,
  PROFILE_EVALUATION_URL,
  PROFILE_FANS_URL,
  PROFILE_GOODJOB_URL,
  PROFILE_PUBLISH_URL
} from '@/constants/api-constant'

export const MProfileEvaluationApi = (): Promise<IResultIO> => request({
  url: PROFILE_EVALUATION_URL,
  method: 'get'
})

export const MProfileClueApi = (): Promise<IResultIO> => request({
  url: PROFILE_CLUE_URL,
  method: 'get'
})

export const MProfileGoodJobApi = (): Promise<IResultIO> => request({
  url: PROFILE_GOODJOB_URL,
  method: 'get'
})

export const MProfileCommentApi = (): Promise<IResultIO> => request({
  url: PROFILE_COMMENT_URL,
  method: 'get'
})

export const MProfileFansApi = (): Promise<IResultIO> => request({
  url: PROFILE_FANS_URL,
  method: 'get'
})

export const MProfilePulishApi = (): Promise<IResultIO> => request({
  url: PROFILE_PUBLISH_URL,
  method: 'get'
})

const M_PROFILES = { 
  MProfileEvaluationApi,
  MProfileClueApi,
  MProfileGoodJobApi,
  MProfileCommentApi,
  MProfileFansApi,
  MProfilePulishApi
}

export default M_PROFILES