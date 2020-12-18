<template>
  <div v-if="isInline" class="v-submenu v-submenu--inline">
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
  <v-popup
    v-else
    v-model:visible="isCollapse"
    class="v-submenu"
    trigger="manual"
    :placement="placement"
    :offset="[0, 6]"
    :target="target"
  >
    <template #reference>
      <v-summenu-title
        :icon="icon"
        :title="title"
        :style="titleStyle"
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
import {
  computed,
  CSSProperties,
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

    const level = computed(() => {
      if (!vSubMenu) return 1;
      return vSubMenu.level.value + 1;
    });

    const titleStyle = computed<CSSProperties>(() => {
      return {
        paddingLeft: `${vMenu.computedPaddingLeft(level.value)}px`,
      };
    });

    provide<SubMenuProvide>(SubMenuProvideKey, { level });

    const isInline = computed(() => vMenu.inline.value);

    const isShowArrow = computed(() => {
      return vMenu.mode.value === "vertical";
    });

    const placement = computed(() => {
      if (vMenu.mode.value === "horizontal") {
        return vSubMenu ? "right-start" : "bottom-start";
      }
      return "right-start";
    });

    const target = computed(() => {
      return vSubMenu ? null : "body";
    });

    const isCollapse = ref(false);

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
      isInline,
      target,
      placement,
      isCollapse,
      onClick,
      onMouseenter,
      onMouseleave,
      titleStyle,
      isShowArrow,
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
</style>
