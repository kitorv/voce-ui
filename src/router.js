import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/home.vue"),
      children: [
        {
          path: "/",
          name: "example",
          component: () => import("../examples/basic.md")
        },
        {
          path: "/example/basic",
          name: "example-basic",
          component: () => import("../examples/basic.md")
        },
        {
          path: "/example/column",
          name: "example-column",
          component: () => import("../examples/column.md")
        },
        {
          path: "/example/column/width",
          name: "example-column-width",
          component: () => import("../examples/column-width.md")
        },
        {
          path: "/example/height",
          name: "example-height",
          component: () => import("../examples/height.md")
        }
      ]
    }
  ]
});
