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
import { useRawRouter } from "@/utils";
import { defineComponent, inject, PropType, computed } from "vue";
import { RouteLocationRaw } from "vue-router";
import { BreadcrumbProvide, BreadcrumbProvideKey } from "./interface";

export default defineComponent({
  name: "VBreadcrumbItem",
  props: {
    to: {
      type: [Object, String] as PropType<RouteLocationRaw>,
      default: undefined,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const vBreadcrumb = inject<BreadcrumbProvide>(BreadcrumbProvideKey)!;
    const separator = computed(() => vBreadcrumb.separator.value);

    const router = useRawRouter();
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
