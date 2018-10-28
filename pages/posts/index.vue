<template>
  <div>
    <h2>posts list</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="{ path: `/posts/${post.id}` }">{{ post.title.rendered }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({app}) {
    const { data } = await app.$wp.get('/posts')
    return {
      posts: data
    }
  },

  head: {
    title: 'Blog Posts'
  }
}
</script>