import { App } from "vue";
import Component from "./src/breadcrumb.vue";

Component.install = function (app: App) {
  app.component(Component.name as string, Component);
};

export * from "./src/breadcrumb.vue";

export const Breadcrumb = Component;
