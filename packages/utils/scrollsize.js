let _scrollBarSize = 0;
export default function() {
  if (_scrollBarSize > 0) return _scrollBarSize;
  // 创建一个外层div
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  document.body.appendChild(outer);
  // 获取div没有滚动条的宽度
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  // 想div内部追加宽度百分百div使得外层div出现滚动条
  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  // 获取外层div包含滚动条的宽度
  const widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  // 无滚动条减去滚动条状态的宽度即可获取滚动条宽度
  _scrollBarSize = widthNoScroll - widthWithScroll;
  return _scrollBarSize;
}
