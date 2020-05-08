import { App } from "vue";
import { install as ButtonInstall } from "./components/button/index";

const components = [ButtonInstall];

export const install = function (app: App, opts = {}) {
  components.forEach((component) => {
    app.use(component);
  });
};

export const version = require("../package.json").version;
export * from "./components/button/index";
