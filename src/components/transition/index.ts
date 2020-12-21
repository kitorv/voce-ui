import { App } from "vue";
import Transition from "./src/transition.vue";

export default (app: App) => {
  app.component(Transition.name!, Transition);
};

export * from "./src/interface";

export { Transition };
