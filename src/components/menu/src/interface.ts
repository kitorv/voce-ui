import { IconType } from "@/components/icon";
import { ComputedRef } from "vue";

export type MenuMode = "horizontal" | "vertical";

export type MenuItemIcon = IconType;

export type SubmenuIcon = IconType;

export const MenuProvideKey = Symbol();

export type SubMenuProvide = {
  key: symbol;
  level: ComputedRef<number>;
  isActive: ComputedRef<boolean>;
  open: () => void;
  close: () => void;
  active: () => void;
  inactive: () => void;
  closestActive: () => void;
};

export interface MenuProvide {
  mode: ComputedRef<MenuMode>;
  submenuList: Map<symbol, SubMenuProvide>;
  isCollapse: ComputedRef<boolean>;
  isAccordion: ComputedRef<boolean>;
  isHorizontal: ComputedRef<boolean>;
  isVertical: ComputedRef<boolean>;
  activeIndex: ComputedRef<number | string | undefined>;
  updateActiveIndex: (index: number | string | undefined) => void;
  addSubmenu: (key: symbol, submenu: SubMenuProvide) => void;
  delSubmenu: (key: symbol) => void;
  closeAllSubmenu: () => void;
  inactiveAllSubmenu: () => void;
  computedIndent: (level: number) => number;
}

export const SubMenuProvideKey = Symbol();
