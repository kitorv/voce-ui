import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import KvCodeSnippet from "./components/code-sinppet";
import KvDatagrid from "../packages/components/table";

import "../packages/style/index.scss";

Vue.config.productionTip = false;
Vue.component("kv-code-snippet", KvCodeSnippet);
Vue.component("kv-datagrid", KvDatagrid);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
