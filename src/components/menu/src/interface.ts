import { IconType } from "@/components/icon";
import { ComputedRef } from "vue";

export type MenuMode = "horizontal" | "vertical";

export type MenuItemIcon = IconType;

export type SubmenuIcon = IconType;

export interface Submenu {
  isActive: ComputedRef<boolean>;
  open: () => void;
  close: () => void;
  active: () => void;
  inactive: () => void;
}

export interface MenuProvide {
  collapse: ComputedRef<boolean>;
  mode: ComputedRef<MenuMode>;
  activeIndex: ComputedRef<number | string | undefined>;
  updateActiveIndex: (index: number | string | undefined) => void;
  addSubmenu: (key: symbol, submenu: Submenu) => void;
  delSubmenu: (key: symbol) => void;
  closeAllSubmenu: () => void;
  inactiveAllSubmenu: () => void;
  computedIndent: (level: number) => number;
}

export const MenuProvideKey = Symbol();

export type SubMenuProvide = {
  level: ComputedRef<number>;
  active: () => void;
} | null;

export const SubMenuProvideKey = Symbol();
