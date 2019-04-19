import Vue from "vue";
import App from "./App.vue";
import Router from "./router";
import KvCodeSnippet from "./components/code-snippet";
import KvHelloWorld from "./components/HelloWorld";
import "highlight.js/styles/color-brewer.css";
import "./assets/style/icon.scss";

Vue.config.productionTip = false;
Vue.component("kv-code-snippet", KvCodeSnippet);
Vue.component("kv-hello-world", KvHelloWorld);

new Vue({
  router: Router,
  render: h => h(App)
}).$mount("#app");
