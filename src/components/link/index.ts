import { App } from "vue";
import Link from "./src/link.vue";

export default (app: App) => {
  app.component(Link.name!, Link);
};

export * from "./src/interface";

export { Link };
