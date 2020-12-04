<template>
  <v-popup class="v-dropdown" v-model:visible="visible">
    <template #trigger>
      <div @click="onTriggerClick">
        <slot name="trigger" />
      </div>
    </template>
    <template #content>
      <div class="v-dropdown--content">
        <slot name="content" />
      </div>
    </template>
  </v-popup>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "VDropdown",
  setup() {
    const visible = ref(false);

    const onTriggerClick = () => {
      visible.value = !visible.value;
    };

    return { visible, onTriggerClick };
  },
});
</script>

<style lang="scss">
.v-dropdown {
  display: inline-block;
  position: relative;
  font-size: 14px;
  cursor: pointer;
}
</style>
