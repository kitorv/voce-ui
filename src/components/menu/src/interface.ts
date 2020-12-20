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
  collapse: ComputedRef<boolean>;
  mode: ComputedRef<MenuMode>;
  activeIndex: ComputedRef<number | string | undefined>;
  updateActiveIndex: (index: number | string | undefined) => void;
  addSubmenu: (key: symbol, submenu: MenuSubmenu) => void;
  delSubmenu: (key: symbol) => void;
  closeAllSubmenu: () => void;
  computedPaddingLeft: (level: number) => string;
}

export const MenuProvideKey = Symbol();

export type SubMenuProvide = {
  level: ComputedRef<number>;
  updateActive: (active: boolean) => void;
} | null;

export const SubMenuProvideKey = Symbol();
