<template>
  <ul class="flex w-56 justify-around items-center cursor-pointer">
    <li v-for="item of tabs" :key="item.path" class="dark:text-white hover:text-green-400 dark:hover:text-green-400">
      <NuxtLink :to="item.path" tag="a">
        {{ $t(item.name) }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const tabs = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'test',
    path: '/test',
  },
  {
    name: 'server',
    path: '/server',
  },
]
</script>
