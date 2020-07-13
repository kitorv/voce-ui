<template>
  <div :class="classList"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export type DividerType = "horizontal" | "vertical";

export default defineComponent({
  name: "VDivider",
  props: {
    type: {
      type: String as PropType<DividerType>,
      default: "horizontal",
    },
  },
  setup(props, { slots, emit }) {
    const classList = ["v-vidider", `v-vidider--${props.type}`];

    return { classList };
  },
});
</script>

<style lang="scss">
.v-vidider {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: $-color--border-base;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum";
  border-top: 1px solid $-color--border-extra-light;
}

.v-divider--horizontal {
  display: flex;
  clear: both;
  width: 100%;
  min-width: 100%;
  margin: 24px 0;
}

.v-divider--vertical {
  position: relative;
  top: -0.06em;
  display: inline-block;
  height: 0.9em;
  margin: 0 8px;
  vertical-align: middle;
  border-top: 0;
  border-left: 1px solid $-color--border-extra-light;
}
</style>
