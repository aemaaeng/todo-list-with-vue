<script setup>
import { ref, watchEffect } from "vue";
import AddTodo from "./components/AddTodo.vue";
import TodoItem from "./components/TodoItem.vue";
const isAddingTodo = ref(false);

const todos = ref(
  JSON.parse(localStorage.getItem("todos"))?.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  ) || []
);

function toggle() {
  isAddingTodo.value = !isAddingTodo.value;
}

function addTodo(todo) {
  todos.value.unshift(todo);
}

watchEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos.value));
});
</script>

<template>
  <div id="addTodoWrapper">
    <div v-if="isAddingTodo">
      <AddTodo @switch-toggle="toggle" @todo-submit="addTodo" />
    </div>
    <div v-else @click="toggle" id="addTodo">+</div>
    <ul>
      <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id" />
    </ul>
  </div>
</template>

<style scoped>
#addTodoWrapper {
  margin: 15px 90px;
}

#addTodo {
  background-color: black;
  text-align: center;
  font-size: 2rem;
  border: 2px solid black;
  border-radius: 5px;
  color: white;
  padding-bottom: 3px;
}

#addTodo:hover {
  border: 2px solid black;
  background-color: white;
  color: black;
  transition: 0.3s;
  cursor: pointer;
}
</style>
