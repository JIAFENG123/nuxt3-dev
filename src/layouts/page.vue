<template>
  <main class="flex w-full h-full justify-center items-center flex-col">
    <TabBar class="mb-6" />
    <section class="flex items-center">
      <DarkToggle class="mb-4 mr-4" />
      <LangToggle class="mb-4" />
    </section>

    <div class="max-h-96 overflow-y-auto max-w-[80%]">
      <slot />
    </div>
  </main>
</template>
