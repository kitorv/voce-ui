import KvDropdown from "./dropdown.vue";

KvDropdown.install = function(Vue) {
  Vue.component(KvDropdown.name, KvDropdown);
};

export default KvDropdown;
