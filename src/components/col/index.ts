import { App } from "vue";
import Component from "../grid/src/col.vue";

Component.install = function (app: App) {
  app.component(Component.name!, Component);
};

export * from "../grid/src/col.vue";
export * from "../grid/src/interface";

export const Col = Component;
