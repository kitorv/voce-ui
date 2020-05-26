import { createApp } from "vue";
import App from "./app.vue";
import Router from "./router";

import "highlight.js/styles/color-brewer.css";
import "./styles/markdown.scss";
import "./styles/example.scss";
import "../src/components/icons/index.scss";

const app = createApp(App);

import VcCodeSnippet from "./components/code-snippet.vue";
app.component(VcCodeSnippet.name as string, VcCodeSnippet);

import VcIconView from "./views/icons.vue";
app.component(VcIconView.name as string, VcIconView);

import { install } from "../src/index";
app.use(install);

app.use(Router);
app.mount("#app");
