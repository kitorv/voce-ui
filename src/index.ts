import { App } from "vue";
import { Button } from "./components/button";
import { Link } from "./components/link";
import { Text } from "./components/text";
import { Divider } from "./components/divider";
import { Row } from "./components/row";
import { Col } from "./components/col";
import { Layout } from "./components/layout";

const components = [Button, Link, Text, Divider, Row, Col, Layout];

export const install = function (app: App) {
  components.forEach(({ install }) => {
    if (!install) return;
    app.use(install);
  });
};

export const version = require("../package.json").version;
export * from "./components/button";
