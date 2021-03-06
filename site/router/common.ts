import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/component/button",
    component: () => import("@/components/button/README.md"),
  },
  {
    path: "/component/color",
    component: () => import("@/components/color/README.md"),
  },
  {
    path: "/component/icon",
    component: () => import("@/components/icon/README.md"),
  },
  {
    path: "/component/link",
    component: () => import("@/components/link/README.md"),
  },
  {
    path: "/component/text",
    component: () => import("@/components/text/README.md"),
  },
];

export default routes;
