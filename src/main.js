import Vue from 'vue'
import App from './App.vue'
import KvCodeSnippet from "./components/code-snippet";
import KvHelloWorld from "./components/HelloWorld"
import "highlight.js/styles/color-brewer.css";

Vue.config.productionTip = false
Vue.component("kv-code-snippet", KvCodeSnippet);
Vue.component("kv-hello-world", KvHelloWorld);

new Vue({
  render: h => h(App),
}).$mount('#app')
