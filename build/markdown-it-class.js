module.exports = (markdownIt, className) => {
  const addToeknClass = (state) => {
    state.tokens.forEach((token) => {
      if (/(_open|_inline)$/.test(token.type)) {
        const classAttrs = token.attrGet("class");
        classList = classAttrs ? classAttrs.split(" ") : [];
        token.attrSet("class", [className, ...classList].join(" "));
      }
      if (!token.children) return;
      addToeknClass({ tokens: token.children });
    });
  };
  markdownIt.core.ruler.push("markdown-custom-class", addToeknClass);
};
