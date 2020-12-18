<template>
  <div class="v-submenu-title">
    <div class="v-submenu-title--content">
      <v-icon v-if="icon" class="v-submenu-title--content-icon" :type="icon" />
      <span> {{ title }}</span>
      <v-icon v-if="arrow" class="v-submenu-title--content-arrow" type="down" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { SubmenuIcon } from "./interface";

export default defineComponent({
  props: {
    icon: {
      type: String as PropType<SubmenuIcon>,
      default: undefined,
    },
    title: {
      type: [String, Number],
      default: undefined,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
.v-submenu-title--content-arrow {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
