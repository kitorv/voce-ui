import KvSelect from "./select.vue";
import KvOptionGroup from "./group.vue";
import KvOption from "./option.vue";

KvSelect.install = function(Vue) {
  Vue.component(KvSelect.name, KvSelect);
  Vue.component(KvOptionGroup.name, KvOptionGroup);
  Vue.component(KvOption.name, KvOption);
};

export default KvSelect;
