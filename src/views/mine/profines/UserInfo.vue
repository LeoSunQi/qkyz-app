<template>
  <div>
    <div class="user-box" :style="{ background: store.bgLinearGradient }">
      <User
        :avatar="user.avatar"
        :title="user.userName"
        :level="user.level"
        :tag-name="store.communityText"
        :tag-color="store.communityColor"
        :tag-bg="store.communityBgColor"
      />
      <van-divider />
      <div class="user-grid">
        <van-grid :column-num="3">
          <van-grid-item>
            <div class="nums">{{ formatUnit(user.fans) }}</div>
            <div>粉丝</div>
          </van-grid-item>
          <van-grid-item>
            <div class="nums">{{ formatUnit(user.comment) }}</div>
            <div>关注</div>
          </van-grid-item>
          <van-grid-item>
            <div class="nums">{{ formatUnit(user.praise) }}</div>
            <div>获赞</div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <div class="container">
      <div class="tool-item">
        <cell-tool title="昵称" :text="user.nickName" />
        <cell-tool title="性别" :text="gender" />
        <cell-tool title="生日" :text="user.birthday" />
        <cell-tool title="邮箱" :text="user.email" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useUserStroe from '@/store/s-user'
import { formatUnit } from '@/utils/format'
import { User, CellTool } from '@/components'

const store = useUserStroe()

const user = computed(() => store.userinfo)
const gender = computed(() => (store.userinfo.gender === 1 ? '男' : '女'))
</script>

<style lang="scss" scoped>
.user-box {
  padding: 20px;
}
.user-grid {
  font-size: 12px;
  .nums {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 6px;
  }
}
</style>
