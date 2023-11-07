<script setup>
import { ref } from "vue";
const isAddingTodo = ref(false);

function toggle() {
  isAddingTodo.value = !isAddingTodo.value;
}
</script>

<template>
  <div id="wrapper">
    <div v-if="isAddingTodo" @click="toggle">입력 컴포넌트</div>
    <div v-else @click="toggle" id="addTodo">+</div>
  </div>
</template>

<style scoped>
#wrapper {
  margin: 15px 90px;
}

#addTodo {
  border: 2px solid black;
  text-align: center;
  font-size: 2rem;
  border-radius: 5px;
}

#addTodo:hover {
  background-color: black;
  color: white;
  transition: 0.3s;
  cursor: pointer;
}
</style>
