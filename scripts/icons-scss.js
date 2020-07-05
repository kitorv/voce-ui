const inquirer = require("inquirer");
const chalk = require("chalk");
const request = require("request");
const fsExtra = require("fs-extra");
const path = require("path");
const postcss = require("postcss");
const prettier = require("prettier");

const getIconfontCssUrl = async () => {
  console.log(`${chalk.bgBlue.black("Icons")} fetch iconfont to scss`);

  const { value } = await inquirer.prompt([
    {
      type: "input",
      name: "value",
      message: "please input iconfont.css link",
    },
  ]);
  return value;
};

const fetchIconfontCss = async (iconfontCssUrl) => {
  return new Promise((resolve, reject) => {
    request(`https:${iconfontCssUrl.trim()}`, (error, response) => {
      if (error) return reject(error);
      resolve(response.body);
    });
  });
};

const downloadFontFiles = (iconfontCssUrl) => {
  const directory = path.resolve(__dirname, "../src/components/icons/src");

  ["eot", "woff", "ttf", "svg"].forEach((fileSuffix) => {
    const iconfontPath = `${directory}/iconfont.${fileSuffix}`;
    const stream = fsExtra.createWriteStream(iconfontPath);
    const uri = `https:${iconfontCssUrl}`.replace(".css", `.${fileSuffix}`);
    request(uri).pipe(stream);
  });
};

const repelceIconfontLocalFile = (iconfontCssUrl, cssContent) => {
  const urlRegex = new RegExp(iconfontCssUrl.replace(".css", ""), "g");
  cssContent = cssContent.replace(urlRegex, "/src/components/icons/src/");
  return prettier.format(cssContent, { parser: "css" });
};

const classToTypeScriptFile = (cssContent) => {
  const postcssContent = postcss.parse(cssContent);
  const classsNameList = Array.from(postcssContent.nodes, (node) => {
    const { selector } = node;
    if (!selector) return;
    if (!/\.v-icon-([^:]+):before/.test(selector)) return;
    const className = selector.replace(/\.|:before/g, "");
    return className;
  }).filter((value) => value);

  const iconType = `export type IconType = '${classsNameList.join("'|'")}';`;
  const iconClassList = `export default ${JSON.stringify(classsNameList)};`;
  const fileContnet = `${iconType} \n ${iconClassList}`;
  const tsContent = prettier.format(fileContnet, { parser: "babel" });
  const directory = path.resolve(__dirname, "../src/components/icons/src");
  fsExtra.outputFile(`${directory}/iconfont.ts`, tsContent);
};

const iconsToScss = async () => {
  const iconfontCssUrl = await getIconfontCssUrl();
  if (!iconfontCssUrl) return;
  downloadFontFiles(iconfontCssUrl);
  const cssContent = await fetchIconfontCss(iconfontCssUrl);
  const css = repelceIconfontLocalFile(iconfontCssUrl, cssContent);
  const directory = path.resolve(__dirname, "../src/components/icons/src");
  fsExtra.outputFile(`${directory}/iconfont.scss`, css);
  classToTypeScriptFile(cssContent);
};

iconsToScss();
