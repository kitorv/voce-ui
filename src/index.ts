import { App } from "vue";
import { Button } from "./components/button";
import { Link } from "./components/link";
import { Text } from "./components/text";
import { Divider } from "./components/divider";
import { Row } from "./components/row";
import { Col } from "./components/col";
import { Layout } from "./components/layout";
import { Space } from "./components/space";
import { Affix } from "./components/affix";
import { Breadcrumb } from "./components/breadcrumb";
import { BreadcrumbItem } from "./components/breadcrumb-item";
import { Dropdown } from "./components/dropdown";

import "./components/color";
import "./components/icons";

const components = [
  Button,
  Link,
  Text,
  Divider,
  Row,
  Col,
  Layout,
  Space,
  Affix,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
];

export const install = function (app: App) {
  components.forEach(({ install }) => {
    if (!install) return;
    app.use(install);
  });
};

export const version = require("../package.json").version;

// export * from "./components/button";
