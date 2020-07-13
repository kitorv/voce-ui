<template>
  <div :class="classList">
    <span v-if="showText" class="v-divider--text">
      <slot />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export type DividerType = "horizontal" | "vertical";

export type OrientationType = "left" | "center" | "right";

export default defineComponent({
  name: "VDivider",
  props: {
    type: {
      type: String as PropType<DividerType>,
      default: "horizontal",
    },
    orientation: {
      type: String as PropType<OrientationType>,
      default: "center",
    },
  },
  setup(props, { slots, emit }) {
    const showText = slots.default && props.type !== "vertical";

    const classList = [
      "v-divider",
      `v-divider--type-${props.type}`,
      `v-divider--orientation-${props.orientation}`,
      {
        "v-divider--with-text": showText,
        "v-divider--with-text-left": showText && props.orientation === "left",
        "v-divider--with-text-right": showText && props.orientation === "right",
      },
    ];

    return { classList, showText };
  },
});
</script>

<style lang="scss">
.v-divider {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: $-color--text-primary;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum";
}

.v-divider--type-horizontal {
  display: flex;
  clear: both;
  width: 100%;
  min-width: 100%;
  margin: 24px 0;
  border-top: 1px solid $-color--border-extra-light;
}

.v-divider--type-vertical {
  position: relative;
  top: -0.06em;
  display: inline-block;
  height: 0.9em;
  margin: 0 8px;
  vertical-align: middle;
  border-top: 0;
  border-left: 1px solid $-color--border-extra-light;
}

.v-divider--with-text {
  display: flex;
  margin: 16px 0;
  color: $-color--text-primary;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-align: center;
  border-top: 0;
}

.v-divider--with-text::before,
.v-divider--with-text::after {
  position: relative;
  top: 50%;
  width: 50%;
  border-top: 1px solid $-color--border-extra-light;
  transform: translateY(50%);
  content: "";
}

.v-divider--orientation-left {
  &::before {
    top: 50%;
    width: 5%;
  }

  &::after {
    top: 50%;
    width: 95%;
  }
}

.v-divider--orientation-right {
  &::before {
    top: 50%;
    width: 95%;
  }

  &::after {
    top: 50%;
    width: 5%;
  }
}

.v-divider--text {
  display: inline-block;
  padding: 0 1em;
}
</style>
