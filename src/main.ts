import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/stylesheets/style.css";
import "./assets/stylesheets/colors.css";
// FIXME add color.css
// grey card and blue card

import App from "./App.vue";
import router from "./router/index.js";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");
