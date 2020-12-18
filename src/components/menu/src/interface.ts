import { IconType } from "@/components/icon";
import { ComputedRef } from "vue";

export type MenuMode = "horizontal" | "vertical";

export type MenuItemIcon = IconType;

export type SubmenuIcon = IconType;

export interface MenuSubmenu {
  expand: () => void;
  collapse: () => void;
}

export interface MenuProvide {
  mode: ComputedRef<MenuMode>;
  inline: ComputedRef<boolean>;
  activeIndex: ComputedRef<number | string | undefined>;
  updateActiveIndex: (index: number | string | undefined) => void;
  addSubmenu: (key: symbol, submenu: MenuSubmenu) => void;
  delSubmenu: (key: symbol) => void;
  closeAllSubmenu: () => void;
  computedPaddingLeft: (level: number) => number;
  // expandSubmenu: (keys?: Array<symbol>) => void;
  // collapseSubmenu: (keys?: Array<symbol>) => void;
}

export const MenuProvideKey = Symbol();

export type SubMenuProvide = {
  level: ComputedRef<number>;
} | null;

export const SubMenuProvideKey = Symbol();
