import { App } from "vue";
import Menu from "./src/menu.vue";
import MenuItem from "./src/menu-item.vue";
import MenuItemGroup from "./src/menu-item-group.vue";
import Submenu from "./src/submenu.vue";

export default (app: App) => {
  app.component(Menu.name!, Menu);
  app.component(MenuItem.name!, MenuItem);
  app.component(MenuItemGroup.name!, MenuItemGroup);
  app.component(Submenu.name!, Submenu);
};

export * from "./src/interface";

export { Menu, MenuItem, MenuItemGroup, Submenu };
