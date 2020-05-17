import { App, ComponentCustomOptions } from "vue";

declare module "@vue/runtime-core" {
  interface ComponentCustomOptions {
    install?: (app: App) => void;
  }
}
