/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-26 11:33:54
 * @LastEditTime: 2023-12-28 09:52:13
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import type { Recordable } from '@/typings'
import { MockMethod } from 'vite-plugin-mock'
import { basicsResponse, paginationResponse } from '../utils/resultFn'
import { QuotesData } from '../datas/quotes-data'
import { 
  QUOTES_CIRCLES_URL,
  QUOTES_NEWS_URL,
  QUOTES_PERSONS_URL,
  QUOTES_TRANSACTIONS_URL
} from '@/constants/api-constant'

const quotes_transactions = {
  url: QUOTES_TRANSACTIONS_URL,
  method: 'post',
  response: (req: Recordable) => {
    const { pageNum = 1, pageSize = 15 } = req.body
    const data = paginationResponse({
      data: QuotesData.transactions,
      total: QuotesData.transactions.length,
      pageNum,
      pageSize,
    })
    return basicsResponse(data)
  },
}

const quotes_circles = {
  url: QUOTES_CIRCLES_URL,
  method: 'post',
  response: (req: Recordable) => {
    const { pageNum = 1, pageSize = 15 } = req.body
    const data = paginationResponse({
      data: QuotesData.circles,
      total: QuotesData.circles.length,
      pageNum,
      pageSize,
    })
    return basicsResponse(data)
  },
}

const quotes_news = {
  url: QUOTES_NEWS_URL,
  method: 'post',
  response: (req: Recordable) => {
    const { pageNum = 1, pageSize = 15 } = req.body
    const data = paginationResponse({
      data: QuotesData.news,
      total: QuotesData.news.length,
      pageNum,
      pageSize,
    })
    return basicsResponse(data)
  },
}

const quotes_persons = {
  url: QUOTES_PERSONS_URL,
  method: 'post',
  response: (req: Recordable) => {
    const { pageNum = 1, pageSize = 15 } = req.body
    const data = paginationResponse({
      data: QuotesData.persons,
      total: QuotesData.persons.length,
      pageNum,
      pageSize
    })
    return basicsResponse(data)
  },
}

export default [
  quotes_news, 
  quotes_transactions, 
  quotes_circles, 
  quotes_persons
] as MockMethod[]