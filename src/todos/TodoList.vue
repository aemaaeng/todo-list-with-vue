<script setup>
import { ref } from "vue";
import AddTodo from "./components/AddTodo.vue";
const isAddingTodo = ref(false);

const todos = ref(JSON.parse(localStorage.getItem("todos") || "[]"));

function toggle() {
  isAddingTodo.value = !isAddingTodo.value;
}

function addTodo(todo) {
  todos.value.push(todo);
}
</script>

<template>
  <div id="wrapper">
    <div v-if="isAddingTodo">
      <AddTodo @switch-toggle="toggle" @todo-submit="addTodo" />
    </div>
    <div v-else @click="toggle" id="addTodo">+</div>
    <ul>
      {{
        todos
      }}
    </ul>
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
