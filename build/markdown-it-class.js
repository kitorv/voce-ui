module.exports = (markdownIt) => {
  const parseTokens = (state) => {
    state.tokens.forEach((token) => {
      if (/(_open$|image)/.test(token.type)) {
        const classAttr = token.attrGet("class");
        classList = classAttr ? classAttr.split(" ") : [];
        token.attrSet("class", ["vs-markdown-doc", ...classList].join(" "));
      }
      if (!token.children) return;
      parseTokens({ tokens: token.children });
    });
  };
  markdownIt.core.ruler.push("markdown-custom-class", parseTokens);
};
