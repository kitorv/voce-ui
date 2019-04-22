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
          name: "hello",
          component: () => import("./components/HelloWorldDoc.md")
        },
        {
          path: "/layout",
          name: "component-layout",
          component: () => import("../examples/layout.md")
        },
        {
          path: "/button",
          name: "component-button",
          component: () => import("../examples/button.md")
        }
      ]
    }
  ]
});
