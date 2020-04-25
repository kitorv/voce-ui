const MarkdownIt = require("markdown-it");
const MarkdownItClass = require("./markdown-it-class");

module.exports = function (source) {
  const markdownIt = MarkdownIt({ html: true });
  markdownIt.use(MarkdownItClass);
  source = markdownIt.render(source);
  return `<template><div>${source}</div></template>`;
};
