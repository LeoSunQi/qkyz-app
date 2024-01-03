<template>
  <div class="container e-list">
    <van-row :gutter="20">
      <van-col span="18">
        <user
          :avatar="obj.avatar"
          :title="obj.userName"
          :level="obj.level"
          :tag-name="communityContent(obj.community)?.text"
          :tag-color="communityContent(obj.community)?.color"
          :tag-bg="communityContent(obj.community)?.bgColor"
        />
      </van-col>
      <van-col span="6" class="head-col el-col">
        <div
          v-show="obj.type === 1"
          class="elc-lock"
          :style="{ color: lockContent(obj.islock).color }"
          @click="onUnlock(obj)"
        >
          <van-icon
            v-show="obj.islock"
            name="browsing-history"
            class="pay-icon"
          />
          <span>{{ lockContent(obj.islock).text }}</span>
          <div v-show="obj.islock" class="elc-price">{{ obj.lockPrice }}</div>
        </div>
      </van-col>
    </van-row>
    <div class="el-content">
      <div class="elc-title">{{ obj.title }}</div>
      <div class="elc-text">{{ obj.content }}</div>
      <div class="elc-footer">
        {{ obj.createTime }}
        <span>{{ evaluationText(obj.evaluationType) }}</span>
      </div>
    </div>
    <van-divider />
    <div class="container">
      <div class="el-ul" v-for="l in obj.evaluations" :key="l.id">
        <van-row :gutter="20">
          <van-col span="16">
            <user
              avatar-size="50"
              title-size="14"
              :avatar="l.avatar"
              :title="l.userName"
              :level="l.level"
              :tag-name="communityContent(l.community)?.text"
              :tag-color="communityContent(l.community)?.color"
              :tag-bg="communityContent(l.community)?.bgColor"
            />
          </van-col>
          <van-col span="8" class="elu-col">
            <div class="eluc-cell">
              评测回复数: <i>{{ l.replyNum }}</i>
            </div>
            <div class="eluc-cell">
              好评率: <em>{{ l.praiseNum }}%</em>
            </div>
          </van-col>
        </van-row>
        <div
          class="elu-content elu-content-top"
          :style="lockContent(obj.islock).style"
        >
          <div class="eluc-text-4">{{ l.replyContent }}</div>
          <div class="eluc-tool">
            <span>{{ l.createTime }}</span>
            <div v-show="!obj.islock">
              <van-button
                type="primary"
                size="mini"
                class="btn"
                @click="onReward"
                >采纳</van-button
              >
            </div>
          </div>
        </div>
        <van-divider />
      </div>
    </div>
    <van-popup
      v-model:show="show"
      round
      closeable
      teleport="body"
      :style="{ padding: '20px' }"
    >
      <div class="popup-container popup-center">
        <div class="p-title">采纳 / 评价</div>
        <div class="p-content">
          <van-rate v-model="form.rateNum" class="p-rate" />
          <van-field
            v-model="form.price"
            type="number"
            placeholder="请输入赏金"
            label="赏金分配（USTD）"
            label-align="top"
            clearable
            class="p-input"
          />
        </div>
        <div class="p-footer">
          <van-button type="primary" block @click="submit">采纳</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onActivated } from 'vue'
import { useRoute } from 'vue-router'
import { communityContent } from '@/utils/format'
import { User } from '@/components'
import { showToast } from 'vant'
import { useEvaluation } from './composable'

const { lockContent, evaluationText, onUnlock } = useEvaluation()
const route = useRoute()
const id = ref(route.params.id as string)
const obj = ref(JSON.parse(route.query.obj as string))
const show = ref(false)
const form = reactive({
  price: '',
  rateNum: 1,
})

const submit = () => {
  if (!form.price) return showToast('请输入打赏金额')
  showToast('采纳成功')
  show.value = false
  form.price = ''
  form.rateNum = 1
}

const onReward = () => {
  show.value = true
}

onActivated(() => {
  if (id.value !== route.params.id) {
    id.value = route.params.id as string
    obj.value = ref(JSON.parse(route.query.obj as string))
  }
})
</script>

<style scoped lang="scss">
@import '@/styles/popup.scss';
@import '@/styles/evaluation-list.scss';

.head-col {
  margin-top: 15px;
}
</style>
./composable/use-evaluation
