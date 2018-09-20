<template>
    <div>
      <component v-if="content.contentTypeAlias" :key="content.id" :content="content" :is="content.contentTypeAlias"></component>
    </div>
</template>

<script>
export default {
  async asyncData ({ app, route, payload }) {
    
    // If there is a cached payload, use that
    if (payload) {
      return { content: payload };
    }

    // No payload so lookup the page contents from the endpoint
    let query = '/root/home';
    let cleanPath = route.path.replace(/^\/+|\/+$/g, '');
    if (cleanPath) {
      let pathParts = cleanPath.split('/');
      query = pathParts.reduce((acc, cur) => {
        if (cur) {
          acc += `/*[@urlName='${cur}']`;
        }
        return acc;
      }, query);
    }
    const res = await app.$umbraco.query(query, 'XPath').getAll();
    const content = (res && res.totalResults == 1)
        ? res.results[0]
        : null;

    return {
      content: content
    }

  }
}
</script>

<style>

</style>
