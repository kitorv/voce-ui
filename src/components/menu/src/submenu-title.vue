<template>
  <div :class="classes">
    <div class="v-submenu-title--content">
      <v-icon v-if="icon" class="v-submenu-title--content-icon" :type="icon" />
      <span> {{ title }}</span>
      <v-icon
        v-if="arrow"
        class="v-submenu-title--content-arrow"
        :type="arrowIcon"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";
import { MenuProvide, MenuProvideKey, SubmenuIcon } from "./interface";

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
    active: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const vMenu = inject<MenuProvide>(MenuProvideKey)!;

    const classes = computed(() => {
      return [
        "v-submenu-title",
        {
          "v-submenu-title--active": props.active,
          "v-submenu-title--arrow": props.arrow,
        },
      ];
    });

    const arrowIcon = computed(() => {
      return vMenu.mode.value === "horizontal" ? "right" : "down";
    });

    return { classes, arrowIcon };
  },
});
</script>

<style lang="scss">
.v-submenu-title--arrow {
  padding-right: 40px;
}

.v-submenu-title--content-arrow {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
