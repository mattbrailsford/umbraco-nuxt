<template>
    <div>
      <component v-if="pageData.contentTypeAlias" :key="pageData.id" :content="pageData" :is="pageData.contentTypeAlias"></component>
    </div>
</template>

<script>
export default {
  async fetch({ store, route, payload }) {
    await store.dispatch('pageData/ensurePageData', route.path);
  },
  computed: {
    pageData: function () {
      return this.$store.getters['pageData/getPageData'](this.$route.path)
    }
  }
}
</script>

<style>

</style>
