import { App } from "vue";
import Button from "./src/button.vue";

export default (app: App) => {
  app.component(Button.name!, Button);
};

export * from "./src/interface";

export { Button };
