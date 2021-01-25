<script lang="tsx">
import { computed, defineComponent, inject, Teleport, Transition } from "vue";
import {
  MenuProvide,
  MenuProvideKey,
  SubMenuProvide,
  SubMenuProvideKey,
} from "./interface";

export default defineComponent({
  emits: ["before-enter", "after-leave"],
  props: {
    inline: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots, attrs }) {
    const vMenu = inject<MenuProvide>(MenuProvideKey)!;

    const vSubmenu = inject<SubMenuProvide>(SubMenuProvideKey)!;

    const name = computed(() => {
      if (vMenu.isHorizontal.value) return "v-submenu-horizontal";
      return;
    });

    return () => {
      if (!slots.default) return;
      const transition = (
        <Transition name={name.value}>{slots.default()}</Transition>
      );
      if (vSubmenu.level.value !== 1) return transition;
      return <Teleport to="body">{transition}</Teleport>;
    };
  },
});
</script>

<style lang="scss">
.v-submenu-horizontal {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 0.25s, opacity 0.25s;
    transform-origin: center top;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scaleY(0.8);
  }
}
</style>
