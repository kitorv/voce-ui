<script lang="tsx">
import { Transition } from "@/components/transition";
import { defineComponent, inject, Teleport } from "vue";
import { SubMenuProvide, SubMenuProvideKey } from "./interface";

export default defineComponent({
  emits: ["before-enter", "after-leave"],
  props: {
    inline: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots, attrs }) {
    const vSubmenu = inject<SubMenuProvide>(SubMenuProvideKey)!;

    return () => {
      if (!slots.default) return;
      const transition = (
        <Transition name="zoom-top">{slots.default()}</Transition>
      );
      if (vSubmenu.level.value !== 1) return transition;
      return <Teleport to="body">{transition}</Teleport>;
    };
  },
});
</script>
