/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-09 15:34:56
 * @LastEditTime: 2023-12-09 16:25:38
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
export type Recordable<T = any> = Record<string, T>

export interface IResultIO {
  code: number | string
  message: string
  data: Recordable
}
