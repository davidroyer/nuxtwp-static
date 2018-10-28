<template>
  <div>
    <h3>{{ post.title.rendered }}</h3>
    <p>{{ post.id }}</p>
    <router-link to="/posts">&larr; go back</router-link>
    <div class="content" v-html="post.content.rendered"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    const { data } = await app.$wp.get(`/posts/${params.id}`)
    return {
      post: data
    }
  },

  head() {
    return {
      title: `${this.post.title.rendered}`
    }
  }
}
</script>