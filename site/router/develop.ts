import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/docs/start",
    component: () => import("../docs/start.md"),
  },
  {
    path: "/docs/theme",
    component: () => import("../docs/theme.md"),
  },
  {
    path: "/docs/changelog",
    component: () => import("../../CHANGELOG.md"),
  },
];

export default routes;
