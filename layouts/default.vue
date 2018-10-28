<template>
  <div>
    <div class="header flex">
      <h1 class="header-title" @click="$router.push('/')">Nuxt static</h1>
      <nav>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/pages">Pages</nuxt-link>
        <nuxt-link to="/posts">Posts</nuxt-link>
      </nav>
    </div>
    <main>
      <nuxt/>
    </main>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

h1 {
  cursor: pointer;
}

body {
  padding: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.page-enter-active,
.page-leave-active {
  transition: all 0.45s ease-in-out;
  transition: all 0.45s cubic-bezier(0.55, 0, 0.1, 1);
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translate(10px, 0);
}

.header {
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  flex-flow: row wrap;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;  
}
main {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;    
}
.header-title {
  margin-right: 20px;
  /* flex: 0 1 250px; */
}

nav {
  /* flex: 1 1 70%; */
}
a {
  margin: 5px;
}
</style>