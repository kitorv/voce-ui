import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/component/affix",
    name: "component-affix",
    component: () => import("@/components/affix/README.md"),
  },
  {
    path: "/component/breadcrumb",
    name: "component-breadcrumb",
    component: () => import("@/components/breadcrumb/README.md"),
  },
];

export default routes;
