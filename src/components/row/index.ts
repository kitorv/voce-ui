import { App } from "vue";
import Component from "../grid/src/row.vue";

Component.install = function (app: App) {
  app.component(Component.name!, Component);
};

export * from "../grid/src/row.vue";
export * from "../grid/src/interface";

export const Row = Component;
