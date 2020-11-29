<script lang="tsx">
import {
  computed,
  CSSProperties,
  defineComponent,
  Fragment,
  isVNode,
  PropType,
  VNode,
} from "vue";
import { SpaceDirection, SpaceSize, SpaceSizeType } from "./interface";

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
    top: {
      type: Number,
      default: 0,
    },
    right: {
      type: Number,
      default: 0,
    },
    bottom: {
      type: Number,
      default: 0,
    },
    left: {
      type: Number,
      default: 0,
    },
    fit: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    const size = computed(() => {
      const sizes: Record<SpaceSizeType, number> = {
        small: 8,
        medium: 16,
        large: 24,
      };

      let sizeValue = props.size;
      if (typeof props.size === "string") {
        sizeValue = sizes[props.size];
      }
      return `${sizeValue}px`;
    });

    const createSpaceItem = (vNode: VNode, isFirstVNode: boolean = false) => {
      const sizeValue = isFirstVNode ? 0 : size.value;
      const paddingTop = props.direction === "vertical" ? sizeValue : 0;
      const paddingLeft = props.direction === "horizontal" ? sizeValue : 0;
      const style: CSSProperties = { paddingTop, paddingLeft };
      return (
        <div class="v-space--item" style={style}>
          {vNode}
        </div>
      );
    };

    const createSpaceItemList = () => {
      if (!slots.default) return [];
      let isFirstVNode = true;
      const createNewNode = (vNode: VNode) => {
        const newVNode = createSpaceItem(vNode, isFirstVNode);
        isFirstVNode = false;
        return newVNode;
      };
      return Array.from(slots.default(), (vNode, index) => {
        if (vNode.type !== Fragment) {
          return createNewNode(vNode);
        }
        if (!Array.isArray(vNode.children)) return vNode;
        return Array.from(vNode.children, (childVNode) => {
          if (!isVNode(childVNode)) return childVNode;
          return createNewNode(childVNode);
        });
      });
    };

    const classes = computed(() => {
      return [
        "v-space",
        `v-space--direction-${props.direction}`,
        { "v-space--fit": props.fit },
      ];
    });

    const style = computed<CSSProperties>(() => {
      return {
        paddingTop: `${props.top}px`,
        paddingRight: `${props.right}px`,
        paddingBottom: `${props.bottom}px`,
        paddingLeft: `${props.left}px`,
      };
    });

    return () => {
      return (
        <div class={classes.value} style={style.value}>
          {createSpaceItemList()}
        </div>
      );
    };
  },
});
</script>

<style lang="scss">
.v-space {
  display: inline-flex;
  box-sizing: border-box;
}

.v-space--direction-vertical {
  flex-direction: column;
}

.v-space--fit {
  display: flex;
}

.v-space--item {
  box-sizing: border-box;
}
</style>
