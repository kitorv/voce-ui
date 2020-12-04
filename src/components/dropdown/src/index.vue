<template>
  <v-popup
    class="v-dropdown"
    v-model:visible="visible"
    v-model:placement="autoPlacement"
    :transition="transition"
  >
    <template #trigger>
      <div @click="onTriggerClick">
        <slot name="trigger" />
      </div>
    </template>
    <template #content>
      <div class="v-dropdown--content">
        <slot name="content" />
      </div>
    </template>
  </v-popup>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from "vue";
import { DropdownPlacement } from "./interface";

export default defineComponent({
  name: "VDropdown",
  props: {
    placement: {
      type: String as PropType<DropdownPlacement>,
      default: "bottom-start" as DropdownPlacement,
    },
  },
  setup(props) {
    const visible = ref(false);
    const onTriggerClick = () => {
      visible.value = !visible.value;
    };

    const autoPlacement = ref<DropdownPlacement>();
    watch(
      () => props.placement,
      (value) => {
        autoPlacement.value = value;
      },
      { immediate: true }
    );
    const transition = computed(() => {
      const position = autoPlacement.value?.includes("top") ? "top" : "bottom";
      return `v-dropdown--transition-${position}`;
    });

    return { visible, onTriggerClick, autoPlacement, transition };
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
</style>
