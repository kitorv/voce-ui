import { App } from "vue";
import Component from "../dropdown/src/menu-item.vue";

Component.install = function (app: App) {
  app.component(Component.name!, Component);
};

export * from "../dropdown/src/menu-item.vue";
// export * from "../dropdown/src/interface";

export const DropdownMenuItem = Component;
