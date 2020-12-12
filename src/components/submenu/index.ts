import { App } from "vue";
import Component from "../menu/src/submenu.vue";

Component.install = function (app: App) {
  app.component(Component.name!, Component);
};

export * from "../menu/src/submenu.vue";
export * from "../menu/src/interface";

export const SubMenu = Component;
