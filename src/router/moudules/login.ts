/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-09 15:51:02
 * @LastEditTime: 2023-12-21 17:30:56
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import type { RouteRecordRaw } from "vue-router"

const loginRouterMap: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/Login.vue"),
    meta: { title: "登录" }
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/login/Register.vue"),
    meta: { title: "注册" }
  },
  {
    path: "/forget",
    name: "Forget",
    component: () => import("@/views/login/Forget.vue"),
    meta: { title: "忘记密码" }
  },
  {
    path: "/reset-pass",
    name: "Reset",
    component: () => import("@/views/login/ResetPass.vue"),
    meta: { title: "重置密码" }
  }
]

export default loginRouterMap