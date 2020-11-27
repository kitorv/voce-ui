import { ComputedRef } from "vue";

export type RowGutter = number | [number, number];

export type RowJustify =
  | "start"
  | "end"
  | "center"
  | "space-around"
  | "space-between";

export type RowAlign = "top" | "middle" | "bottom";

export interface RowProvide {
  gutter: ComputedRef<[number, number]>;
}

export const RowProvideKey = Symbol();

type ColSpanType =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

export type ColSpan = ColSpanType;

export type ColOffset = ColSpanType;

export type ColPull = ColSpanType;

export type ColPush = ColSpanType;

export type ColSizeKey = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type ColFlex = number | "none" | "auto" | string | undefined;

export type ColSize =
  | ColSpan
  | {
      span?: ColSpan;
      order?: ColSpan;
      offset?: ColSpan;
      push?: ColSpan;
      pull?: ColSpan;
    };
