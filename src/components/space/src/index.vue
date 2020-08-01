<script lang="ts">
import { defineComponent, h, PropType, CSSProperties, computed } from "vue";

export type SpaceDirection = "vertical" | "horizontal";

export type SpaceSizeType = "small" | "medium" | "large";

export type SpaceSize = SpaceSizeType | number;

export type SpaceSurround = SpaceSizeType | Array<number> | number;

export default defineComponent({
  name: "VSpace",
  props: {
    direction: {
      type: String as PropType<SpaceDirection>,
      default: "horizontal" as SpaceDirection,
    },
    size: {
      type: [Number, String] as PropType<SpaceSize>,
      default: "small" as SpaceSize,
    },
    surround: [Number, Array, String] as PropType<SpaceSurround>,
    top: Number,
    right: Number,
    bottom: Number,
    left: Number,
  },
  setup(props, { slots }) {
    if (!slots.default) return;

    const sizes: Record<SpaceSizeType, number> = {
      small: 8,
      medium: 16,
      large: 24,
    };

    const normalizeSurround = () => {
      if (!props.surround) return [0, 0];
      if (typeof props.surround === "string") {
        const size = sizes[props.surround];
        return [size, size];
      }
      if (Array.isArray(props.surround)) {
        return [props.surround[0], props.surround[1]];
      }
      return [props.surround, props.surround];
    };

    const surroundStyle = computed(() => {
      const [vertical, horizontal] = normalizeSurround();

      const style: CSSProperties = {
        paddingTop: `${props.top || vertical}px`,
        paddingBottom: `${props.bottom || vertical}px`,
        paddingLeft: `${props.left || horizontal}px`,
        paddingRight: `${props.right || horizontal}px`,
      };
      return style;
    });

    const size = computed(() => {
      let sizeValue = props.size;
      if (typeof props.size === "string") {
        sizeValue = sizes[props.size];
      }
      return `${sizeValue}px`;
    });

    const childVNodes = Array.from(slots.default(), (vNode, index) => {
      const sizeValue = index != 0 ? size.value : 0;

      const marginTop = props.direction === "vertical" ? sizeValue : 0;
      const marginLeft = props.direction === "horizontal" ? sizeValue : 0;

      const itemStyle: CSSProperties = { marginTop, marginLeft };
      return h("div", { class: "v-space--item", style: itemStyle }, vNode);
    });

    const classList = ["v-space", `v-space--direction-${props.direction}`];

    return () => {
      return h(
        "div",
        { class: classList, style: surroundStyle.value },
        childVNodes
      );
    };
  },
});
</script>

<style lang="scss">
.v-space {
  display: flex;
  box-sizing: border-box;
}

.v-space--direction-vertical {
  flex-direction: column;
}

.v-space--item {
  box-sizing: border-box;
}
</style>
