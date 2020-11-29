import { App } from "vue";
import Component from "../layout/src/left.vue";

Component.install = function (app: App) {
  app.component(Component.name!, Component);
};

export * from "../layout/src/left.vue";

export const LayoutLeft = Component;
