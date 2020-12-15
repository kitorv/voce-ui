import { IconType } from "@/components/icon";
import { ComputedRef } from "vue";

export type MenuMode = "horizontal" | "vertical";

export type MenuItemIcon = IconType;

export interface MenuProvide {
  mode: ComputedRef<MenuMode>;
  activeIndex: ComputedRef<number | string | undefined>;
  updateActiveIndex: (index: number | string | undefined) => void;
}

export const MenuProvideKey = Symbol();

export interface SubMenuProvide {}

export const SubMenuProvideKey = Symbol();
