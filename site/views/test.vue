<template>
  <div style="padding: 50px">
    <v-menu v-model:active-index="activeIndex">
      <v-menu-item icon="appstore-fill">Menu One</v-menu-item>
      <v-menu-item icon="appstore-fill">Menu Two</v-menu-item>
      <v-menu-item icon="appstore-fill">Menu Three</v-menu-item>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const activeIndex = ref();

    return { activeIndex };
  },
});
</script>
