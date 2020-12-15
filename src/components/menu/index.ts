import { App } from "vue";
import Component from "./src/menu.vue";

Component.install = function (app: App) {
  app.component(Component.name!, Component);
};

export * from "./src/menu.vue";
export * from "./src/interface";

export const Menu = Component;
