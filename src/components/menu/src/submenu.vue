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
    <v-transition name="collapse" @after-leave="onInlineAfterLeave">
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
  nextTick,
  onBeforeMount,
  PropType,
  provide,
  ref,
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

    const isInlineValue = computed(() => {
      return vMenu.mode.value === "vertical" && !vMenu.collapse.value;
    });
    const isInline = ref(isInlineValue.value);

    const isCollapse = ref(false);

    const openSubmenu = () => {
      isInline.value = isInlineValue.value;
      nextTick(() => {
        isCollapse.value = true;
      });
    };

    const closeSubmenu = () => {
      if (isCollapse.value) {
        isCollapse.value = false;
        return;
      }
      nextTick(() => {
        isInline.value = isInlineValue.value;
      });
    };

    const onInlineAfterLeave = () => {
      nextTick(() => {
        isInline.value = isInlineValue.value;
      });
    };

    const isActive = ref(false);

    const isTitleActive = computed(() => {
      if (vMenu.mode.value === "horizontal") {
        return isActive.value || isCollapse.value;
      }
      return isActive.value;
    });

    const level = computed(() => {
      return vSubmenu ? vSubmenu.level.value + 1 : 1;
    });

    const titleStyle = computed<CSSProperties | undefined>(() => {
      if (vMenu.mode.value === "horizontal" || vMenu.collapse.value) return;
      return {
        paddingLeft: vMenu.computedPaddingLeft(level.value),
      };
    });

    provide<SubMenuProvide>(SubMenuProvideKey, {
      level,
      active() {
        vSubmenu?.active();
        isActive.value = true;
        if (vMenu.mode.value === "horizontal" || vMenu.collapse.value) return;
        openSubmenu();
      },
    });

    const isShowArrow = computed(() => {
      if (vMenu.mode.value === "horizontal") return !!vSubmenu;
      return true;
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
      if (isCollapse.value) {
        closeSubmenu();
      } else {
        openSubmenu();
      }
    };

    let setTimeoutId: number;
    const onMouseenter = () => {
      clearTimeout(setTimeoutId);
      openSubmenu();
    };
    const onMouseleave = () => {
      setTimeoutId = window.setTimeout(() => {
        clearTimeout(setTimeoutId);
        closeSubmenu();
      }, 200);
    };

    const key = Symbol();
    onBeforeMount(() => {
      vMenu.addSubmenu(key, {
        isActive: computed(() => isActive.value),
        open: openSubmenu,
        close: closeSubmenu,
        active() {
          isActive.value = true;
        },
        inactive() {
          isActive.value = false;
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
      onInlineAfterLeave,
    };
  },
});
</script>

<style lang="scss">
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
