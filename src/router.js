import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("./views/component.vue"),
      children: [
        {
          path: "/",
          name: "component-grid",
          component: () => import("../packages/components/grid/index.md")
        },
        {
          path: "/button",
          name: "component-button",
          component: () => import("../packages/components/button/index.md")
        },
        {
          path: "/checkbox",
          name: "component-checkbox",
          component: () => import("../packages/components/checkbox/index.md")
        }
      ]
    }
  ]
});
