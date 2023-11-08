import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import "./assets/reset.css";

const app = createApp(App).use(router);
app.mount("#app");
