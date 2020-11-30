import { App } from "vue";
import Component from "./../breadcrumb/src/breadcrumb-item.vue";

Component.install = function (app: App) {
  app.component(Component.name!, Component);
};

export * from "./../breadcrumb/src/breadcrumb-item.vue";
export * from "./../breadcrumb/src/interface";

export const BreadcrumbItem = Component;
