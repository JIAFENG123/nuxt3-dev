<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { data } = await useFetch<{ data: { content: string } }>('/api/testServer')
</script>

<template>
  <div class="text-center">
    <img src="https://v1.jinrishici.com/all.svg" alt="">
    <p class="mt-7 font-baotuxiaobaiti text-2xl">
      {{ data?.data.content }}
    </p>
  </div>
</template>
