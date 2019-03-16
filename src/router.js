import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/home.vue"),
      children: [
        {
          path: "",
          redirect: "/example/basic"
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
