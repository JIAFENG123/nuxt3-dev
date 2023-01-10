<template>
  <Body :class="`${$i18n.locale === 'en' ? 'font-LuckiestGuy' : 'font-baotuxiaobaiti'}`" />
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
