import { IconType } from "@/components/icon";
import { ComputedRef } from "vue";

export type MenuMode = "horizontal" | "vertical";

export type MenuItemIcon = IconType;

export type SubmenuIcon = IconType;

export interface MenuSubmenu {
  isActive: ComputedRef<boolean>;
  open: () => void;
  close: () => void;
  active: () => void;
  inactive: () => void;
}

export interface MenuProvide {
  collapse: ComputedRef<boolean>;
  mode: ComputedRef<MenuMode>;
  inline: ComputedRef<boolean>;
  activeIndex: ComputedRef<number | string | undefined>;
  updateActiveIndex: (index: number | string | undefined) => void;
  addSubmenu: (key: symbol, submenu: MenuSubmenu) => void;
  delSubmenu: (key: symbol) => void;
  closeAllSubmenu: () => void;
  inactiveAllSubmenu: () => void;
  computedPaddingLeft: (level: number) => string;
}

export const MenuProvideKey = Symbol();

export type SubMenuProvide = {
  level: ComputedRef<number>;
  active: () => void;
  open: () => void;
} | null;

export const SubMenuProvideKey = Symbol();
