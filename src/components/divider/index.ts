import { App } from "vue";
import Divider from "./src/divider.vue";

export default (app: App) => {
  app.component(Divider.name as string, Divider);
};

export * from "./src/interface";

export { Divider };
