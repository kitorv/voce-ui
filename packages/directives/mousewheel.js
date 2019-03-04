const isFirefox = typeof navigator !== "undefined" && navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

export default {
  bind(el, binding) {
    let callback = binding.value;
    el.addEventListener(isFirefox ? "DOMMouseScroll" : "mousewheel", function(event) {
      let deltaY = event.deltaY;
      if (!deltaY && event.detail) {
        deltaY = event.detail * 40;
      }
      if (!deltaY && event.wheelDeltaY) {
        deltaY = -event.wheelDeltaY;
      }
      if (!deltaY && event.wheelDelta) {
        deltaY = -event.wheelDelta;
      }
      callback.apply(this, [event, deltaY]);
    });
  }
};
