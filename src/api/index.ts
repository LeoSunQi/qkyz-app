/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-12-07 16:38:37
 * @LastEditTime: 2023-12-28 11:09:16
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import M_ATTIC from "./a-attic"
import M_EVALUATION from "./a-evaluation"
import M_QUOTES from "./a-quotes"
import M_HOME from "./a-home"
import M_MINE from "./a-mine"
import M_PROFILES from "./a-profile"
import M_COMMON from "./a-common"

const api = {
  ...M_ATTIC,
  ...M_EVALUATION,
  ...M_QUOTES,
  ...M_HOME,
  ...M_MINE,
  ...M_PROFILES,
  ...M_COMMON
}

export default api