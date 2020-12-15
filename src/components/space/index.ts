import { App } from "vue";
import Space from "./src/space.vue";

export default (app: App) => {
  app.component(Space.name as string, Space);
};

export * from "./src/interface";

export { Space };
