<script lang="tsx">
import {
  computed,
  defineComponent,
  inject,
  ref,
  Teleport,
  Transition,
} from "vue";
import {
  MenuProvide,
  MenuProvideKey,
  SubMenuProvide,
  SubMenuProvideKey,
} from "./interface";

export default defineComponent({
  emits: ["before-enter", "after-leave"],
  setup(props, { emit }) {
    const vMenu = inject<MenuProvide>(MenuProvideKey)!;

    const vSubmenu = inject<SubMenuProvide>(SubMenuProvideKey, null);

    const isCollapsing = ref(false);

    const collapse = () => {
      isCollapsing.value = true;
    };

    const expand = () => {
      isCollapsing.value = true;
    };

    const isInline = computed(() => {
      if (vSubmenu?.hasParentSubmenu.value) return true;
      if (vMenu.isHorizontal.value) return false;
      if (isCollapsing.value) return vMenu.isCollapse.value;
      return !vMenu.isCollapse.value;
    });

    const convertTransitionClass = () => {
      if (vMenu.isHorizontal.value) return "v-submenu-transition--big-top";
      console.log(isCollapsing.value, "isCollapsing");
      if (isCollapsing.value) return "v-submenu-transition--collapse";
      return "v-submenu-transition--collapse";
    };

    const isCollapseTransition = (name: string) => {
      return name === "v-submenu-transition--collapse";
    };

    const onBeforeEnter = (el: HTMLElement): void => {
      const className = convertTransitionClass();
      el.classList.add(className);
      if (isCollapseTransition(className)) {
        el.style.maxHeight = "0px";
        el.style.overflow = "hidden";
      }
      emit("before-enter");
    };

    const onEnter = (el: HTMLElement): void => {
      const className = convertTransitionClass();
      if (!isCollapseTransition(className)) return;
      el.style.maxHeight = `${el.scrollHeight}px`;
    };

    const onAfterEnter = (el: HTMLElement): void => {
      const className = convertTransitionClass();
      el.classList.remove(className);
      if (isCollapseTransition(className)) {
        el.style.maxHeight = "none";
        el.style.overflow = "visible";
      }
      isCollapsing.value = false;
    };

    const onBeforeLeave = (el: HTMLElement): void => {
      const className = convertTransitionClass();
      el.classList.add(className);
      if (!isCollapseTransition(className)) return;
      el.style.maxHeight = `${el.scrollHeight}px`;
      el.style.overflow = "hidden";
    };

    const onLeave = (el: HTMLElement): void => {
      const className = convertTransitionClass();
      if (!isCollapseTransition(className)) return;
      el.style.maxHeight = "0px";
    };

    const onAfterLeave = (el: HTMLElement): void => {
      const className = convertTransitionClass();
      el.classList.remove(className);
      if (isCollapseTransition(className)) {
        el.style.maxHeight = "none";
        el.style.overflow = "visible";
      }
      isCollapsing.value = false;
      emit("after-leave");
    };

    return {
      isInline,
      onBeforeEnter,
      onEnter,
      onAfterEnter,
      onBeforeLeave,
      onLeave,
      onAfterLeave,
      collapse,
      expand,
    };
  },
  render() {
    if (!this.$slots.default) return;
    const transition = (
      <Transition
        onBeforeEnter={(el) => this.onBeforeEnter(el as HTMLElement)}
        onEnter={(el) => this.onEnter(el as HTMLElement)}
        onAfterEnter={(el) => this.onAfterEnter(el as HTMLElement)}
        onBeforeLeave={(el) => this.onBeforeLeave(el as HTMLElement)}
        onLeave={(el) => this.onLeave(el as HTMLElement)}
        onAfterLeave={(el) => this.onAfterLeave(el as HTMLElement)}
      >
        {this.$slots.default()}
      </Transition>
    );
    if (this.isInline) return transition;
    return <Teleport to="body">{transition}</Teleport>;
  },
});
</script>

<style lang="scss">
.v-submenu-transition--big-top {
  opacity: 1;
  transform: scale(1, 1);
  transition: transform 0.3s, opacity 0.3s;
  transform-origin: center top;

  &.v-enter-from,
  &.v-leave-to {
    opacity: 0;
    transform: scaleY(0.6);
  }
}

.v-submenu-transition--collapse {
  transition: max-height 0.3s;
}
</style>
