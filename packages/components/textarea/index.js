import KvTextarea from "./textarea.vue";

KvTextarea.install = function (Vue) {
  Vue.component(KvTextarea.name, KvTextarea);
};

export default KvTextarea;
