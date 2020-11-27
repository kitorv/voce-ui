import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/component/button",
  //   name: "component-button",
  //   component: () => import("@/components/button/README.md"),
  // },
  // {
  //   path: "/component/color",
  //   name: "component-color",
  //   component: () => import("@/components/color/README.md"),
  // },
  {
    path: "/component/icon",
    name: "component-icon",
    component: () => import("@/components/icon/README.md"),
  },
  // {
  //   path: "/component/link",
  //   name: "component-link",
  //   component: () => import("@/components/link/README.md"),
  // },
  // {
  //   path: "/component/text",
  //   name: "component-text",
  //   component: () => import("@/components/text/README.md"),
  // },
];

export default routes;
