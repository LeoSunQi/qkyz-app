/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-03 13:21:28
 * @LastEditTime: 2023-12-09 17:04:00
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'js-cookie' 