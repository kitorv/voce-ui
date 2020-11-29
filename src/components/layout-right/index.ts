import { App } from "vue";
import Component from "../layout/src/right.vue";

Component.install = function (app: App) {
  app.component(Component.name!, Component);
};

export * from "../layout/src/right.vue";

export const LayoutRight = Component;
