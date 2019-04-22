import KvCol from "./col.vue";

KvCol.install = function(Vue) {
  Vue.component(KvCol.name, KvCol);
};

export default KvCol;
