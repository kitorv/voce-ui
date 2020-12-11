import { IconType } from "@/components/icon";

export type MenuMode = "horizontal" | "vertical";

export type MenuItemIcon = IconType;

export interface MenuProvide {}

export const MenuProvideKey = Symbol();
