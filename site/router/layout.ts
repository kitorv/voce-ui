import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/component/divider",
    name: "component-divider",
    component: () => import("@/components/divider/README.md"),
  },
  {
    path: "/component/grid",
    name: "component-grid",
    component: () => import("@/components/grid/README.md"),
  },
  // {
  //   path: "/component/layout",
  //   name: "component-layout",
  //   component: () => import("@/components/layout/README.md"),
  // },
  // {
  //   path: "/component/space",
  //   name: "component-space",
  //   component: () => import("@/components/space/README.md"),
  // },
];

export default routes;
