import { App } from "vue";
import { Button } from "./components/button";
import { Link } from "./components/link";

const components = [Button, Link];

export const install = function (app: App, opts = {}) {
  components.forEach(({ install }) => {
    if (!install) return;
    app.use(install);
  });
};

export const version = require("../package.json").version;
export * from "./components/button";
