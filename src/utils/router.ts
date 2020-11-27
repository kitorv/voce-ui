import { getCurrentInstance, Ref } from "vue";
import { RouteLocationNormalizedLoaded, Router } from "vue-router";

export const useRawRouter = (): Router => {
  const app = getCurrentInstance()!;
  return app.appContext.config.globalProperties.$router as Router;
};

export const useRawRoute = ():  Ref<RouteLocationNormalizedLoaded> => {
  const app = getCurrentInstance()!;
  const router= app.appContext.config.globalProperties.$router as Router;
 return router.currentRoute
};
