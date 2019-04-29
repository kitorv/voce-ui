import KvSelect from "./select.vue";
import KvOption from "./option.vue";

KvSelect.install = function(Vue) {
  Vue.component(KvSelect.name, KvSelect);
  Vue.component(KvOption.name, KvOption);
};

export default KvSelect;
