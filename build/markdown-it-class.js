const parseTokens = (tokens) => {
  tokens.forEach((token) => {
    if (/(_open$|image)/.test(token.type)) {
      const classAttr = token.attrGet("class");
      classList = classAttr ? classAttr.split(" ") : [];
      token.attrSet("class", ["vs-markdonw-doc", ...classList].join(" "));
    }
    if (!token.children) return;
    parseTokens(token.children);
  });
};

module.exports = (markdownIt) => {
  markdownIt.core.ruler.push("markdown-custom-class", (state) => {
    parseTokens(state.tokens);
  });
};
