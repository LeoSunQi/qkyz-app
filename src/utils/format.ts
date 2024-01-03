/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-15 13:02:25
 * @LastEditTime: 2023-12-20 15:06:02
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */

export const communityContent = (value: number) => {
  if (!value) return
  const obj = { text: '青铜粉丝', color: '#1989fa', bgColor: '#fff' }
  switch (+value) {
    case 2:
      obj.text = '白银玩家'
      obj.color = '#64748b'
      obj.bgColor = '#fff'
      break
    case 3:
      obj.text = '黄金群主'
      obj.color = '#f97316'
      obj.bgColor = '#ffedd5'
      break
    case 4:
      obj.text = '铂金社区长'
      obj.color = '#22c55e'
      obj.bgColor = '#dcfce7'
      break
    case 5:
      obj.text = '钻石股东'
      obj.color = '#10b981'
      obj.bgColor = '#ecfdf5'
      break
    case 6:
      obj.text = '联合创始人'
      obj.color = '#6366f1'
      obj.bgColor = '#e0e7ff'
      break
    default:
      obj.text = '青铜粉丝'
      obj.color = '#0ea5e9'
      obj.bgColor = '#e0f2fe'
  }
  return obj
}

export const formatUnit = (value: number, leng: number = 10000, unit: string = '万'): string | number => {
  if (!value) return ''
  if (value >= leng) {
    value = (value / leng)
    return value.toFixed(1) + unit
  }
  return value
}