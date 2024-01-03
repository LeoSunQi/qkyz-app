<template>
  <div class="container">
    <cell-tool
      v-for="item in profileData"
      :key="item.id"
      :title="item.title"
      :left-icon="item.icon"
      link
      :to="item.path"
    />
  </div>
</template>

<script setup lang="ts">
import { profileData } from './profileData'
import { CellTool } from '@/components'
</script>

<style lang="scss" scoped></style>
./profileData