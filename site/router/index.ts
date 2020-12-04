import { createRouter, createWebHashHistory } from "vue-router";
import developRoutes from "./develop";
import commonRoutes from "./common";
import layoutRoutes from "./layout";
import navigateRoutes from "./navigate";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/docs/start",
    },
    {
      path: "/home",
      component: () => import("../views/index.vue"),
      children: [
        ...developRoutes,
        ...commonRoutes,
        ...layoutRoutes,
        ...navigateRoutes,
      ],
    },
    {
      path: "/test",
      component: () => import("../views/test.vue"),
    },
  ],
});

export default router;
