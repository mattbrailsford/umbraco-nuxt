<template>
    <div>
      <component v-if="content.contentTypeAlias" :key="content.id" :content="content" :is="content.contentTypeAlias"></component>
    </div>
</template>

<script>
export default {
  async asyncData ({ app, route }) {
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
    //console.log(res.results[0])
    return {
      content: (res && res.totalResults == 1)
        ? res.results[0]
        : null
    }
  }
}
</script>

<style>

</style>
