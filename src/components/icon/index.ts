import { App } from "vue";
import Icon from "./src/icon.vue";

export default (app: App) => {
  app.component(Icon.name!, Icon);
};

export * from "./src/interface";

export { Icon };
