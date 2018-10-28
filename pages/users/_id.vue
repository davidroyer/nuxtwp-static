<template>
  <div>
    <h3>{{ user.name }}</h3>
    <p>{{ user.id }}</p>
    <!-- <p>{{ user.phone }}</p> -->
    <router-link to="/users">&larr; go back</router-link>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    const { data } = await app.$wp.get(`/users/${params.id}`)
    return {
      user: data
    }
  },

  head() {
    return {
      title: `${this.user.name}`
    }
  }
}
</script>