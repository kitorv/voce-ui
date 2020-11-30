import { App } from "vue";
import Component from "./src/breadcrumb.vue";

Component.install = function (app: App) {
  app.component(Component.name!, Component);
};

export * from "./src/breadcrumb.vue";
export * from "./src/interface";

export const Breadcrumb = Component;
