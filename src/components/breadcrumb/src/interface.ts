import { ComputedRef } from "vue";

export type BreadcrumbProvide = {
  separator: ComputedRef<string>;
};

export const BreadcrumbProvideKey = Symbol();
