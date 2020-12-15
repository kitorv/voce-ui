import { App } from "vue";
import Popup from "./src/popup.vue";

export default (app: App) => {
  app.component(Popup.name!, Popup);
};

export * from "./src/interface";

export { Popup };
