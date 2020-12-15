import { App } from "vue";

import Button from "./components/button";
import Icon from "./components/icon";
import Link from "./components/link";
import Text from "./components/text";

import Divider from "./components/divider";
import Grid from "./components/grid";
import Layout from "./components/layout";
import Space from "./components/space";

import Affix from "./components/affix";
import Breadcrumb from "./components/breadcrumb";
import Dropdown from "./components/dropdown";
import Menu from "./components/menu";

import Popup from "./components/popup";

const components = [
  Button,
  Icon,
  Link,
  Text,

  Divider,
  Grid,
  Layout,
  Space,

  Affix,
  Breadcrumb,
  Dropdown,
  Menu,

  Popup,
];

export const install = function (app: App) {
  components.forEach((install) => {
    if (!install) return;
    app.use(install);
  });
};

export const version = require("../package.json").version;

// export * from "./components/*";
