<template>
  <div>
    <h3>{{ page.title.rendered }}</h3>
    <p>{{ page.id }}</p>
    <router-link to="/pages">&larr; go back</router-link>
    <div class="content" v-html="page.content.rendered"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    const { data } = await app.$wp.get(`/pages/${params.id}`)
    return {
      page: data
    }
  },

  head() {
    return {
      title: `${this.page.title.rendered}`
    }
  }
}
</script>