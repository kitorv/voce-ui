import { IconType } from "@/components/icon";
import { ComputedRef } from "vue";

export type MenuMode = "horizontal" | "vertical";

export type MenuItemIcon = IconType;

export type SubmenuIcon = IconType;

export const MenuProvideKey = Symbol();

export type SubmenuProvide = {
  key: symbol;
  level: ComputedRef<number>;
  isActive: ComputedRef<boolean>;
  isOpen: ComputedRef<boolean>;
  open: () => void;
  close: () => void;
  active: () => void;
  inactive: () => void;
  collapse: () => void;
  expand: () => void;
  closestActive: () => void;
  updateTransitionName: () => void;
};

export const SubmenuProvideKey = Symbol();

export type SubmenuTransitionName = "zoom-top" | "zoom-right" | "zoom-fade";

export interface MenuProvide {
  submenuList: Map<symbol, SubmenuProvide>;
  isInline: ComputedRef<boolean>;
  isCollapse: ComputedRef<boolean>;
  isHorizontal: ComputedRef<boolean>;
  isVertical: ComputedRef<boolean>;
  activeIndex: ComputedRef<number | string | undefined>;
  updateActiveIndex: (index: number | string | undefined) => void;
  addSubmenu: (key: symbol, submenu: SubmenuProvide) => void;
  delSubmenu: (key: symbol) => void;
  collapseSubmenus: () => void;
  expandSubmenus: () => void;
  closeAllSubmenu: () => void;
  inactiveAllSubmenu: () => void;
  computedIndent: (level: number) => number;
}
