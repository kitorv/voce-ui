<template>
  <span class="v-breadcrumb-item">
    <span class="v-breadcrumb-item--link" @click="onClick($event)">
      <slot />
    </span>
    <span class="v-breadcrumb-item--separator">
      {{ separator }}
    </span>
  </span>
</template>
<script lang="ts">
import { defineComponent, inject, ref, PropType } from "vue";
import { VBreadcrumb } from "./breadcrumb.vue";
import { RouteLocationRaw, useRouter } from "vue-router";

export default defineComponent({
  name: "VBreadcrumbItem",
  props: {
    to: [Object, String] as PropType<RouteLocationRaw>,
  },
  emits: ["click"],
  setup(props, { emit }) {
    const vBreadcrumb = inject<VBreadcrumb>("VBreadcrumb");
    const separator = vBreadcrumb ? vBreadcrumb.separator : ref("/");

    const router = useRouter();

    const onClick = (event: Event) => {
      if (props.to && router) {
        router.push(props.to as RouteLocationRaw);
        return;
      }
      emit("click", event);
    };

    return { separator, onClick };
  },
});
</script>

<style lang="scss">
.v-breadcrumb-item {
  color: $-color--text-secondary;
}

.v-breadcrumb-item--link:hover {
  color: $-color--primary;
  cursor: pointer;
}

.v-breadcrumb-item--separator {
  margin: 0 4px;
}
</style>
