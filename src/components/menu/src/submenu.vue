<template>
  <v-popup
    v-model:visible="isCollapse"
    class="v-submenu"
    trigger="manual"
    :placement="placement"
    :offset="[0, 6]"
    :tatget="tatget"
  >
    <template #reference>
      <v-menu-item :icon="icon">
        {{ title }}
      </v-menu-item>
    </template>
    <template #content>
      <div ref="submenuRef" class="v-submenu-content">
        <slot />
      </div>
    </template>
  </v-popup>
</template>

<script lang="ts">
import { computed, defineComponent, inject, provide, ref } from "vue";
import { SubMenuProvide, SubMenuProvideKey } from "./interface";
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
    const submenuRef = ref<HTMLDivElement>();

    provide<SubMenuProvide>(SubMenuProvideKey, {
      target: computed(() => submenuRef.value),
    });

    // const vMenu = inject<MenuProvide>(MenuProvideKey)!;

    const vSubMenu = inject<SubMenuProvide>(SubMenuProvideKey, null);

    const placement = computed(() => {
      return vSubMenu ? "right-start" : "bottom-start";
    });

    const tatget = computed(() => {
      return "";
    });

    const isCollapse = ref(false);

    const onMenuItemClick = () => {
      isCollapse.value = !isCollapse.value;
    };

    return { tatget, placement, isCollapse, onMenuItemClick };
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
