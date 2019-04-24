import KvRow from "./components/row"
import KvCol from "./components/col"
import KvButton from "./components/button";
import KvChcekboxGroup from "./components/checkbox-group"
import KvChcekbox from "./components/checkbox";

const components = [KvRow, KvCol, KvButton, KvChcekboxGroup, KvChcekbox];

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
