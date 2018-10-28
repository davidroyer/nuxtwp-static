<template>
  <div>
    <h2>Hello {{ name }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'World'
    }
  },

  head: {
    title: 'Home'
  }
}
</script>

<style scoped>

img {
  max-width: 100%;
  border-radius: 5px;
  margin-top: 30px;
}


</style>
