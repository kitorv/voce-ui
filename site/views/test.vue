<template>
  <div style="padding: 100px">
    <v-dropdown>
      <template #trigger>
        <v-link>下拉菜单</v-link>
      </template>
      <template #content>
        <v-dropdown-menu>
          <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
          <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
        </v-dropdown-menu>
      </template>
    </v-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
