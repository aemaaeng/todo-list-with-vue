<script setup>
import parseDate from "../../utils/parseDate";
const props = defineProps({
  todo: {
    id: String,
    title: String,
    content: String,
    date: String,
    status: String,
  },
});
</script>

<template>
  <li class="todoItem">
    <div class="titleContainer">
      <h3 class="todoTitle">{{ todo.title }}</h3>
      <div class="todoDate">{{ parseDate(todo.date) }}</div>
    </div>
    <div class="infoContainer">
      <div class="todoDesc">{{ todo.content }}</div>
      <div>{{ todo.status }}</div>
    </div>
  </li>
</template>

<style scoped>
.todoItem {
  border: 2px solid black;
  border-radius: 5px;
  padding: 25px 30px;
  margin: 20px 0px;
}

.titleContainer {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
}

.todoTitle {
  font-size: 1.3rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-right: 10px;
}

.todoDate {
  font-size: 0.9rem;
  color: grey;
}

.infoContainer {
  display: flex;
  justify-content: space-between;
}

.todoDesc {
  color: grey;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 40px;
}
</style>
