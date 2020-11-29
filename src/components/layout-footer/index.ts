import { App } from "vue";
import Component from "../layout/src/footer.vue";

Component.install = function (app: App) {
  app.component(Component.name!, Component);
};

export * from "../layout/src/footer.vue";

export const LayoutFooter = Component;
