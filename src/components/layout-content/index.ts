import { App } from "vue";
import Component from "../layout/src/content.vue";

Component.install = function (app: App) {
  app.component(Component.name!, Component);
};

export * from "../layout/src/content.vue";

export const LayoutContent = Component;
