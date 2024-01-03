<template>
  <div class="user-wrapper">
    <div class="avatar" :style="avatarStyle" @click="handleClick">
      <img :src="avatar" :alt="avatar" />
    </div>
    <div class="info"> 
      <div class="header" :style="{ paddingBottom: tagName ? '6px' :  '' }">
        <text class="title" :style="titleStyle">{{ title }}</text>
        <i class="level" v-if="level !== 0" :style="levelStyle">
          <van-icon :name="levelIcon" />
          <span class="level-span">{{ prefixe }}{{ level }}</span>
        </i>
      </div>
      <span class="tag" :style="tagStyle" v-if="tagName">
        <van-icon :name="tagIcon" :size="`${tagSize}px`" class="tag-icon" />
        {{ tagName }}
      </span>
    </div>
  </div>
  <slot></slot>
</template>

<script setup lang="ts">
import { computed, StyleValue } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  avatar: {
    type: String,
    default: '',
  },
  avatarSize: {
    type: [String, Number],
    default: '80',
  },
  // square / circle
  shape: {
    type: String,
    default: 'circle',
  },
  title: {
    type: String,
    default: 'LeoSunQi',
  },
  titleSize: {
    type: [String, Number],
    default: '18',
  },
  titleColor: {
    type: String,
    default: '#333',
  },
  prefixe: {
    type: String,
    default: 'lv.',
  },
  level: {
    type: [String, Number],
    default: 0,
  },
  levelIcon: {
    type: String,
    default: '',
  },
  tagName: {
    type: String,
    default: '',
  },
  tagIcon: {
    type: String,
    default: 'medal',
  },
  tagSize: {
    type: [String, Number],
    default: '12',
  },
  tagColor: {
    type: String,
    default: '#07c160',
  },
  tagBg: {
    type: String,
    default: '#fff',
  },
  to: {
    type: String,
    default: '',
  },
})

const router = useRouter()

const emit = defineEmits(['onClick'])
const handleClick = (e: MouseEvent) => {
  emit('onClick', e)
  if (props.to) {
    router.push(props.to)
    return
  }
}

const tagStyle = computed(() => {
  const style: StyleValue = {}
  style.fontSize = `${props.tagSize}px`
  style.color = props.tagColor
  style.borderColor = props.tagColor
  style.backgroundColor = props.tagBg
  return style
})

const levelStyle = computed(() => {
  const style: StyleValue = {}
  style.fontSize = `${props.titleSize}px`
  return style
})

const titleStyle = computed(() => {
  const style: StyleValue = {}
  style.color = props.titleColor
  style.fontSize = `${props.titleSize}px`
  return style
})

const avatarStyle = computed(() => {
  const style: StyleValue = {}
  style.width = `${props.avatarSize}px`
  style.height = `${props.avatarSize}px`
  style.borderRadius = props.shape === 'circle' ? '100%' : '0'
  return style
})
</script>

<style scoped lang="scss">
.user-wrapper {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .avatar {
    flex-shrink: 0;
    box-sizing: border-box;
    overflow: hidden;
    background-color: $l-gray-1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    width: 100%;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 0 15px;
    .header {
      width: 100%;
      overflow: hidden;
      .title {
        font-weight: bold;
      }
      .level {
        padding: 0 15px;
        color: $l-red-6;
        .level-span {
          padding: 0 6px;
        }
      }
      .login-button {
        min-width: 100px;
      }
    }
    .tag {
      padding: 2px 8px;
      border-radius: 20px;
      border: 1px solid;
      .tag-icon {
        padding-right: 4px;
      }
    }
    .secondary {
      font-size: 12px;
    }
  }
}
</style>
