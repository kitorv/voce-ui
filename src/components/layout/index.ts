import { App } from "vue";
import Layout from "./src/layout.vue";
import LayoutHeader from "./src/layout-header.vue";
import LayoutContent from "./src/layout-content.vue";
import LayoutFooter from "./src/layout-footer.vue";
import LayoutLeft from "./src/layout-left.vue";
import LayoutRight from "./src/layout-right.vue";

export default (app: App) => {
  app.component(Layout.name as string, Layout);
  app.component(LayoutHeader.name as string, LayoutHeader);
  app.component(LayoutContent.name as string, LayoutContent);
  app.component(LayoutFooter.name as string, LayoutFooter);
  app.component(LayoutLeft.name as string, LayoutLeft);
  app.component(LayoutRight.name as string, LayoutRight);
};

export * from "./src/interface";

export {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutLeft,
  LayoutRight,
};
