import { App } from "vue";

import { Button } from "./components/button";
import { Icon } from "./components/icon";
import { Link } from "./components/link";
import { Text } from "./components/text";

import { Divider } from "./components/divider";
import { Row } from "./components/row";
import { Col } from "./components/col";
import { Layout } from "./components/layout";
import { LayoutHeader } from "./components/layout-header";
import { LayoutContent } from "./components/layout-content";
import { LayoutFooter } from "./components/layout-footer";
import { LayoutLeft } from "./components/layout-left";
import { LayoutRight } from "./components/layout-right";
// import { Space } from "./components/space";
// import { Affix } from "./components/affix";
// import { Breadcrumb } from "./components/breadcrumb";
// import { BreadcrumbItem } from "./components/breadcrumb-item";
// import { Dropdown } from "./components/dropdown";

const components = [
  Button,
  Icon,
  Link,
  Text,

  Divider,
  Row,
  Col,
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutLeft,
  LayoutRight,
  // Space,
  // Affix,
  // Breadcrumb,
  // BreadcrumbItem,
  // Dropdown,
];

export const install = function (app: App) {
  components.forEach(({ install }) => {
    if (!install) return;
    app.use(install);
  });
};

export const version = require("../package.json").version;

// export * from "./components/*";
