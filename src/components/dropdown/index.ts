import { App } from "vue";
import Dropdown from "./src/dropdown.vue";
import DropdownMenu from "./src/dropdown-menu.vue";
import DropdownMenuItem from "./src/dropdown-menu-item.vue";

export default (app: App) => {
  app.component(Dropdown.name!, Dropdown);
  app.component(DropdownMenu.name!, DropdownMenu);
  app.component(DropdownMenuItem.name!, DropdownMenuItem);
};

export * from "./src/interface";

export { Dropdown, DropdownMenu, DropdownMenuItem };

// TODO 动画效果替换优化，Popup销毁页面自动吧相关dom去除
