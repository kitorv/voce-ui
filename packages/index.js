import KvRow from "./components/row";
import KvCol from "./components/col";
import KvButton from "./components/button";
import KvChcekbox from "./components/checkbox";
import KvRadio from "./components/radio";
import KvInput from "./components/input";
import KvTeatarea from "./components/textarea";
import KvSelect from "./components/select";
import KvDropdown from "./components/dropdown";
import KvDatePicker from "./components/datepicker"

const components = [
  KvRow,
  KvCol,
  KvButton,
  KvChcekbox,
  KvRadio,
  KvInput,
  KvTeatarea,
  KvSelect,
  KvDropdown,
  KvDatePicker
];

const install = function (Vue) {
  components.forEach(component => {
    Vue.use(component);
  });
};

export default {
  version: process.env.VERSION,
  install,
  KvRow,
  KvCol
};
