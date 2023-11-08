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
* {
  font-family: "SF Pro", ui-sans-serif, -apple-system, BlinkMacSystemFont,
    "Apple SD Gothic Neo", "Pretendard", "Apple Color Emoji", "Segoe UI Emoji",
    system-ui, -system-ui, sans-serif, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

input::placeholder,
textarea::placeholder {
  color: #bbb;
}
</style>

<style scoped>
h1 {
  text-align: center;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.1rem;
  margin-bottom: 30px;
}

nav > a {
  padding: 10px 40px;
  border-bottom: 2px solid white;
}

.router-link-active {
  font-weight: 600;
  border-bottom: 2px solid black;
}

main {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
</style>
