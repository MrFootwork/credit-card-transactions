import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
// FIXME add color.css
// grey card and blue card

import App from "./App.vue";
import router from "./router/index.js";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");
