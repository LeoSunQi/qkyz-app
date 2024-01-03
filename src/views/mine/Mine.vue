<template>
  <div class="mine-wrapper">
    <div class="mine-bg" :style="{ background: store.bgLinearGradient }">
      <user
        :avatar="users.avatar"
        :title="users.userName"
        :level="users.level"
        :tag-name="store.communityText"
        :tag-color="store.communityColor"
        :tag-bg="store.communityBgColor"
        to="/profile"
      />
      <level
        class="level"
        :title="store.communityText"
        :bg="store.communityColor"
        :color="store.communityBgColor"
      />
    </div>
    <div class="grid-wrapper">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="item in grids"
          :key="item.id"
          :icon="item.icon"
          :text="item.text"
          :to="item.to"
        />
      </van-grid>
    </div>
    <div class="wrapper">
      <cell-tool
        left-icon="friends-o"
        title="实名认证"
        :to="authContent(users.isAuth).to"
        :link="authContent(users.isAuth).link"
        :text="authContent(users.isAuth).text"
      />
      <cell-tool
        v-for="item in cells"
        :key="item.id"
        :left-icon="item.icon"
        :title="item.title"
        :to="item.link"
        link
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { User, Level, CellTool } from '@/components'
import useUserStroe from '@/store/s-user'

const store = useUserStroe()
const users = computed(() => store.userinfo)
const authContent = computed(() => {
  return (auth: boolean) => {
    const obj = { to: '/auth', link: true, text: '' }
    if (auth) {
      obj.to = ''
      obj.link = false
      obj.text = '已认证'
    }
    return obj
  }
})

const grids = ref([
  { id: 0, icon: 'friends-o', text: '我的团队', to: '/team' },
  { id: 1, icon: 'credit-pay', text: '钱包', to: '/wallet' },
  { id: 2, icon: 'font-o', text: '社群', to: '/community' },
])

const cells = ref([
  { id: 1, icon: 'manager-o', title: '邀请好友', link: '/invite' },
  { id: 2, icon: 'gem-o', title: '商务合作', link: '/business' },
  { id: 3, icon: 'setting-o', title: '系统设置', link: '/setting' },
])
</script>

<style scoped lang="scss">
.mine-wrapper {
  .mine-bg {
    padding: 40px 20px 0px 20px;
    .level {
      margin-top: 30px;
    }
  }
  .grid-wrapper {
    padding: 10px 0;
  }
  .wrapper {
    box-sizing: border-box;
    padding: 10px 20px;
  }
}
</style>
