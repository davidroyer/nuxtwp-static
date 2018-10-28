<template>
  <div>
    <h2>Pages list</h2>
    <ul>
      <li v-for="page in pages" :key="page.id">
        <nuxt-link :to="{ path: `/pages/${page.id}` }">{{ page.title.rendered }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  async asyncData({app}) {
    const { data } = await app.$wp.get('/pages')
    return {
      pages: data
    }
  },

  head: {
    title: 'Site Pages'
  }
}
</script>