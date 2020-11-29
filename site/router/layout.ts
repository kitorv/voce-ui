import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/component/divider",
    component: () => import("@/components/divider/README.md"),
  },
  {
    path: "/component/grid",
    component: () => import("@/components/grid/README.md"),
  },
  {
    path: "/component/layout",
    component: () => import("@/components/layout/README.md"),
  },
  {
    path: "/component/space",
    component: () => import("@/components/space/README.md"),
  },
];

export default routes;
