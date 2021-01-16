<template>
  <a :class="rootClass" v-bind="linkAttrs" @click="onClick($event)">
    <v-icon v-if="prefixIcon" class="v-link--prefix-icon" :type="prefixIcon" />
    <span class="v-link--text">
      <slot />
    </span>
    <v-icon v-if="suffixIcon" class="v-link--suffix-icon" :type="suffixIcon" />
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { LinkType } from "./interface";
import { RouteLocationRaw } from "vue-router";
import { useRawRouter } from "@/utils";
import { IconType } from "@/components/icon";

export default defineComponent({
  name: "VLink",
  props: {
    type: {
      type: String as PropType<LinkType>,
      default: "default" as LinkType,
    },
    underline: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    prefixIcon: {
      type: String as PropType<IconType>,
      default: undefined,
    },
    suffixIcon: {
      type: String as PropType<IconType>,
      default: undefined,
    },
    href: {
      type: String,
      default: undefined,
    },
    to: {
      type: [Object, String] as PropType<RouteLocationRaw>,
      default: undefined,
    },
  },
  setup(props, { emit }) {
    const rootClass = computed(() => {
      return [
        `v-link`,
        `v-link--type-${props.type}`,
        {
          "v-link--underline": props.underline && !props.disabled,
          "v-link--disabled": props.disabled,
        },
      ];
    });

    const linkAttrs = computed(() => {
      if (props.disabled || !props.href) return;
      return {
        target: "_blank",
        href: props.href,
      };
    });

    const router = useRawRouter();
    const onClick = (event: Event) => {
      if (!linkAttrs) return;
      if (props.to && router) {
        router.push(props.to);
        return;
      }
      emit("click", event);
    };

    return { rootClass, linkAttrs, onClick };
  },
});
</script>

<style lang="scss">
.v-link {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  outline: none;
  padding: 0;
  font-size: 14px;
  cursor: pointer;
}

.v-link--underline:hover:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 0;
  bottom: 0;
  border-bottom: 1px solid transparent;
}

$color-maps: (
  default: $-color--text-primary,
  regular: $-color--text-regular,
  secondary: $-color--text-secondary,
  placeholder: $-color--text-placeholder,
  primary: $-color--primary,
  success: $-color--success,
  warning: $-color--warning,
  danger: $-color--danger,
);

@each $key in map-keys($color-maps) {
  $color: map-get($color-maps, $key);

  .v-link--type-#{$key} {
    color: $color;

    &.v-link--underline:hover:after {
      border-bottom-color: $color;
    }

    &.v-link--disabled {
      @if (
        $key==default or $key==regular or $key==secondary or $key==placeholder
      ) {
        color: mix($-color--text-placeholder, #ffffff, 60%);
      } @else {
        color: mix($color, #ffffff, 60%);
      }
      cursor: not-allowed;
    }
  }
}

.v-link--prefix-icon {
  margin-right: 4px;
}

.v-link--suffix-icon {
  margin-left: 4px;
}
</style>
