import { PopupTrigger } from "@/components/popup";

export type DropdownPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end";

export type DropdownTrigger = PopupTrigger;

export interface DropdownProvide {
  updateVisible: (value: boolean) => void;
}

export const DropdownProvideKey = Symbol();

export interface DropdownMenuProvide {
  execOnClick: (value?: string | number | object) => void;
}

export const DropdownMenuProvideKey = Symbol();
