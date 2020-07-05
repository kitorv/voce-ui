module.exports = (source) => {
  const regex = /\[[a-z-]+\](\s*)=.+[\r\n]+/g;

  let matchs = source.match(regex);
  if (!matchs || matchs.length < 1) return source;
  source = source.replace(regex, "");

  matchs.forEach((content) => {
    let [key, ...value] = content.split("=");
    source = source.replace(/\[\[[a-z-]+\]\]/g, (match) => {
      if (match !== `[${key.trim()}]`) return match;
      value = value.join("");
      return value.replace(/[\r\n]/g, "").trim();
    });
  });

  return source;
};
