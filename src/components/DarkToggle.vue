<script setup lang="ts">
const color = useColorMode()
function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="!outline-none" @click="toggleDark">
    <!-- <div class="dark:i-carbon-moon i-carbon-sun" /> -->
    <Icon v-if="color.value === 'light'" icon="carbon:sun" class=" text-2xl" />
    <Icon v-else icon="carbon:moon" class=" text-2xl" />
  </button>
</template>
