import { App } from "vue";
import Menu from "./src/menu.vue";
import MenuItem from "./src/menu-item.vue";
import SubMenu from "./src/sub-menu.vue";

export default (app: App) => {
  app.component(Menu.name!, Menu);
  app.component(MenuItem.name!, MenuItem);
  app.component(SubMenu.name!, SubMenu);
};

export * from "./src/interface";

export { Menu, MenuItem, SubMenu };
