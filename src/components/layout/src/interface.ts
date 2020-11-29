import { Slot } from "vue";

export interface LayoutProvide {
  setHeaderSlot: (slot?: Slot) => void;
}

export const LayoutProvideKey = Symbol();
