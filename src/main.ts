/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-03 13:29:42
 * @LastEditTime: 2023-12-17 17:21:57
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './router/permission'

import './styles/vant'
import './styles/index.scss'

import { setupMock } from '@/mock'

setupMock()

const app = createApp(App)
app.use(router).use(store).mount('#app')