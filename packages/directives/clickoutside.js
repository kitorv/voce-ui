const nodeList = [];
const ctx = "@@clickoutsideContext";
let seed = 0;
let startClickEvent;

window.addEventListener("mousedown", e => (startClickEvent = e));
window.addEventListener("mouseup", () => {
  nodeList.forEach(node => node[ctx].documentHandler(startClickEvent));
});

function createDocumentHandler(el, binding, vnode) {
  return function(event) {
    if (el.contains(event.target)) return;
    if (
      binding.expression &&
      el[ctx].methodName &&
      vnode.context[el[ctx].methodName]
    ) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

export default {
  bind(el, binding, vnode) {
    nodeList.push(el);
    const id = seed++;
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },
  update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },
  unbind(el) {
    for (let i = 0; i < nodeList.length; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  }
};
