<template>
  <div style="padding: 300px">
    <v-space>
      <v-dropdown trigger="click">
        <template #reference>
          <v-button>Click</v-button>
        </template>
        <template #content>
          <v-dropdown-menu>
            <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
            <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
            <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
          </v-dropdown-menu>
        </template>
      </v-dropdown>
      <v-dropdown trigger="hover">
        <template #reference>
          <v-button>Hover</v-button>
        </template>
        <template #content>
          <v-dropdown-menu>
            <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
            <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
            <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
          </v-dropdown-menu>
        </template>
      </v-dropdown>
      <v-dropdown trigger="contextMenu">
        <template #reference>
          <v-button>ContextMenu</v-button>
        </template>
        <template #content>
          <v-dropdown-menu>
            <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
            <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
            <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
          </v-dropdown-menu>
        </template>
      </v-dropdown>
    </v-space>
  </div>
</template>
