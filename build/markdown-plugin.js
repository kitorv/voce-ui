const RuleSet = require("webpack/lib/RuleSet");
const qs = require("querystring");

class MarkdownLoaderPlugin {
  apply(compiler) {
    // 1. VueLoaderPluguin插件内部只识别.vue文件才会编译
    // 2. 去除后缀匹配可编译Markdown文件
    const rawRules = compiler.options.module.rules;
    const vueLoaderPluginRule = rawRules.find((rule) => {
      const regex = rule.test;
      return regex && regex.test("test.vue");
    });
    delete vueLoaderPluginRule.test;
    const rules = new RuleSet(rawRules).rules;
    compiler.options.module.rules = [...rules];
  }
}

module.exports = MarkdownLoaderPlugin;
