<template>
  <div style="padding: 300px">
    <v-space>
      <v-dropdown placement="bottom-start" arrow>
        <template #reference>
          <v-button>Bottom Start</v-button>
        </template>
        <template #content>
          <v-dropdown-menu>
            <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
            <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
            <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
          </v-dropdown-menu>
        </template>
      </v-dropdown>
      <v-dropdown placement="bottom" arrow>
        <template #reference>
          <v-button>Bottom</v-button>
        </template>
        <template #content>
          <v-dropdown-menu>
            <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
            <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
            <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
          </v-dropdown-menu>
        </template>
      </v-dropdown>
      <v-dropdown placement="bottom-end" arrow>
        <template #reference>
          <v-button>Bottom End</v-button>
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
    <v-space>
      <v-dropdown placement="top-start" arrow>
        <template #reference>
          <v-button>Top Start</v-button>
        </template>
        <template #content>
          <v-dropdown-menu>
            <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
            <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
            <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
          </v-dropdown-menu>
        </template>
      </v-dropdown>
      <v-dropdown placement="top" arrow>
        <template #reference>
          <v-button>Top</v-button>
        </template>
        <template #content>
          <v-dropdown-menu>
            <v-dropdown-menu-item>1st menu item</v-dropdown-menu-item>
            <v-dropdown-menu-item>2nd menu item</v-dropdown-menu-item>
            <v-dropdown-menu-item>3rd menu item</v-dropdown-menu-item>
          </v-dropdown-menu>
        </template>
      </v-dropdown>
      <v-dropdown trigger="click" placement="top-end" arrow>
        <template #reference>
          <v-button>Top End</v-button>
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
