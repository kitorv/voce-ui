import KvButton from "./button.vue";

KvButton.install = function(Vue) {
  Vue.component(KvButton.name, KvButton);
};

export default KvButton;
