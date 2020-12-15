import { App } from "vue";
import Text from "./src/text.vue";

export default (app: App) => {
  app.component(Text.name!, Text);
};

export * from "./src/interface";

export { Text };
