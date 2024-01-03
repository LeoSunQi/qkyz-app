/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-27 22:27:58
 * @LastEditTime: 2023-12-27 23:01:49
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { showConfirmDialog, showToast } from 'vant'
import { computed } from 'vue'

export default function useEvaluation() {

  const benefitText = computed(() => {
    return (obj: any) => {
      return obj.type === 1 || obj.type === 2 ? '赏金:' : '收益:'
    }
  })

  const statusContent = computed(() => {
    return (item: any) => {
      let obj = { text: '审核中', color: '#ef4444' }
      switch (+item.status) {
        case 2:
          obj.text = '已通过'
          obj.color = '#22c55e'
          break
        case 3:
          obj.text = '已拒绝'
          obj.color = '#71717a'
          break
        default:
          obj.text = '审核中'
          obj.color = '#ef4444'
      }
      return obj
    }
  })

  const stContent = computed(() => {
    return (type: number) => {
      let obj = { text: '审核', type: 'danger' }
      switch (+type) {
        case 2:
          obj.text = '评测中'
          obj.type = 'primary'
          break
        case 3:
          obj.text = '已评测'
          obj.type = 'success'
          break
        default:
          obj.text = '审核'
          obj.type = 'danger'
      }
      return obj
    }
  })

  const lockContent = computed(() => {
    return (lock: boolean) => {
      let obj = {
        text: '解锁',
        color: '#ef4444',
        style: { filter: 'blur(4px)' }
      }
      if (!lock) {
        obj.text = ''
        obj.color = '#eab308'
        obj.style.filter = 'blur(0px)'
      }
      return obj
    }
  })

  const typeContent = computed(() => {
    return (type: number) => {
      let obj = { text: '已评测', type: 'primary' }
      if (type === 2) {
        obj.text = '待评测'
        obj.type = 'warning'
      }
      return obj
    }
  })

  const evaluationText = computed(() => {
    return (type: number) => {
      return type === 1 ? '项目评测' : '交易所评测'
    }
  })

  const onUnlock = (obj: any) => {
    showConfirmDialog({
      title: '解锁',
      message: `是否花费 ${obj.lockPrice} 元解锁该内容？`,
    })
      .then(() => {
        obj.islock = false
        showToast('解锁成功')
      })
      .catch(() => { })
  }

  return {
    onUnlock,
    benefitText,
    statusContent,
    stContent,
    lockContent,
    typeContent,
    evaluationText
  }
}