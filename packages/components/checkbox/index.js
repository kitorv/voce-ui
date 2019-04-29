import KvCheckbox from "./checkbox.vue";
import KvcheckboxGroup from "./checkbox-group.vue";

KvCheckbox.install = function(Vue) {
  Vue.component(KvcheckboxGroup.name, KvcheckboxGroup);
  Vue.component(KvCheckbox.name, KvCheckbox);
};

export default KvCheckbox;
