<script setup lang="ts">
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <div class="flex w-full justify-center items-center flex-col">
    <Head>
      <Title>Home</Title>
    </Head>
    <div>
      <div class="max-w-md py-4 px-8 bg-white dark:bg-[#333] shadow-lg rounded-lg my-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <img class="w-20 h-20 object-cover rounded-full border-2 border-green-500" src="nuxt.png">
        </div>
        <div>
          <h2 class="text-gray-800 dark:text-gray-300 text-3xl font-semibold">
            Nuxt
          </h2>
          <p class="mt-2 text-gray-600 dark:text-gray-400">
            {{ $t('nuxt-intro') }}
          </p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-indigo-500">VUE</a>
        </div>
      </div>
    </div>
  </div>
</template>
