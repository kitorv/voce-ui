import { App } from "vue";
import Component from "../gird/src/row.vue";

Component.install = function (app: App) {
  app.component(Component.name as string, Component);
};

export const Row = Component;
