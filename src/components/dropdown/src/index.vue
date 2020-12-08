<template>
  <v-popup
    class="v-dropdown"
    v-model:placement="autoPlacement"
    :transition="transition"
    :trigger="trigger"
  >
    <template #reference>
      <slot name="reference" />
    </template>
    <template v-if="arrow" #arrow>
      <div class="v-dropdown--arrow" :placement="autoPlacement" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
  </v-popup>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import { DropdownPlacement, DropdownTrigger } from "./interface";

export default defineComponent({
  name: "VDropdown",
  props: {
    trigger: {
      type: String as PropType<DropdownTrigger>,
      default: "hover" as DropdownTrigger,
    },
    placement: {
      type: String as PropType<DropdownPlacement>,
      default: "bottom-start" as DropdownPlacement,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const contentClasses = computed(() => {
      return [
        "v-dropdown--content",
        { "v-dropdown--content-with-arrow": props.arrow },
      ];
    });

    const autoPlacement = ref<DropdownPlacement>(props.placement);
    const transition = computed(() => {
      const position = autoPlacement.value?.includes("top") ? "top" : "bottom";
      return `v-dropdown--transition-${position}`;
    });

    return {
      contentClasses,
      autoPlacement,
      transition,
    };
  },
});
</script>

<style lang="scss">
.v-dropdown {
  display: inline-block;
  position: relative;
  font-size: 14px;
  cursor: pointer;
}

.v-dropdown--arrow {
  display: block;
  width: 0;
  height: 0;
  background: 0 0;
  border-style: solid;
  border-width: 4px;
  transform: rotate(45deg);
  margin: 4px;
}

.v-dropdown--content {
  padding: 4px 0;
}

.v-dropdown--transition-bottom {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
      opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center top;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scaleY(0);
  }
}

.v-dropdown--transition-top {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
      opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center bottom;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scaleY(0);
  }
}

.v-dropdown--content-with-arrow[placement^="top"] {
  padding-bottom: 8px;
}

.v-dropdown--arrow[placement^="top"] {
  border-color: transparent #ffffff #ffffff transparent;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.06);
}

.v-dropdown--content-with-arrow[placement^="bottom"] {
  padding-top: 8px;
}

.v-dropdown--arrow[placement^="bottom"] {
  border-color: #ffffff transparent transparent #ffffff;
  box-shadow: -4px -4px 6px rgba(0, 0, 0, 0.06);
}
</style>
