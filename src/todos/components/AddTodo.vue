<script setup>
import { ref } from "vue";
import DatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const emit = defineEmits(["cancel-submit"]);

function handleCancelSubmit() {
  emit("cancel-submit");
}

const todoTitle = ref("");
const todoDesc = ref("");
const todoDate = ref(new Date());

function format(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}/${month}/${day}`;
}
</script>

<template>
  <form class="addTodoForm" @submit.prevent="">
    <input v-model="todoTitle" placeholder="할 일을 입력하세요." />
    <textarea v-model="todoDesc" placeholder="설명을 입력하세요." />
    <div class="todoInfoContainer">
      <DatePicker
        v-model="todoDate"
        placeholder="날짜를 입력하세요."
        month-name-format="long"
        :format="format"
        :preview-format="format"
      />
      <select class="todoStateOptions">
        <option>선택</option>
        <option>진행 전</option>
        <option>진행 중</option>
        <option>완료</option>
      </select>
    </div>
    <div class="todoButtonContainer">
      <button class="todoSubmit" type="submit">추가</button>
      <button
        class="todoSubmit cancel"
        type="button"
        @click="handleCancelSubmit"
      >
        취소
      </button>
    </div>
  </form>
</template>

<style scoped>
.addTodoForm {
  border: 2px solid black;
  padding: 20px 30px;
  border-radius: 5px;
}

input {
  padding-bottom: 5px;
}

textarea {
  resize: none;
}

input,
textarea {
  display: inline-block;
  margin: 10px 0px;
  border: none;
  border-bottom: 1px solid #ddd;
  width: 100%;
  outline: none;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  border-bottom: 1px solid black;
  transition: 0.3s;
}

.todoInfoContainer {
  display: flex;
}

.dp__main {
  margin-right: 40px;
}

.todoStateOptions {
  width: 100px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.todoButtonContainer {
  display: flex;
  justify-content: center;
  padding-top: 30px;
  gap: 30px;
}

.todoSubmit {
  background-color: black;
  padding: 10px 30px;
  color: white;
  border-radius: 20px;
  outline: none;
  border: none;
  font-size: 1rem;
}

.cancel {
  background-color: white;
  color: black;
  border: 1px solid black;
}

.todoSubmit:hover {
  cursor: pointer;
}
</style>
