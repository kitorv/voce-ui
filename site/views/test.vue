<template>
  <v-dropdown>
    <template #reference>
      <v-link type="primary" suffix-icon="down">Hover Me</v-link>
    </template>
    <template #content>
      <v-dropdown-menu @click="onMenuClick">
        <v-dropdown-menu-item value="1st">1st menu item</v-dropdown-menu-item>
        <v-dropdown-menu-item value="2nd">2nd menu item</v-dropdown-menu-item>
        <v-dropdown-menu-item value="3rd">3rd menu item</v-dropdown-menu-item>
      </v-dropdown-menu>
    </template>
  </v-dropdown>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const onMenuClick = (value: string) => {
      console.log(value);
    };
    return { onMenuClick };
  },
});
</script>
