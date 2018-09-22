<template>
    <div>
      <component v-if="pageModel && pageModel.contentTypeAlias" :key="pageModel.id"
        :is="pageModel.contentTypeAlias" 
        :model="pageModel"></component>
    </div>
</template>

<script>
export default {
  async fetch({ store, route, payload }) {
    if (payload) {
      store.dispatch('pages/setPageModel', route.path, payload);
    } else {
      await store.dispatch('pages/loadPageModel', route.path);
    }
  },
  computed: {
    pageModel: function () {
      return this.$store.getters['pages/getPageModel'](this.$route.path)
    }
  }
}
</script>

<style>

</style>
