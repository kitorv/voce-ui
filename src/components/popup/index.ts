import { App } from "vue";
import Component from "./src/index.vue";

Component.install = function (app: App) {
  app.component(Component.name!, Component);
};

export * from "./src/index.vue";
export * from "./src/interface";

export const Popup = Component;
