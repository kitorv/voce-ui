import { createApp } from "vue";
import App from "./app.vue";

const app = createApp(App);

import VcMarkdownView from "./components/markdown-view.vue";
app.component(VcMarkdownView.name as string, VcMarkdownView);

import VcMarkdownSnippet from "./components/markdown-snippet.vue";
app.component(VcMarkdownSnippet.name as string, VcMarkdownSnippet);

import VcIconView from "./views/icons.vue";
app.component(VcIconView.name as string, VcIconView);

import { install } from "../src/index";
app.use(install);

import router from "./router";
app.use(router);

app.mount("#app");
