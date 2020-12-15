export type PopupTrigger = "hover" | "click";

export type PopupPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

export type PopupOffsetFunc = (state: {
  reference: DOMRect;
  popup: DOMRect;
  placement: PopupPlacement;
}) => [number, number];

export type PopupOffset = PopupOffsetFunc | ReturnType<PopupOffsetFunc>;

export type PopupTarget = string | HTMLElement;
