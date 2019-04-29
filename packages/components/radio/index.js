import KvRadio from "./radio.vue";
import KvRadioGroup from "./radio-group.vue";

KvRadio.install = function(Vue) {
  Vue.component(KvRadioGroup.name, KvRadioGroup);
  Vue.component(KvRadio.name, KvRadio);
};

export default KvRadio;
