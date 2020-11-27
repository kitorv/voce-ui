<template>
  <span :class="classList">Text</span>
</template>

<script lang="ts">
import { defineComponent, PropType, h, Slots, VNode } from "vue";
import { TextType, TitleType } from "./interface";

export default defineComponent({
  name: "VText",
  props: {
    title: {
      type: String as PropType<TitleType>,
      default: undefined,
    },
    type: {
      type: String as PropType<TextType>,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    mark: {
      type: Boolean,
      default: false,
    },
    code: {
      type: Boolean,
      default: false,
    },
    keyboard: {
      type: Boolean,
      default: false,
    },
    underline: {
      type: Boolean,
      default: false,
    },
    delete: {
      type: Boolean,
      default: false,
    },
    strong: {
      type: Boolean,
      default: false,
    },
    ellipsis: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots, emit }) {
    return () => {
      const classes = [
        `v-text`,
        `v-text--type-${props.type}`,
        {
          [`v-text--level-${props.title}`]: props.title,
          "v-text--disabled": props.disabled,
          "v-text--ellipsis": props.ellipsis,
        },
      ];

      let childrenNodes: Slots | VNode = slots;

      if (props.mark) {
        childrenNodes = h("mark", {}, childrenNodes);
      }

      if (props.code) {
        childrenNodes = h("code", {}, childrenNodes);
      }

      if (props.keyboard) {
        childrenNodes = h("kbd", {}, childrenNodes);
      }

      if (props.underline) {
        childrenNodes = h("u", {}, childrenNodes);
      }

      if (props.delete) {
        childrenNodes = h("del", {}, childrenNodes);
      }

      if (props.strong) {
        childrenNodes = h("strong", {}, childrenNodes);
      }

      const htmlTag = props.title ? props.title : "span";

      const onClick = (event: Event) => {
        if (props.disabled) return;
        emit("click", event);
      };

      return h(htmlTag, { class: classes, onClick }, childrenNodes);
    };
  },
});
</script>

<style lang="scss">
.v-text {
  code {
    margin: 0 0.2em;
    padding: 0.2em 0.4em 0.1em;
    font-size: 85%;
    background: rgba(150, 150, 150, 0.1);
    border: 1px solid rgba(100, 100, 100, 0.2);
    border-radius: 3px;
  }

  kbd {
    margin: 0 0.2em;
    padding: 0.15em 0.4em 0.1em;
    font-size: 90%;
    background: rgba(150, 150, 150, 0.06);
    border: 1px solid rgba(100, 100, 100, 0.2);
    border-bottom-width: 2px;
    border-radius: 3px;
  }
}

$color-maps: (
  default: $-color--text-primary,
  primary: $-color--primary,
  success: $-color--success,
  warning: $-color--warning,
  danger: $-color--danger,
  info: #999999,
);

@each $key in map-keys($color-maps) {
  $color: map-get($color-maps, $key);

  .v-text--type-#{$key} {
    color: $color;
  }
}

h1.v-text {
  font-size: 38px;
  line-height: 1.23;
}

h2.v-text {
  font-size: 30px;
  line-height: 1.35;
}

h3.v-text {
  font-size: 24px;
  line-height: 1.35;
}

h4.v-text {
  font-size: 20px;
  line-height: 1.4;
}

h5.v-text {
  font-size: 18px;
  line-height: 1.45;
}

h6.v-text {
  font-size: 16px;
  line-height: 1.5;
}

h1.v-text,
h2.v-text,
h3.v-text,
h4.v-text,
h5.v-text,
h6.v-text {
  margin-top: 0.7em;
  margin-bottom: 0.5em;
  font-weight: 600;
}

.v-text--disabled {
  cursor: not-allowed;
  color: #999999;
}

.v-text--ellipsis {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
