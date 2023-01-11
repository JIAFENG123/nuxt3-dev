<template>
  <PageHeader>
    <PageTitle :text="renderContent.title" />
  </PageHeader>
  <PageBody>
    <ContentRenderer :value="renderContent">
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </PageBody>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'page',
})
const route = useRoute()
const { data: xdata } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne(),
)
const renderContent = xdata as (Record<string, any>)
</script>
