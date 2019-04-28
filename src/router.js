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
          name: "index",
          component: () => import("../packages/components/grid/index.md")
        },
        {
          path: "/grid",
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
        },
        {
          path: "/radio",
          name: "component-radio",
          component: () => import("../packages/components/radio/index.md")
        },
        {
          path: "/input",
          name: "component-input",
          component: () => import("../packages/components/input/index.md")
        },
        {
          path: "/textarea",
          name: "component-textarea",
          component: () => import("../packages/components/textarea/index.md")
        },
        {
          path: "/select",
          name: "component-select",
          component: () => import("../packages/components/select/index.md")
        }
      ]
    }
  ]
});
