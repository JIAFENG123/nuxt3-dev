<script setup lang="ts">
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <ContentDoc>
    <template #default="{ doc }">
      <PageHeader>
        <PageTitle :text="doc.title" />
      </PageHeader>
      <PageBody>
        <PageSection>
          <ContentRenderer :value="doc" />
        </PageSection>
      </PageBody>
    </template>
    <!-- <template #empty>
      <h1>Post in empty</h1>
    </template>
  <template #not-found>
      <Error :code="404" wrap />
    </template> -->
    <template #not-found>
      <h1>Document not found</h1>
    </template>
  </ContentDoc>
</template>
