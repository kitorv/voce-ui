<template>
  <div style="padding: 300px">
    <v-dropdown>
      <template #reference>
        <v-link type="primary" suffix-icon="down">Hover Me</v-link>
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
