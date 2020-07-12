import { App } from "vue";
import { Button } from "./components/button";
import { Link } from "./components/link";
import { Text } from "./components/text";
import { Row } from "./components/row";
import { Col } from "./components/col";

const components = [Button, Link, Text, Row, Col];

export const install = function (app: App) {
  components.forEach(({ install }) => {
    if (!install) return;
    app.use(install);
  });
};

export const version = require("../package.json").version;
export * from "./components/button";
