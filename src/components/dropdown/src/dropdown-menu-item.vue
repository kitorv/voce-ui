<template>
  <div :class="rootClass" @click="onClick">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from "vue";
import { DropdownMenuProvide, DropdownMenuProvideKey } from "./interface";

export default defineComponent({
  name: "VDropdownMenuItem",
  props: {
    value: {
      type: [String, Number, Object],
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const vMenu = inject<DropdownMenuProvide>(DropdownMenuProvideKey);

    const rootClass = computed(() => {
      return [
        "v-dropdown-menu-item",
        { "v-dropdown-menu-item-disabled": props.disabled },
      ];
    });

    const onClick = () => {
      if (props.disabled) return;
      vMenu?.execOnClick(props.value);
    };

    return { rootClass, onClick };
  },
});
</script>

<style lang="scss">
.v-dropdown-menu-item {
  clear: both;
  margin: 0;
  padding: 5px 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  white-space: nowrap;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: darken(#ffffff, 8%);
  }
}

.v-dropdown-menu-item-disabled {
  &,
  &:hover {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
}
</style>
