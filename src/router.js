import { createRouter, createWebHistory } from "vue-router";
import TodoList from "./todos/TodoList.vue";
import AnalyticsPage from "./analytics/AnalyticsPage.vue";

const routes = [
  { path: "/todos", component: TodoList },
  { path: "/analytics", component: AnalyticsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
