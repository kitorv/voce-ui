<template>
  <v-popup
    class="v-dropdown"
    v-model:visible="visible"
    :placement="placement"
    transition="v-dropdown"
    :trigger="trigger"
    :offset="offset"
  >
    <template #reference>
      <slot name="reference" />
    </template>
    <template #content>
      <div class="v-dropdown--arrow" popup-arrow />
      <div :class="conntentClasses">
        <slot name="content" />
      </div>
    </template>
  </v-popup>
</template>

<script lang="ts">
import { PopupOffset } from "@/components/popup";
import { computed, defineComponent, PropType, provide, ref } from "vue";
import {
  DropdownPlacement,
  DropdownProvide,
  DropdownProvideKey,
  DropdownTrigger,
} from "./interface";

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

    provide<DropdownProvide>(DropdownProvideKey, {
      updateVisible(value) {
        visible.value = value;
      },
    });

    const conntentClasses = computed(() => {
      return [
        "v-dropdown--content",
        { "v-dropdown--content-with-arrow": props.arrow },
      ];
    });

    const offset: PopupOffset = [0, 8];

    return {
      visible,
      offset,
      conntentClasses,
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
}

.v-dropdown--content {
  position: relative;
  padding: 4px 0;
}

[popup-placement^="top"] {
  .v-dropdown--content-with-arrow::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: -8px;
    left: 0;
    z-index: -9999;
    opacity: 0.0001;
    content: " ";
  }
}

[popup-placement^="bottom"] {
  .v-dropdown--content-with-arrow::before {
    position: absolute;
    top: -8px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -9999;
    opacity: 0.0001;
    content: " ";
  }
}

.v-dropdown {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
      opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);

    &[popup-placement^="top"] {
      transform-origin: center bottom;
    }

    &[popup-placement^="bottom"] {
      transform-origin: center top;
    }
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scaleY(0);
  }
}

[popup-placement^="top"] {
  .v-dropdown--arrow {
    border-color: transparent #ffffff #ffffff transparent;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.06);
    bottom: 0;
    z-index: 1;
  }
}

[popup-placement^="bottom"] {
  .v-dropdown--arrow {
    border-color: #ffffff transparent transparent #ffffff;
    box-shadow: -4px -4px 6px rgba(0, 0, 0, 0.06);
    top: 0;
    z-index: 1;
  }
}
</style>
