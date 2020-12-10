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
import { PopupOffsetFunc } from "@/components/popup";
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

    const offset: PopupOffsetFunc = ({ placement }) => {
      console.log(placement);

      if (["top-start", "top", "top-end"].includes(placement)) {
        return [0, 4];
      }
      if (["bottom-start", "bottom", "bottom-end"].includes(placement)) {
        return [0, 4];
      }
      return [10, 10];
    };

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
  // padding: 4px 0;
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

//

// v-popup-placement="bottom-start"
// .v-popup--content[data-popper-placement^="top"] .v-popup--content-arrow {
//   bottom: 0;
// }
// .v-popup--content[data-popper-placement^="right"] .v-popup--content-arrow {
//   left: 0;
// }
// .v-popup--content[data-popper-placement^="bottom"] .v-popup--content-arrow {
//   top: 0;
// }
// .v-popup--content[data-popper-placement^="left"] .v-popup--content-arrow {
//   right: 0;
// }

[popup-placement^="top"] {
  .v-dropdown--arrow {
    // border-color: transparent #ffffff #ffffff transparent;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.06);
    bottom: 0;
    z-index: 1;
  }
}
// &[popup-placement^="bottom"] {
//     padding-top: 8px;
//   }
// .v-dropdown--content-top {
//   padding-top: 8px;
// }

// .v-dropdown--content-bottom {
//   padding-top: 8px;
// }

// .v-dropdown--arrow-top {
//   border-color: transparent #ffffff #ffffff transparent;
//   box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.06);
// }

// .v-dropdown--arrow-bottom {
//   border-color: #ffffff transparent transparent #ffffff;
//   box-shadow: -4px -4px 6px rgba(0, 0, 0, 0.06);
// }
</style>
