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
          path: "/doc/attribute",
          name: "doc-attribute",
          component: () => import("../document/attribute.md")
        },
        {
          path: "/doc/events",
          name: "doc-events",
          component: () => import("../document/events.md")
        },
        {
          path: "/doc/methods",
          name: "doc-methods",
          component: () => import("../document/methods.md")
        },
        {
          path: "/doc/column",
          name: "doc-column",
          component: () => import("../document/column.md")
        },
        {
          path: "/doc/row",
          name: "doc-row",
          component: () => import("../document/row.md")
        },
        {
          path: "/doc/pagination",
          name: "doc-pagination",
          component: () => import("../document/pagination.md")
        }
      ]
    }
  ]
});
