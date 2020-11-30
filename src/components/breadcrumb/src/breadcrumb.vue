<template>
  <div class="v-breadcrumb">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, computed } from "vue";
import { BreadcrumbProvide, BreadcrumbProvideKey } from "./interface";

export default defineComponent({
  name: "VBreadcrumb",
  props: {
    separator: {
      type: String,
      default: "/",
    },
  },
  setup(props) {
    provide<BreadcrumbProvide>(BreadcrumbProvideKey, {
      separator: computed(() => props.separator),
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
      cursor: auto;
    }
  }
}
</style>
