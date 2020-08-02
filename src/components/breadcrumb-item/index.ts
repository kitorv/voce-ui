import { App } from "vue";
import Component from "./../breadcrumb/src/breadcrumb-item.vue";

Component.install = function (app: App) {
  app.component(Component.name as string, Component);
};

export const BreadcrumbItem = Component;
