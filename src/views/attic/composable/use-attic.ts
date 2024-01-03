/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-28 12:37:21
 * @LastEditTime: 2023-12-28 14:04:18
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */

import { showConfirmDialog, showToast } from 'vant'
import { computed } from 'vue'
export default function useAttic() {

  const statusContent = computed(() => {
    return (status: number) => {
      const obj = { text: '审核中', color: '#ef4444' }
      switch (+status) {
        case 2:
          obj.text = '已通过'
          obj.color = '#3b82f6'
          break
        case 3:
          obj.text = '已拒绝'
          obj.color = '#64748b'
          break
        default:
          obj.text = '审核中'
          obj.color = '#ef4444'
      }
      return obj
    }
  })

  const publishTypeContent = computed(() => {
    return (type: number) => {
      let obj = { text: '审核', type: 'danger' }
      switch (type) { 
        case 2:
          obj.text = '发布中'
          obj.type = 'primary'
          break
        case 3:
          obj.text = '已购'
          obj.type = 'success'
          break
        default:
          obj.text = '审核'
          obj.type = 'danger'
      }
      return obj
    }
  })

  const typeText = computed(() => {
    return (type: number) => {
      return type === 1 ? '项目信息' : '交易所信息'
    }
  })

  const overlay = computed(() => {
    return (ispay: boolean) => {
      const style = { filter: 'blur(4px)' }
      if (!ispay) {
        style.filter = 'blur(0px)'
      }
      return style
    }
  })

  const handlePay = (obj: any) => {
    showConfirmDialog({
      title: '购买',
      message: `是否花费 ${obj.price} 元购买该内容？`,
    })
      .then(() => {
        obj.isPay = false
        showToast('购买成功')
      })
      .catch(() => {})
  }

  return {
    statusContent,
    publishTypeContent,
    typeText,
    overlay,
    handlePay
  }
}
