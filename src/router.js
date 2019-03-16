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
        }
      ]
    }
  ]
});
