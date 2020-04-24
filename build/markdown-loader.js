const MarkdownIt = require("markdown-it");
module.exports = function (source) {
  const markdownIt = MarkdownIt({ html: true });
  source = markdownIt.render(source);
  return `<template>${source}</template>`;
};
