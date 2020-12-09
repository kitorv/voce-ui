<template>
  <v-popup
    class="v-dropdown"
    v-model:visible="visible"
    v-model:placement="autoPlacement"
    :transition="transition"
    :trigger="trigger"
  >
    <template #reference>
      <slot name="reference" />
    </template>
    <template v-if="arrow" #arrow>
      <div :class="arrowClass" />
    </template>
    <template #content>
      <div :class="contentClasses" :placement="autoPlacement">
        <slot name="content" />
      </div>
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
    const visible = ref(false);

    const autoPlacement = ref<DropdownPlacement>(props.placement);

    const position = computed(() => {
      return autoPlacement.value?.includes("top") ? "top" : "bottom";
    });

    const transition = computed(() => {
      return `v-dropdown--transition-${position.value}`;
    });

    const arrowClass = computed(() => {
      return ["v-dropdown--arrow", `v-dropdown--arrow-${position.value}`];
    });

    const contentClasses = computed(() => {
      return ["v-dropdown--content", `v-dropdown--content-${position.value}`];
    });

    return {
      visible,
      contentClasses,
      autoPlacement,
      transition,
      arrowClass,
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

.v-dropdown--content-top {
  padding-bottom: 8px;
}

.v-dropdown--content-bottom {
  padding-top: 8px;
}

.v-dropdown--arrow-top {
  border-color: transparent #ffffff #ffffff transparent;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.06);
}

.v-dropdown--arrow-bottom {
  border-color: #ffffff transparent transparent #ffffff;
  box-shadow: -4px -4px 6px rgba(0, 0, 0, 0.06);
}
</style>
