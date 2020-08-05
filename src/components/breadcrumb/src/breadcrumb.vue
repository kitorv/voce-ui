<template>
  <div class="v-breadcrumb">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, ComputedRef, computed } from "vue";

export type VBreadcrumb = {
  separator: ComputedRef<string>;
};

export default defineComponent({
  name: "VBreadcrumb",
  props: {
    separator: {
      type: String,
      default: "/",
    },
  },
  setup(props) {
    provide<VBreadcrumb>("VBreadcrumb", {
      separator: computed(() => {
        return props.separator;
      }),
    });
  },
});
</script>

<style lang="scss">
.v-breadcrumb {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: $-color--text-primary;
  font-size: 14px;
  line-height: 1.5;
  list-style: none;

  .v-breadcrumb-item:last-child {
    color: $-color--text-primary;

    .v-breadcrumb-item--separator {
      display: none;
    }

    .v-breadcrumb-item--link:hover {
      color: $-color--text-primary;
      cursor: default;
    }
  }
}
</style>
