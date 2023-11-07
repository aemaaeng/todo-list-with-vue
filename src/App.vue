<script setup></script>

<template>
  <main>
    <div id="wrapper">
      <h1>Todo</h1>
      <nav>
        <router-link to="/todos">목록</router-link>
        <router-link to="/analytics">통계</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<style scoped>
h1 {
  text-align: center;
}

nav {
  display: flex;
  justify-content: space-around;
}

main {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
</style>
