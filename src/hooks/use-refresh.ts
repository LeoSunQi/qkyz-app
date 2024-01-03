/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-23 14:15:59
 * @LastEditTime: 2023-12-27 18:54:18
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { ref } from 'vue'
import type { IResultIO, Recordable } from '@/typings'

export type TFetch = (data: Recordable) => Promise<IResultIO>

export default function useRefresh() {
  const refresh = ref(false)
  const loading = ref(false)
  const finished = ref(false)
  const finishedText = ref('没有更多了')
  const list = ref<Recordable[]>([])
  const total = ref(0)
  const pageSize = ref(15)
  const pageNum = ref(0)

  const onLoad = (fetch: TFetch, data: Recordable) => {
    if (refresh.value) {
      list.value = []
      refresh.value = false
    }
    
    if (list.value && list.value.length === 0) {
      pageNum.value = 0
      total.value = 0
    }

    const callback = async () => {
      const defaultData = { pageNum: pageNum.value + 1, pageSize: pageSize.value, ...data }
      const res = await fetch(defaultData)
      return new Promise((resolve, reject) => {
        if (res.code === 0) {
          // console.log('res :>> ', res.data);
          let newList = []
          newList = res.data.list
          total.value = res.data.total
          list.value = [...list.value, ...newList]

          if (list.value.length >= total.value) {
            finished.value = true
            finishedText.value = '没有更多了'
            return
          }
          loading.value = false
          return resolve(res.data)
        }
        return reject([])
      })
    }

    if (fetch && fetch instanceof Function) {
      callback()
    }
  }

  const onRefresh = (fetch: any, data: Recordable) => {
    list.value = []
    finished.value = false
    loading.value = true
    onLoad(fetch, data)
  }

  return {
    total,
    list,
    refresh,
    loading,
    finished,
    finishedText,
    onLoad,
    onRefresh
  }
}