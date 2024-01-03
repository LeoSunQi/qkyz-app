/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-07 16:05:24
 * @LastEditTime: 2023-12-07 16:12:24
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules = import.meta.glob('./modules/**/*.ts', {
  import: 'default',
  eager: true,
})
let mockModules: any[] = []

Object.keys(modules).forEach((key) => {
  if (key.includes('./index.ts')) {
    return
  }
  mockModules = mockModules.concat(modules[key])
})

export function setupMock() {
  createProdMockServer(mockModules)
}