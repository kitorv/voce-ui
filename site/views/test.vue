<template>
  <div style="padding: 50px">
    <v-menu v-model:active-index="activeIndex">
      <v-menu-item icon="appstore-fill" index="1">Menu One</v-menu-item>
      <v-menu-item icon="appstore-fill" inndex="2" disabled>
        Menu Two
      </v-menu-item>
      <v-menu-item icon="appstore-fill" index="3">Menu Three</v-menu-item>
      <v-menu-item icon="appstore-fill" index="4">Menu Four</v-menu-item>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const activeIndex = ref("1");

    return { activeIndex };
  },
});
</script>
