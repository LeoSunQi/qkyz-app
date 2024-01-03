<template>
  <div class="container">
    <van-form required="auto" @submit="onSubmit">
      <van-cell-group>
        <van-field
          v-model="form.userName"
          label="昵称"
          name="userName"
          placeholder="请输入姓名"
          label-align="top"
          clearable
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
          v-model="form.cardId"
          label="身份证号"
          name="cardId"
          placeholder="请输入身份证号"
          label-align="top"
          clearable
          :rules="[{ required: true, message: '请填写身份证号' }]"
        />
        <van-field name="uploader" label="身份证正面/反面"  label-align="top">
          <template #input>
            <van-uploader v-model="fileList" multiple />
          </template>
        </van-field>
      </van-cell-group>
      <van-button
        type="primary"
        :loading="loading"
        block
        native-type="submit"
        class="login-btn"
        >提交审核</van-button
      >
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  userName: '',
  cardId: '',
})

const fileList = ref([])

const loading = ref(false)

const onSubmit = () => {}
</script>

<style scoped lang="scss">
.login-btn {
  margin-top: 20px;
}
</style>
