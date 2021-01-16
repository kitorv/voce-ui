const fs = require("fs");
const path = require("path");
const postcss = require("postcss-scss");
const scssPath = path.resolve(
  __dirname,
  "../src/components/color/src/index.scss"
);
const scssContent = fs.readFileSync(scssPath, "utf-8");
const scssNodes = postcss.parse(scssContent).nodes;
const prettier = require("prettier");

let snippets = "";
scssNodes.forEach((node) => {
  const snippetName = node.prop;
  if (!/^\$/.test(snippetName)) return;
  const snippetValue = node.value.replace("!default", "").trim();
  snippets += `"${snippetName}":{"prefix":"${snippetName}","body":"${snippetName}","description":"${snippetValue}"},`;
});

fs.writeFile(
  path.resolve(__dirname, "../.vscode/scss.code-snippets"),
  prettier.format(`{${snippets}}`, { parser: "json" }),
  () => {}
);
