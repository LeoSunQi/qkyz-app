<template>
  <div>
    <div class="vip-bg">
      <div class="v-title">
        <van-icon name="award-o" />
        <i>{{ store.setVipText() }}</i>
      </div>
      <div class="v-time">
        <i>{{ store.vipTime }}</i>
      </div>
    </div>
    <div class="container">
      <van-row gutter="20">
        <van-col span="8" v-for="v in vips" :key="v.id">
          <div
            :class="['vip-item', v.id === vipActive ? 'v-active' : '']"
            @click="handleVip(v.id)"
          >
            <div class="v-text">{{ v.name }}</div>
            <div class="v-price l-price">{{ v.price }}</div>
            <div class="v-desc">
              折合<i class="l-price">{{ v.desc }}</i
              >/月
            </div>
          </div>
        </van-col>
      </van-row>
      <van-divider />
      <van-button type="primary" block>{{ butText }}</van-button>
      <div class="v-agreement">
        <van-checkbox v-model="checked" icon-size="18"
          ><a>会员服务协议</a></van-checkbox
        >
      </div>
      <section v-for="r in rules" :key="r.id">
        <van-divider>{{ r.title }}</van-divider>
        <ul class="v-ul">
          <li v-for="p in r.list" class="v-li">{{ p.id }}.{{ p.name }}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import useUserStroe from '@/store/s-user'

const store = useUserStroe()
const vips = ref([
  { id: 0, name: '月卡会员', price: 30, desc: 0 },
  { id: 1, name: '季卡会员', price: 90, desc: 30 },
  { id: 2, name: '年卡会员', price: 360, desc: 60 },
])
const vipActive = ref(0)
const checked = ref(false)
const rules = ref([
  {
    id: 0,
    title: 'VIP会员特权',
    list: [
      { id: 1, name: '会员特权1' },
      { id: 2, name: '会员特权2' },
      { id: 3, name: '会员特权3' },
    ],
  },
  {
    id: 1,
    title: 'VIP进阶规则',
    list: [
      { id: 1, name: '进阶规则1' },
      { id: 2, name: '进阶规则2' },
      { id: 3, name: '进阶规则3' },
    ],
  },
  {
    id: 2,
    title: 'VIP等级规则',
    list: [
      { id: 1, name: '等级规则1' },
      { id: 2, name: '等级规则2' },
      { id: 3, name: '等级规则3' },
    ],
  }
])
const butText = computed(() => (store.vipTime ? '立即续费' : '立即开通'))

const handleVip = (id: number) => {
  vipActive.value = id
}
</script>

<style scoped lang="scss">
.vip-bg {
  box-sizing: border-box;
  padding: 20px;
  background: linear-gradient(150deg, $l-zinc-6, $l-zinc-10);
  height: 150px;
  color: $l-orange-3;
  .v-title {
    padding: 10px 0;
    font-size: 24px;
    font-weight: bold;
    i {
      margin-left: 6px;
    }
  }
}
.vip-item {
  box-sizing: border-box;
  padding: 10px;
  border-radius: 6px;
  min-height: 92px;
  color: $l-zinc-8;
  background-color: $l-zinc-0;
  border: 1px solid $l-zinc-3;
  .v-text {
    font-size: 14px;
    color: $l-gray-8;
  }
  .v-price {
    font-size: 20px;
    font-weight: bold;
    padding: 4px 0;
  }
  .v-desc {
    font-size: 12px;
    color: $l-gray-7;
    i {
      font-weight: bold;
    }
  }
}
.v-active {
  border-color: $l-orange-3;
  background-color: $l-orange-0;
  color: $l-orange-6;
}
.v-agreement {
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  a {
    color: $l-blue-4;
    font-size: 14px;
    font-weight: 600;
  }
}

.l-price::before {
  content: '￥';
  font-size: 80%;
  font-weight: 400;
}

.v-ul {
  line-height: 1.9;
  .v-li {
    color: $l-gray-7;
  }
}
</style>
