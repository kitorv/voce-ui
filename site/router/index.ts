import { createRouter, createWebHashHistory } from "vue-router";
import developRoutes from "./develop";
import commonRoutes from "./common";
// import layoutRoutes from "./layout";
// import navigateRoutes from "./navigate";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/index.vue"),
      children: [
        {
          path: "/test",
          name: "common-test",
          component: () => import("../views/test.vue"),
        },
        ...developRoutes,
        ...commonRoutes,
        // ...layoutRoutes,
        // ...navigateRoutes,
      ],
    },
  ],
});

export default router;
