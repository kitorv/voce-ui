import { App } from "vue";
import Component from "../layout/src/header.vue";

Component.install = function (app: App) {
  app.component(Component.name!, Component);
};

export * from "../layout/src/header.vue";

export const LayoutHeader = Component;
