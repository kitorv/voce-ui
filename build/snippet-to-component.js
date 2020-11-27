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

module.exports = (snippetCode, hash) => {
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
    // vue 的 template 编译为渲染函数 render
    const { code } = compileTemplate({
      id: hash,
      source: template.content,
      filename: `snippet_component_${hash}.vue`,
      compilerOptions: {
        sourceMap: true,
        scopeId: `data-v-${hash}`,
      },
      transformAssetUrls: true,
    });
    // 将渲染函数设置到组件的 script 组件属性 render
    let templateCode = importToRequire(code).replace(/export\s+/, "");
    scriptCode = `${scriptCode}; ${templateCode}; component.render = render; return component;`;
  }
  return scriptCode;
};
