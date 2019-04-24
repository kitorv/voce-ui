import KvCheckbox from "./checkbox.vue";

KvCheckbox.install = function (Vue) {
  Vue.component(KvCheckbox.name, KvCheckbox);
};

export default KvCheckbox;
