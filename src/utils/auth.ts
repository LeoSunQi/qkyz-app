/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-09 16:59:53
 * @LastEditTime: 2023-12-09 17:52:55
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import Cookies from 'js-cookie'
import { USER_TOKEN } from '@/store/constant'

export const getToken = () => Cookies.get(USER_TOKEN)

export const setToken = (token: string) => Cookies.set(USER_TOKEN, token, { expires: 1 })

export const removeToken = () => Cookies.remove(USER_TOKEN)