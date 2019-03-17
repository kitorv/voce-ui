import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import KvCodeSnippet from "./components/code-sinppet";
import KvDatagrid from "../packages/components/table";
import hljs from "highlight.js";

import "../packages/style/index.scss";
import "highlight.js/styles/color-brewer.css";

Vue.config.productionTip = false;
Vue.component("kv-code-snippet", KvCodeSnippet);
Vue.component("kv-datagrid", KvDatagrid);

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll("pre code:not(.hljs)");
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
