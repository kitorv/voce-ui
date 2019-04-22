import KvRow from "./components/row";
import KvCol from "./components/col";
import KvButton from "./components/button";

const components = [KvRow, KvCol, KvButton];

const install = function (Vue) {
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
