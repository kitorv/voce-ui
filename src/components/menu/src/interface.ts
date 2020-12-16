import { IconType } from "@/components/icon";
import { ComputedRef } from "vue";

export type MenuMode = "horizontal" | "vertical";

export type MenuItemIcon = IconType;

export interface MenuSubmenu {
  expand: () => void;
  collapse: () => void;
}

export interface MenuProvide {
  mode: ComputedRef<MenuMode>;
  activeIndex: ComputedRef<number | string | undefined>;
  updateActiveIndex: (index: number | string | undefined) => void;
  addSubmenu: (key: symbol, submenu: MenuSubmenu) => void;
  delSubmenu: (key: symbol) => void;
  // expandSubmenu: (keys?: Array<symbol>) => void;
  // collapseSubmenu: (keys?: Array<symbol>) => void;
}

export const MenuProvideKey = Symbol();

export type SubMenuProvide = {} | null;

export const SubMenuProvideKey = Symbol();
