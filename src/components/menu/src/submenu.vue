<template>
  <v-popup
    v-model:visible="isCollapse"
    class="v-submenu"
    trigger="manual"
    :placement="placement"
    :offset="[0, 6]"
    :target="target"
  >
    <template #reference>
      <v-menu-item
        :icon="icon"
        @mouseenter="onMouseenter"
        @mouseleave="onMouseleave"
      >
        {{ title }}
      </v-menu-item>
    </template>
    <template #content>
      <div
        class="v-submenu-content"
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
  defineComponent,
  inject,
  onBeforeMount,
  provide,
  ref,
} from "vue";
import {
  MenuProvide,
  MenuProvideKey,
  SubMenuProvide,
  SubMenuProvideKey,
} from "./interface";
import VMenuItem from "./menu-item.vue";

export default defineComponent({
  name: "VSubmenu",
  components: { VMenuItem },
  props: {
    icon: {
      type: String,
      default: undefined,
    },
    title: {
      type: [String, Number],
      default: undefined,
    },
  },
  setup() {
    provide<SubMenuProvide>(SubMenuProvideKey, {});

    const vMenu = inject<MenuProvide>(MenuProvideKey)!;

    const vSubMenu = inject<SubMenuProvide>(SubMenuProvideKey, null);

    const placement = computed(() => {
      return vSubMenu ? "right-start" : "bottom-start";
    });

    const target = computed(() => {
      return vSubMenu ? null : "body";
    });

    const isCollapse = ref(false);

    let setTimeoutId: number;
    const onMouseenter = () => {
      clearTimeout(setTimeoutId);
      isCollapse.value = true;
    };
    const onMouseleave = () => {
      setTimeoutId = window.setTimeout(() => {
        clearTimeout(setTimeoutId);
        if (vSubMenu) return;
        vMenu.collapseAll();
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

    return { target, placement, isCollapse, onMouseenter, onMouseleave };
  },
});
</script>

<style lang="scss">
.v-submenu-content {
  font-size: 14px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
</style>
