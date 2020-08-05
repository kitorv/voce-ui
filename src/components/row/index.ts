import { App } from "vue";
import Component from "../grid/src/row.vue";

Component.install = function (app: App) {
  app.component(Component.name as string, Component);
};

export * from "../grid/src/row.vue";

export const Row = Component;
