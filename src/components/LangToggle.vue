<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const i18n = useI18n()
function toggleLang() {
  i18n.locale.value = i18n.locale.value === 'zh' ? 'en' : 'zh'
}
</script>

<template>
  <button class="!outline-none" @click="toggleLang">
    <Icon icon="carbon:ibm-watson-language-translator" class="text-2xl" />
  </button>
</template>
