/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-26 11:34:23
 * @LastEditTime: 2023-12-28 09:50:38
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import request from '@/utils/request'
import type { IResultIO, Recordable } from '@/typings'
import { 
  QUOTES_CIRCLES_URL,
  QUOTES_NEWS_URL,
  QUOTES_PERSONS_URL,
  QUOTES_TRANSACTIONS_URL
} from '@/constants/api-constant'

export const MQuotesNewsApi = (data?: Recordable): Promise<IResultIO> => request({
  url: QUOTES_NEWS_URL,
  method: 'post',
  data
})

export const MQuotesTransactionApi = (data?: Recordable): Promise<IResultIO> => request({
  url: QUOTES_TRANSACTIONS_URL,
  method: 'post',
  data
})

export const MQuotesCirclesApi = (data?: Recordable): Promise<IResultIO> => request({
  url: QUOTES_CIRCLES_URL,
  method: 'post',
  data
})

export const MQuotesPersonsApi = (data?: Recordable): Promise<IResultIO> => request({
  url: QUOTES_PERSONS_URL,
  method: 'post',
  data
})

const M_QUOTES = { 
  MQuotesNewsApi,
  MQuotesTransactionApi,
  MQuotesCirclesApi,
  MQuotesPersonsApi
}

export default M_QUOTES