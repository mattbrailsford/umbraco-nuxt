<template>
    <div>
      <component v-if="pageData.contentTypeAlias" :key="pageData.id" :content="pageData" :is="pageData.contentTypeAlias"></component>
    </div>
</template>

<script>
export default {
  async fetch({ store, route, payload }) {
    if (payload) {
      store.commit('pageData/setPageData', payload);
    } else {
      await store.dispatch('pageData/loadPageData', route.path);
    }
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
