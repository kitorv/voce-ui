<script lang="tsx">
import { defineComponent, inject, PropType, Teleport, Transition } from "vue";
import {
  MenuProvide,
  MenuProvideKey,
  SubmenuProvide,
  SubmenuProvideKey,
  SubmenuTransitionName,
} from "./interface";

export default defineComponent({
  emits: ["before-enter", "after-leave"],
  props: {
    name: {
      type: String as PropType<SubmenuTransitionName>,
      default: "zoom-top" as SubmenuTransitionName,
    },
  },
  setup(props, { slots, emit }) {
    const vMenu = inject<MenuProvide>(MenuProvideKey)!;

    const vSubmenu = inject<SubmenuProvide>(SubmenuProvideKey)!;

    return () => {
      if (!slots.default || vMenu.isInline.value) return;
      const transition = (
        <Transition
          name={`v-submenu--${props.name}`}
          onBeforeEnter={() => {
            emit("before-enter");
          }}
          onAfterLeave={() => {
            emit("after-leave");
          }}
        >
          {slots.default()}
        </Transition>
      );
      if (vSubmenu.level.value !== 1) return transition;
      return <Teleport to="body">{transition}</Teleport>;
    };
  },
});
</script>

<style lang="scss">
.v-submenu--zoom-top {
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

.v-submenu--zoom-right {
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

.v-submenu--zoom-fade {
  &-enter-active {
    transition: opacity 0.2s, transform 0.2s;
    transform-origin: 0 0;
  }

  &-enter-from {
    transform: scale(0.8);
    opacity: 0;
  }

  &-leave-active {
    transition: opacity 0.2s, transform 0.2s;
    transform-origin: 0 0;
    opacity: 0.5;
  }

  &-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }
}
</style>
