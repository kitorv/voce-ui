<template>
  <button :class="classes" @click="onClick($event)">
    <span v-if="isShowIcon" class="v-button--icon">
      <i :class="icon" />
    </span>
    <span v-if="loading" class="v-button--loading-icon">
      <i class="v-icon-loading" />
    </span>
    <span v-if="isShowText" class="v-button--text">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { IconType } from "../../icons";
import { useRouter, RouteLocationRaw } from "vue-router";

export type ButtonType =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger";

export type ButttonShape = "circle" | "round";

export type ButttonSize = "large" | "default" | "small";

export default defineComponent({
  name: "VButton",
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: "default",
    },
    size: {
      type: String as PropType<ButttonSize>,
      default: "default",
    },
    shape: String as PropType<ButttonShape>,
    icon: String as PropType<IconType>,
    dashed: Boolean,
    plain: Boolean,
    link: Boolean,
    disabled: Boolean,
    loading: Boolean,
    to: [Object, String] as PropType<RouteLocationRaw>,
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const isDisabled = computed(() => {
      return props.disabled || props.loading;
    });

    const isShowIcon = computed(() => {
      return props.icon && !props.loading;
    });

    const isShowText = computed(() => {
      const isCircleLoading = props.loading && props.shape === "circle";
      return slots.default && !isCircleLoading;
    });

    const classes = computed(() => {
      return [
        `v-button`,
        `v-button--type-${props.type}`,
        `v-button--size-${props.size}`,
        {
          [`v-button--shape-${props.shape}`]: props.shape,
          "v-button--dashed": props.dashed,
          "v-button--plain": props.plain,
          "v-button--link": props.link,
          "v-button--disabled": isDisabled.value,
          "v-button--loading": props.loading,
        },
      ];
    });

    const router = useRouter();

    const onClick = (event: Event) => {
      if (isDisabled.value) return;
      if (props.to && router) {
        router.push(props.to as RouteLocationRaw);
        return;
      }
      emit("click", event);
    };

    return { classes, isShowIcon, isShowText, onClick };
  },
});
</script>

<style lang="scss">
.v-button {
  line-height: 1.5;
  position: relative;
  display: inline-flex;
  align-items: center;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  border-radius: 2px;
  color: $-color--text-primary;
  background-color: #fff;
  border-color: $-color--border-base;
  appearance: button;
  cursor: pointer;

  &:active,
  &:focus {
    outline: 0;
  }
}

.v-button--type-default {
  &:hover {
    color: $-color--primary;
    background-color: #fff;
    border-color: $-color--primary;
  }

  &:active {
    color: darken($-color--primary, 10%);
    background-color: #fff;
    border-color: darken($-color--primary, 10%);
  }
}

.v-button--size-large {
  height: 40px;
  padding: 6px 15px;
  font-size: 16px;

  &.v-button--shape-round {
    height: 40px;
    padding: 6px 20px;
    border-radius: 40px;
  }

  &.v-button--shape-circle {
    min-width: 40px;
  }
}

.v-button--size-default {
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;

  &.v-button--shape-round {
    height: 32px;
    padding: 4px 16px;
    border-radius: 32px;
  }

  &.v-button--shape-circle {
    min-width: 32px;
  }
}

.v-button--size-small {
  height: 24px;
  padding: 0 7px;
  font-size: 14px;

  &.v-button--shape-round {
    height: 24px;
    padding: 0 12px;
    border-radius: 24px;
  }

  &.v-button--shape-circle {
    min-width: 24px;
  }
}

.v-button--shape-circle {
  padding-right: 0;
  padding-left: 0;
  justify-content: center;
  border-radius: 50%;
}

.v-button--disabled {
  cursor: not-allowed;
  &,
  &:hover,
  &:focus,
  &:active {
    color: $-color--disabled-color;
    background-color: $-color--disabled-background-color;
    border-color: $-color--disabled-border-color;
  }
}

$color-maps: (
  primary: $-color--primary,
  success: $-color--success,
  warning: $-color--warning,
  danger: $-color--danger,
);

@each $key in map-keys($color-maps) {
  $color: map-get($color-maps, $key);

  .v-button--type-#{$key} {
    border-color: $color;
    background: $color;
    color: #ffffff;

    &:hover {
      border-color: mix($color, #ffffff, 90%);
      background: mix($color, #ffffff, 90%);
    }

    &:active {
      border-color: mix($color, #000000, 90%);
      background: mix($color, #000000, 90%);
    }

    &.v-button--plain {
      color: $color;
      background: #ffffff;
    }

    &.v-button--link {
      color: $color;
      border-width: 0;
      background-color: #ffffff;
      box-shadow: none;
    }

    &.v-button--disabled {
      color: #ffffff;

      &,
      &:focus,
      &:hover,
      &:active {
        border-color: mix($color, #ffffff, 60%);
        background: mix($color, #ffffff, 60%);
      }

      &.v-button--dashed,
      &.v-button--plain {
        background-color: #ffffff;
        color: mix($color, #ffffff, 60%);
      }

      &.v-button--link {
        color: mix($color, #ffffff, 60%);
        border-width: 0;
        background-color: #ffffff;
      }
    }
  }
}

.v-button--icon {
  line-height: 1;
  font-size: 16px;
}

.v-button--text {
  line-height: 1;
}

.v-button--icon + .v-button--text {
  margin-left: 6px;
  line-height: 16px;
}

.v-button--dashed {
  border-style: dashed;
}

.v-button--loading-icon {
  line-height: 1;
  padding-right: 8px;

  > i {
    display: inline-block;
    animation: vButtonLoading 1s infinite linear;
  }
}

.v-button--shape-circle .v-button--loading-icon {
  padding-right: 0;
}

@keyframes vButtonLoading {
  100% {
    transform: rotate(360deg);
  }
}
</style>
