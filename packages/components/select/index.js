import KvSelect from "./select.vue";

KvSelect.install = function(Vue) {
  Vue.component(KvSelect.name, KvSelect);
};

export default KvSelect;
