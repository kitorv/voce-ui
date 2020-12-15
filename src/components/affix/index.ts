import { App } from "vue";
import Affix from "./src/affix.vue";

export default (app: App) => {
  app.component(Affix.name!, Affix);
};

export * from "./src/interface";

export { Affix };
