import { App } from "vue";
import Component from "../menu/src/item.vue";

Component.install = function (app: App) {
  app.component(Component.name!, Component);
};

export * from "../menu/src/item.vue";
export * from "../menu/src/interface";

export const MenuItem = Component;
