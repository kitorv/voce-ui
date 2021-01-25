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
  setup(props, { slots }) {
    const vMenu = inject<MenuProvide>(MenuProvideKey)!;

    const vSubmenu = inject<SubMenuProvide>(SubMenuProvideKey)!;

    const name = computed(() => {
      if (vMenu.isHorizontal.value) return "v-submenu-horizontal";
      // return "v-submenu-vertical-fade";
      return "v-submenu-vertical-zoom-right";
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

.v-submenu-vertical-zoom-right {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scale(1, 1);
    transition: transform 0.25s, opacity 0.2s;
    transform-origin: 0 0;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(0.6, 0.6);
  }
}

.v-submenu-vertical-fade {
  &-enter-active {
    transition: opacity 0.05s, transform 0.05s;
  }

  &-enter-from {
    transform: scaleY(0.8);
    opacity: 0;
  }

  &-leave-active {
    transition: opacity 0.025s, transform 0.025s;
  }

  &-leave {
    opacity: 0.4;
  }

  &-leave-to {
    opacity: 0;
    transform: scaleY(0.8);
  }
}
</style>
