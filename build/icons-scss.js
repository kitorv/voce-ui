const fs = require("fs");
const path = require("path");
const request = require("request");
const postcss = require("postcss");
const prettier = require("prettier");

const parseBuildParams = () => {
  const params = {};
  for (let i = 0; i < process.argv.length; i++) {
    const argv = process.argv[i];
    if (!argv.startsWith("--")) continue;
    const nextArgv = process.argv[i + 1];
    const key = argv.replace("--", "");
    params[key] = nextArgv || true;
  }
  return params;
};
const params = parseBuildParams();
const iconfontCssUrl = params.iconfont;

request(`https:${iconfontCssUrl}`, (error, response) => {
  if (error) throw error;
  const cssContent = postcss.parse(response.body);
  const classsNames = Array.from(cssContent.nodes, (node) => {
    const { selector } = node;
    if (!selector) return;
    if (!/\.v-icon-([^:]+):before/.test(selector)) return;
    const className = selector.replace(/\.|:before/g, "");
    return className;
  }).filter((value) => value);

  const iconDirectory = path.resolve(__dirname, "../src/components/icons/src");
  fs.mkdir(iconDirectory, { recursive: true }, (err) => {
    if (error) throw err;
    ["eot", "woff", "ttf", "svg"].forEach((suffix) => {
      var stream = fs.createWriteStream(`${iconDirectory}/iconfont.${suffix}`);
      const uri = `https:${iconfontCssUrl}`.replace(".css", `.${suffix}`);
      request(uri).pipe(stream);
    });
    fs.writeFile(
      `${iconDirectory}/iconfont.ts`,
      prettier.format(`export default ${JSON.stringify(classsNames)};`, {
        parser: "babel",
      }),
      () => {}
    );

    const urlRegex = new RegExp(iconfontCssUrl.replace(".css", ""), "g");
    const scss = response.body.replace(urlRegex, "/src/components/icons/src/");
    fs.writeFile(
      `${iconDirectory}/iconfont.scss`,
      prettier.format(scss, {
        parser: "scss",
      }),
      () => {}
    );
  });
});
