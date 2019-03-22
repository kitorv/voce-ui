import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
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
          path: "/example/resize",
          name: "example-resize",
          component: () => import("../examples/resize.md")
        },
        {
          path: "/example/style",
          name: "example-style",
          component: () => import("../examples/style.md")
        },
        {
          path: "/example/render",
          name: "example-render",
          component: () => import("../examples/render.md")
        },
        {
          path: "/example/data",
          name: "example-data",
          component: () => import("../examples/data.md")
        },
        {
          path: "/example/pagination",
          name: "example-pagination",
          component: () => import("../examples/pagination.md")
        }
      ]
    }
  ]
});
