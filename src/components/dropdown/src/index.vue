<template>
  <v-popup
    class="v-dropdown"
    v-model:visible="visible"
    v-model:placement="autoPlacement"
    :transition="transition"
  >
    <template #reference>
      <div v-on="referenceEvents">
        <slot name="reference" />
      </div>
    </template>
    <template #content>
      <div v-on="contentEvents" class="v-dropdown--content">
        <slot name="content" />
      </div>
    </template>
  </v-popup>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from "vue";
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
  },
  setup(props) {
    const visible = ref(false);
    // const onReferenceClick = () => {
    //   visible.value = !visible.value;
    // };
    let setTimeoutId: number;
    const referenceEvents = computed(() => {
      if (props.trigger === "hover") {
        return {
          mouseenter() {
            clearTimeout(setTimeoutId);
            visible.value = true;
          },
          mouseleave() {
            clearTimeout(setTimeoutId);
            setTimeoutId = window.setTimeout(() => {
              visible.value = false;
            }, 200);
          },
        };
      }
    });
    const contentEvents = computed(() => {
      if (props.trigger !== "hover") return;
      return referenceEvents.value;
    });

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

    return {
      visible,
      referenceEvents,
      contentEvents,
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
</style>
