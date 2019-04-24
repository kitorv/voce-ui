import KvGrid from "./components/grid";
import KvButton from "./components/button";
import KvChcekbox from "./components/checkbox";

const { KvRow, KvCol } = KvGrid;

const components = [KvRow, KvCol, KvButton, KvChcekbox];

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
