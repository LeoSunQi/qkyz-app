<template>
  <div>
    <div class="header-wrapper">
      <div class="h-item h-left">
        <div class="t-wrapper">
          <van-badge dot :offset="[-10, 10]" position="top-left">
            <span class="title">总资产</span>
          </van-badge>
        </div>
        <div class="price">{{ obj.total }}</div>
        <van-button type="default" round plain size="small" class="btn"
          >提现</van-button
        >
      </div>
      <div class="h-item h-right">
        <div class="t-wrapper">
          <van-badge
            dot
            :offset="[-10, 10]"
            position="top-left"
            color="#07c160"
          >
            <span class="title">可提现</span>
          </van-badge>
        </div>
        <div class="price">{{ obj.amount }}</div>
        <van-button type="warning" round plain size="small" class="btn"
          >充值</van-button
        >
      </div>
    </div>
    <div class="list-wrapper container">
      <div class="l-title">余额记录</div>
      <cell-tool
        left-icon="balance-o"
        title="推广成为会员"
        :text="formatVal(obj.extendAmount, 'plus').text"
        :text-color="formatVal(obj.extendAmount, 'plus').color"
      />
      <cell-tool
        left-icon="balance-o"
        title="股权释放"
        :text="formatVal(obj.stock, 'plus').text"
        :text-color="formatVal(obj.stock, 'plus').color"
      />
      <cell-tool
        left-icon="balance-o"
        title="持币生息奖金"
        :text="formatVal(obj.bonus, 'plus').text"
        :text-color="formatVal(obj.bonus, 'plus').color"
      />
      <cell-tool
        left-icon="balance-o"
        title="提现"
        :text="formatVal(obj.withdraw, 'plus').text"
        :text-color="formatVal(obj.withdraw, 'plus').color"
      />
      <cell-tool
        left-icon="balance-o"
        title="评测收入"
        :text="formatVal(obj.income, 'minus').text"
        :text-color="formatVal(obj.income, 'minus').color"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import api from '@/api'
import { reactive, onMounted, computed } from 'vue'
import { CellTool } from '@/components'

const obj = reactive({
  total: 0,
  amount: 0,
  extendAmount: 0,
  stock: 0,
  bonus: 0,
  withdraw: 0,
  income: 0,
})

const formatVal = computed(() => {
  return (num: number, val: string) => {
    let obj = { text: '', color: '' }
    if (val === 'plus') {
      obj.text = `+ ${num} USDT`
      obj.color = '#0052d9'
    }
    if (val === 'minus') {
      obj.text = `- ${num} USDT`
      obj.color = '#ee0a24'
    }
    return obj
  }
})

const getDatas = async () => {
  const { code, data } = await api.MMineWalletApi()
  if (+code === 0) {
    obj.total = data.total
    obj.amount = data.amount
    obj.stock = data.stock
    obj.extendAmount = data.extendAmount
    obj.bonus = data.bonus
    obj.withdraw = data.withdraw
    obj.income = data.income
  }
}

onMounted(() => {
  getDatas()
})
</script>

<style scoped lang="scss">
.header-wrapper {
  padding: 40px 0;
  background: linear-gradient(150deg, $l-blue-5, $l-blue-10);
  display: flex;
  align-items: center;
  .h-item {
    flex: 1;
    text-align: center;
    color: $l-white;
    box-sizing: border-box;
    padding: 0 15px;
    .t-wrapper {
      .title {
        font-size: 14px;
        &::after {
          content: ' (USDT)';
        }
      }
    }
    .price {
      margin: 10px 0 20px 0;
      font-size: 22px;
      font-weight: bold;
    }
    .btn {
      width: 100px;
    }
  }
}

.l-title {
  margin-bottom: 15px;
}
</style>
