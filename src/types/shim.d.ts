declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}

declare module "*.md" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}
