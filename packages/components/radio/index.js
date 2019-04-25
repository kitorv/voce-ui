import KvRadio from "./radio.vue";

KvRadio.install = function(Vue) {
  Vue.component(KvRadio.name, KvRadio);
};

export default KvRadio;
