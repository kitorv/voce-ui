import KvTable from "../packages/components/table.vue";

KvTable.version = process.env.VUE_APP_VERSION;
KvTable.install = function(Vue) {
  Vue.component("kv-table", KvTable);
};

export default KvTable;
