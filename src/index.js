import KvRow from "../packages/components/row";
import KvCol from "../packages/components/col";

const components = [KvRow, KvCol];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

export default {
  version: process.env.VERSION,
  install,
  KvRow,
  KvCol
};
