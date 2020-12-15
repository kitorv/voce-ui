import { App } from "vue";
import Row from "./src/row.vue";
import Col from "./src/col.vue";

export default (app: App) => {
  app.component(Row.name!, Row);
  app.component(Col.name!, Col);
};

export * from "../grid/src/interface";

export { Row, Col };
