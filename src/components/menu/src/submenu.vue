<template>
  <v-popup
    v-model:visible="isCollapse"
    class="v-sub-menu"
    trigger="click"
    :placement="placement"
    :offset="[0, 6]"
  >
    <template #reference>
      <v-menu-item :icon="icon">
        {{ title }}
      </v-menu-item>
    </template>
    <template #content>
      <div class="v-sub-menu-content">
        <slot />
      </div>
    </template>
  </v-popup>
</template>

<script lang="ts">
import { computed, defineComponent, inject, provide, ref } from "vue";
import { SubMenuProvide, SubMenuProvideKey } from "./interface";
import VMenuItem from "./item.vue";

export default defineComponent({
  name: "VSubMenu",
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

    // const vMenu = inject<MenuProvide>(MenuProvideKey)!;

    const vSubMenu = inject<SubMenuProvide>(SubMenuProvideKey);

    const placement = computed(() => {
      return vSubMenu ? "right-start" : "bottom-start";
    });

    const isCollapse = ref(false);

    const onMenuItemClick = () => {
      isCollapse.value = !isCollapse.value;
    };

    return { placement, isCollapse, onMenuItemClick };
  },
});
</script>

<style lang="scss">
.v-sub-menu-content {
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
</style>
