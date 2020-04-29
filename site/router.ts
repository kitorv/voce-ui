import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../site/views/index.vue"),
      children: [
        {
          path: "/",
          name: "doc-start",
          component: () => import("../site/docs/start.md"),
        },
        {
          path: "/component/icon",
          name: "component-icon",
          component: () => import("@/components/icons/index.md"),
        },
      ],
    },
  ],
});

export default router;
