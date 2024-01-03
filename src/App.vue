<template>
  <router-view v-slot="{ Component }">
    <keet-alive>
      <component :is="Component" />
    </keet-alive>
  </router-view>
</template>
