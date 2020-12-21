<template>
  <div v-if="isInline" class="v-submenu v-submenu--inline">
    <v-summenu-title
      :icon="icon"
      :title="title"
      :active="isTitleActive"
      :arrow="isShowArrow"
      :style="titleStyle"
      @click="onClick"
    />
    <v-transition name="collapse">
      <div v-show="isCollapse" class="v-submenu--inline-content">
        <slot />
      </div>
    </v-transition>
  </div>
  <v-popup
    v-else
    v-model:visible="isCollapse"
    class="v-submenu"
    trigger="manual"
    :placement="placement"
    :offset="offset"
    :target="target"
    transition="v-submenu--popup-content"
  >
    <template #reference>
      <v-summenu-title
        :icon="icon"
        :title="title"
        :active="isTitleActive"
        :arrow="isShowArrow"
        @mouseenter="onMouseenter"
        @mouseleave="onMouseleave"
      />
    </template>
    <template #content>
      <div
        class="v-submenu--popup-content"
        @mouseenter="onMouseenter"
        @mouseleave="onMouseleave"
      >
        <slot />
      </div>
    </template>
  </v-popup>
</template>

<script lang="ts">
import { PopupOffset } from "@/components/popup";
import {
  computed,
  CSSProperties,
  defineComponent,
  inject,
  onBeforeMount,
  PropType,
  provide,
  ref,
  watch,
} from "vue";
import {
  MenuProvide,
  MenuProvideKey,
  SubmenuIcon,
  SubMenuProvide,
  SubMenuProvideKey,
} from "./interface";
import VSummenuTitle from "./submenu-title.vue";

export default defineComponent({
  name: "VSubmenu",
  components: { VSummenuTitle },
  props: {
    icon: {
      type: String as PropType<SubmenuIcon>,
      default: undefined,
    },
    title: {
      type: [String, Number],
      default: undefined,
    },
  },
  setup() {
    const vMenu = inject<MenuProvide>(MenuProvideKey)!;

    const vSubmenu = inject<SubMenuProvide>(SubMenuProvideKey, null);

    const isCollapse = ref(false);

    const isActive = ref(false);
    watch(
      isActive,
      (value) => {
        vSubmenu?.updateActive(value);
      },
      { immediate: true }
    );

    const isTitleActive = computed(() => {
      if (vMenu.mode.value === "horizontal") {
        return isActive.value || isCollapse.value;
      }
      return isActive.value;
    });

    const titleStyle = computed<CSSProperties>(() => {
      if (vMenu.mode.value === "horizontal") return {};
      return {
        paddingLeft: vMenu.computedPaddingLeft(level.value),
      };
    });

    const level = computed(() => {
      if (!vSubmenu) return 1;
      return vSubmenu.level.value + 1;
    });

    const isInline = computed(() => {
      return vMenu.inline.value;
    });

    provide<SubMenuProvide>(SubMenuProvideKey, {
      level,
      updateActive(active) {
        isActive.value = active;
      },
      open() {
        vSubmenu?.open();
        isCollapse.value = true;
      },
    });

    const isShowArrow = computed(() => {
      if (vMenu.mode.value === "horizontal") {
        return !!vSubmenu;
      }
      return false;
    });

    const placement = computed(() => {
      if (vMenu.mode.value === "horizontal") {
        return vSubmenu ? "right-start" : "bottom-start";
      }
      return "right-start";
    });

    const target = computed(() => {
      return vSubmenu ? null : "body";
    });

    const offset = computed<PopupOffset>(() => {
      if (placement.value === "bottom-start") return [20, 6];
      return [0, 6];
    });

    const onClick = () => {
      isCollapse.value = !isCollapse.value;
    };

    let setTimeoutId: number;
    const onMouseenter = () => {
      clearTimeout(setTimeoutId);
      isCollapse.value = true;
    };
    const onMouseleave = () => {
      setTimeoutId = window.setTimeout(() => {
        clearTimeout(setTimeoutId);
        isCollapse.value = false;
      }, 200);
    };

    const key = Symbol();
    onBeforeMount(() => {
      vMenu.addSubmenu(key, {
        open() {
          isCollapse.value = true;
        },
        close() {
          isCollapse.value = false;
        },
      });
    });

    return {
      isInline,
      titleStyle,
      onClick,
      isCollapse,
      isTitleActive,
      isShowArrow,
      placement,
      target,
      offset,
      onMouseenter,
      onMouseleave,
      // isInline,

      // isCollapse,
      // onClick,

      // titleStyle,
      // isShowArrow,
    };
  },
});
</script>

<style lang="scss">
// .v-submenu--popup{

// }

.v-submenu--popup-content {
  font-size: 14px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}

.v-submenu--popup-content {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transform-origin: center top;
    transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
      opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scaleY(0);
  }
}
</style>
