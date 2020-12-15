import { App } from "vue";
import Breadcrumb from "./src/breadcrumb.vue";
import BreadcrumbItem from "./src/breadcrumb-item.vue";

export default (app: App) => {
  app.component(Breadcrumb.name!, Breadcrumb);
  app.component(BreadcrumbItem.name!, BreadcrumbItem);
};

export * from "./src/interface";

export { Breadcrumb, BreadcrumbItem };
