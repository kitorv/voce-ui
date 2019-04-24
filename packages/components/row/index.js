import KvRow from "../grid/row";

KvRow.install = function (Vue) {
  Vue.component(KvRow.name, KvRow);
};

export default KvRow;