const { parse, compileTemplate } = require("@vue/compiler-sfc");

const importToRequire = (code) => {
  return (
    code
      // { a as b } => { a: b }
      .replace(/([0-9a-z_$]+) as ([0-9a-z_$]+)/gi, "$1: $2")
      // import { a } from "a" => const { a } = require("b")
      .replace(
        /import {([^}]+)} from ([^\s;]+);?/g,
        "const {$1} = require($2);"
      )
      // import a from "a" => const a = require("a").default || require("a")
      .replace(
        /import ([\S]+) from ([^\s;]+);?/g,
        "const $1 = require($2).default || require($2);"
      )
      // import * as a from "a"
      .replace(
        /import \* as ([\S]+) from ([^\s;]+);?/g,
        "const $1 = require($2);"
      )
      // import a from "a" => const a = require("a").default || require("a")
      .replace(
        /import (.+),\s?{([^}]+)} from ([^\s;]+);?/g,
        [
          "const $1 = require($3).default || require($3);",
          "const {$2} = require($3);",
        ].join("\n")
      )
  );
};

module.exports = (snippetCode) => {
  const { descriptor, errors } = parse(snippetCode);
  if (errors && errors.length > 0) {
    throw errors;
  }
  const { template, script } = descriptor;
  let scriptCode = `import { defineComponent } from "vue"; export default defineComponent({});`;
  if (script && script.content) {
    scriptCode = script.content;
  }
  scriptCode = importToRequire(scriptCode);
  scriptCode = scriptCode.replace(/export\s+default/, "const component =");
  if (template && template.content) {
    // TODO scopedId
    const { code } = compileTemplate({
      source: template.content,
      filename: "component.vue",
      transformAssetUrls: true,
    });
    let templateCode = importToRequire(code).replace(/export\s+/, "");

    scriptCode = `${scriptCode} ${templateCode} component.render = render; return component`;
  }
  return scriptCode;
};
