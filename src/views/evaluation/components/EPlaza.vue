<template>
  <div class="plaza">
    <refresh :on-fetch="() => api.MEvaluationPlazaApi({})" v-slot="slotProps">
      <div v-for="l in slotProps.data" :key="l.id" class="e-list">
        <van-row :gutter="20">
          <van-col span="18" @click="l.type === 1 ? toDetails(l) : null">
            <user
              avatar-size="60"
              :avatar="l.avatar"
              :title="l.userName"
              :level="l.level"
              :tag-name="communityContent(l.community)?.text"
              :tag-color="communityContent(l.community)?.color"
              :tag-bg="communityContent(l.community)?.bgColor"
            />
          </van-col>
          <van-col span="6" class="el-col">
            <div
              v-show="l.type === 1"
              class="elc-lock"
              :style="{ color: lockContent(l.islock).color }"
              @click="onUnlock(l)"
            >
              <van-icon
                v-show="l.islock"
                name="browsing-history"
                class="pay-icon"
              />
              <span>{{ lockContent(l.islock).text }}</span>
              <div v-show="l.islock" class="elc-price">{{ l.lockPrice }}</div>
            </div>
            <div class="elc-tag">
              <van-tag :type="(typeContent(l.type).type as TagType)" plain>{{
                typeContent(l.type).text
              }}</van-tag>
            </div>
          </van-col>
        </van-row>
        <div class="el-content">
          <div class="elc-title">{{ l.title }}</div>
          <div class="elc-text">
            <van-text-ellipsis
              rows="2"
              :content="l.content"
              expand-text="展开"
              collapse-text="收起"
            />
          </div>
          <div class="elc-footer">
            <span>{{ l.createTime }}</span>
            <span>{{ evaluationText(l.evaluationType) }}</span>
          </div>
        </div>
        <div
          class="container el-lock el-ul"
          v-show="l.type === 1"
          @click="toDetails(l)"
        >
          <van-row :gutter="20">
            <van-col span="16">
              <user
                avatar-size="50"
                :avatar="l.evaluationInfo.avatar"
                title-size="14"
                :title="l.evaluationInfo.userName"
                :level="l.evaluationInfo.level"
                :tag-name="communityContent(l.evaluationInfo.community)?.text"
                :tag-color="communityContent(l.evaluationInfo.community)?.color"
                :tag-bg="communityContent(l.evaluationInfo.community)?.bgColor"
                tag-size="10"
              />
            </van-col>
            <van-col span="8" class="elu-col">
              <div class="eluc-cell">
                评测回复数: <i>{{ l.evaluationInfo.replyNum }}</i>
              </div>
              <div class="eluc-cell">
                好评率: <em>{{ l.evaluationInfo.praiseNum }}%</em>
              </div>
            </van-col>
          </van-row>
          <div class="elu-content">
            <div class="eluc-text" :style="lockContent(l.islock).style">
              {{ l.evaluationInfo.replyContent }}
            </div>
            <div class="eluc-footer" :style="lockContent(l.islock).style">
              {{ l.evaluationInfo.createTime }}
            </div>
          </div>
        </div>
        <div class="el-tool" v-show="l.type === 2">
          <div class="elt-item elt-price">
            <van-icon name="gold-coin" />
            <span
              >赏金 <i>{{ l.rewardMoney }}</i></span
            >
          </div>
          <div class="elt-item" @click="showAnswers(l.id)">
            <van-icon name="chat" />
            <span>回答</span>
          </div>
        </div>
        <van-divider />
      </div>
    </refresh>
  </div>
  <van-popup
    v-model:show="show"
    teleport="body"
    position="bottom"
    round
    closeable
    :style="{ height: '70%' }"
  >
    <div class="popup-container">
      <div class="p-title">回答</div>
      <div class="p-content">
        <van-field
          v-model="content"
          rows="10"
          type="textarea"
          maxlength="500"
          placeholder="请输入回答"
          show-word-limit
          class="p-input-bg"
        />
      </div>
      <div class="p-footer">
        <van-button type="primary" block @click="submitAnswer">提交</van-button>
      </div>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import api from '@/api'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { communityContent } from '@/utils/format'
import { Refresh, User } from '@/components'
import { showToast, TagType } from 'vant'
import { useEvaluation } from '../composable'

const { lockContent, typeContent, evaluationText, onUnlock } = useEvaluation()
const router = useRouter()
const show = ref(false)
const cid = ref('')
const content = ref()

const toDetails = (item: any) => {
  const obj = JSON.stringify(item)
  router.push({
    path: `/evaluation/details/${item.id}`,
    query: { obj },
  })
}

const submitAnswer = () => {
  if (!content.value) return showToast('请输入答案')
  showToast(`提交成功${cid.value}`)
  show.value = false
}

const showAnswers = (id: string) => {
  show.value = true
  cid.value = id
}
</script>

<style scoped lang="scss">
@import '@/styles/popup.scss';
@import '@/styles/evaluation-list.scss';
.plaza {
  width: 100%;
  height: 100%;
}
</style>
../composable/use-evaluation
