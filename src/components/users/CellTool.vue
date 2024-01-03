<template> 
  <div class="cell-wrapper" :style="cellStyle" @click="onClickIcon">
    <div class="l-cell" :style="lCellStyle">
      <van-icon :name="leftIcon" class="l-icon" />
      <span>{{ title }}</span>
    </div>
    <div class="r-cell" :style="textStyle">
      <span>{{ text }}</span>
      <van-icon
        v-show="link"
        :name="rightIcon"
        class="r-icon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, StyleValue } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  title: {
    type: String,
    default: 'cell',
  },
  leftIcon: {
    type: String,
    default: '',
  },
  titleSize: {
    type: String,
    default: '14px',
  },
  text: {
    type: [String, Number],
    default: '',
  },
  textSize: {
    type: String,
    default: '14px',
  },
  textColor: {
    type: String,
    default: '#303133',
  },
  link: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: '',
  },
  rightIcon: {
    type: String,
    default: 'arrow',
  },
  border: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['onRightIcon'])
const onClickIcon = (e: MouseEvent) => {
  emit('onRightIcon', e)
  
  if (props.to) {
    router.push(props.to)
    return
  }

  if (!props.link) return
}

const textStyle = computed(() => {
  const style: StyleValue = {}
  style.fontSize = props.textSize
  style.color = props.textColor
  return style
})

const lCellStyle = computed(() => {
  const style: StyleValue = {}
  style.fontSize = props.titleSize
  return style
})

const cellStyle = computed(() => {
  const style: StyleValue = {}
  style.borderBottom = props.border ? '1px solid #f0f0f0' : 'none'
  return style
})
</script>

<style scoped lang="scss">
.cell-wrapper {
  box-sizing: border-box;
  padding: 15px 0;
  display: flex;
  align-items: center;
  .l-cell {
    flex: 1;
    word-break: break-all;
    white-space: nowrap;
    .l-icon {
      margin-right: 15px;
    }
  }
  .r-cell {
    flex: 1;
    text-align: right;
    word-break: break-all;
    white-space: nowrap;
    .r-icon {
      padding-left: 15px;
    }
  }
}
</style>
