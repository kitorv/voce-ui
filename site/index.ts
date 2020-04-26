import { createApp } from "vue";
import App from "./app.vue";
import Router from "./router";

import "highlight.js/styles/color-brewer.css";
import "./styles/markdown.scss";

const app = createApp(App);
app.use(Router);
app.mount("#app");
