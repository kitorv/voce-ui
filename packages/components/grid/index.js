import KvRow from "./row.vue";
import KvCol from "./col.vue";

const install = function(Vue) {
  Vue.component(KvRow.name, KvRow);
  Vue.component(KvCol.name, KvCol);
};

export default {
  install,
  KvRow,
  KvCol
};
