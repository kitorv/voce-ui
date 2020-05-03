const { parse, compileStyle } = require("@vue/compiler-sfc");

module.exports = (snippetCode, hash) => {
  const { descriptor, errors } = parse(snippetCode);
  if (errors && errors.length > 0) {
    throw errors;
  }
  const styleCodeList = [];
  let errorList = [];
  const { styles } = descriptor;
  styles.forEach((styleCode) => {
    const { code, errors } = compileStyle({
      source: styleCode.content,
      filename: `snippet_component_${hash}.css`,
      id: `data-v-${hash}`,
      scoped: true,
      trim: true,
    });
    styleCodeList.push(code);
    errorList = errorList.concat(errors);
  });
  if (errorList && errorList.length > 0) {
    throw errorList;
  }
  return styleCodeList.join("\n");
};
