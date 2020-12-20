# 更新日志

<template>
  <v-popup
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
        @mouseenter="onReferenceMouseenter"
        @mouseleave="onReferenceMouseleave"
      />
    </template>
    <template #content>
      <div
        class="v-submenu--popup-content"
        @mouseenter="onContentMouseenter"
        @mouseleave="onContentMouseleave"
      >
        <slot />
      </div>
    </template>
  </v-popup>
  <!-- <div v-if="isInline" class="v-submenu v-submenu--inline">
    <v-summenu-title
      :icon="icon"
      :title="title"
      :style="titleStyle"
      :arrow="isShowArrow"
      @click="onClick"
    />
    <div v-if="isCollapse" class="v-submenu--inline-content">
      <slot />
    </div>
  </div>
  -->
</template>

<script lang="ts">
import { PopupOffset } from "@/components/popup";
import {
  computed,
  defineComponent,
  inject,
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

    const vSubMenu = inject<SubMenuProvide>(SubMenuProvideKey, null);

    const isCollapse = ref(false);

    // const titleStyle = computed<CSSProperties>(() => {
    //   if (vMenu.mode.value === "horizontal") return {};
    //   return {
    //     paddingLeft: `${vMenu.computedPaddingLeft(level.value)}px`,
    //   };
    // });

    const level = computed(() => {
      if (!vSubMenu) return 1;
      return vSubMenu.level.value + 1;
    });

    provide<SubMenuProvide>(SubMenuProvideKey, { level });

    // const isInline = computed(() => vMenu.inline.value);

    // const isShowArrow = computed(() => {
    //   return vMenu.mode.value === "vertical";
    // });

    const placement = computed(() => {
      if (vMenu.mode.value === "horizontal") {
        return vSubMenu ? "right-start" : "bottom-start";
      }
      return "right-start";
    });

    const target = computed(() => {
      return vSubMenu ? null : "body";
    });

    const offset = computed<PopupOffset>(() => {
      if (placement.value === "bottom-start") return [20, 6];
      return [0, 6];
    });

    // const onClick = () => {
    //   isCollapse.value = !isCollapse.value;
    // };

    let setTimeoutId: number;
    const onReferenceMouseenter = () => {
      clearTimeout(setTimeoutId);
      isCollapse.value = true;
    };
    const onReferenceMouseleave = () => {
      setTimeoutId = window.setTimeout(() => {
        clearTimeout(setTimeoutId);
        isCollapse.value = false;
      }, 200);
    };
    const onContentMouseenter = onReferenceMouseenter;
    const onContentMouseleave = () => {
     setTimeoutId = window.setTimeout(() => {
        clearTimeout(setTimeoutId);
        if (vSubMenu) return;
        vMenu.closeAllSubmenu();
      }, 200);
    };

    const key = Symbol();
    onBeforeMount(() => {
      vMenu.addSubmenu(key, {
        expand() {
          isCollapse.value = true;
        },
        collapse() {
          isCollapse.value = false;
        },
      });
    });

    return {
      isCollapse,
      placement,
      target,
      offset,
      onReferenceMouseenter,
      onReferenceMouseleave,
      onContentMouseenter,
      onContentMouseleave,
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
    transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
      opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center top;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scaleY(0);
  }
}
</style>
