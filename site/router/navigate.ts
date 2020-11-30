import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/component/affix",
    component: () => import("@/components/affix/README.md"),
  },
  // {
  //   path: "/component/breadcrumb",
  //   component: () => import("@/components/breadcrumb/README.md"),
  // },
  // {
  //   path: "/component/dropdown",
  //   component: () => import("@/components/dropdown/README.md"),
  // },
];

export default routes;
