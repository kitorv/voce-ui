import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "docs-start",
    component: () => import("../docs/start.md"),
  },
  {
    path: "/docs/theme",
    name: "docs-theme",
    component: () => import("../docs/theme.md"),
  },
  {
    path: "/docs/changelog",
    name: "docs-changelog",
    component: () => import("../../CHANGELOG.md"),
  },
];

export default routes;
