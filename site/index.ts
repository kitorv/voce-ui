import { createApp } from "vue";
import App from "./app.vue";
import Router from "./router";

import "highlight.js/styles/color-brewer.css";
import "./styles/markdown.scss";
import "../src/styles/icons.scss";

const app = createApp(App);

import VcCodeSnippet from "./components/code-snippet.vue";
app.component(VcCodeSnippet.name as string, VcCodeSnippet);

app.use(Router);
app.mount("#app");
