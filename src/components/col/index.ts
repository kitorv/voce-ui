import { App } from "vue";
import Component from "../grid/src/col.vue";

Component.install = function (app: App) {
  app.component(Component.name as string, Component);
};

export * from "../grid/src/col.vue";

export const Col = Component;
