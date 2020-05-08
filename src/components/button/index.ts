import { App } from "vue";
import Component from "./src/index.vue";

export const install = function (app: App) {
  app.component(Component.name as string, Component);
};

export const Button = Component;
