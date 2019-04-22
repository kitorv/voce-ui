import Vue from "vue";
import App from "./App.vue";
import Router from "./router";
import KvCodeSnippet from "./components/code-snippet";
import KvWebComponents from "../packages/index.js";
import "highlight.js/styles/color-brewer.css";
import "./assets/style/icon.scss";
import "../packages/index.scss";

Vue.config.productionTip = false;
Vue.component("kv-code-snippet", KvCodeSnippet);

Vue.use(KvWebComponents);

new Vue({
  router: Router,
  render: h => h(App)
}).$mount("#app");
