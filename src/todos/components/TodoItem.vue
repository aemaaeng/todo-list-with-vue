<script setup></script>

<template>
  <li class="todoItem">
    <div class="titleContainer">
      <h3 class="todoTitle">제목</h3>
      <div class="todoDate">날짜</div>
    </div>
    <div class="infoContainer">
      <div>상세 설명</div>
      <div>todo 상태</div>
    </div>
  </li>
</template>

<style scoped>
.todoItem {
  border: 2px solid black;
  border-radius: 5px;
  padding: 20px 30px;
}

.titleContainer {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}

.todoTitle {
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0;
}

.todoDate {
  font-size: 0.9rem;
}

.infoContainer {
  display: flex;
  justify-content: space-between;
}
</style>
