import KvCol from "../grid/col";

KvCol.install = function (Vue) {
  Vue.component(KvCol.name, KvCol);
};

export default KvCol;