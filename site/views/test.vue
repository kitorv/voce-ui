<template>
  <div style="padding: 50px">
    <v-menu v-model:active-index="activeIndex">
      <v-menu-item icon="appstore-fill" index="1">Menu One</v-menu-item>
      <v-menu-item icon="appstore-fill" inndex="2" disabled>
        Menu Two
      </v-menu-item>
      <v-submenu icon="appstore-fill" title="Menu Three">
        <v-menu-item index="3-1">Menu Three 1</v-menu-item>
        <v-menu-item index="3-2">Menu Three 2</v-menu-item>
        <v-menu-item index="3-3">Menu Three 3</v-menu-item>
        <v-menu-item index="3-4">Menu Three 4</v-menu-item>
        <v-submenu title="Menu Three">
          <v-menu-item index="3-5-1">Menu Three 5 1</v-menu-item>
          <v-menu-item index="3-5-2">Menu Three 5 2</v-menu-item>
          <v-menu-item index="3-5-3">Menu Three 5 3</v-menu-item>
          <v-menu-item index="3-5-4">Menu Three 5 4</v-menu-item>
        </v-submenu>
        <v-menu-item index="3-6">Menu Three 6</v-menu-item>
        <v-menu-item index="3-7">Menu Three 7</v-menu-item>
      </v-submenu>
      <v-menu-item icon="appstore-fill" index="4">Menu Four</v-menu-item>
      <v-submenu icon="appstore-fill" title="Menu Five">
        <v-menu-item index="5-1">Menu Five 1</v-menu-item>
        <v-menu-item index="5-2">Menu Five 2</v-menu-item>
        <v-menu-item index="5-3">Menu Five 3</v-menu-item>
        <v-menu-item index="5-4">Menu Five 4</v-menu-item>
      </v-submenu>
    </v-menu>
    <br />
    <div @click="onClick" style="cursor: pointer">展开/折叠</div>
    <br />
    <div style="width: 250px">
      <v-menu
        v-model:active-index="activeIndex"
        mode="vertical"
        :collapse="collapse"
      >
        <v-menu-item icon="appstore-fill" index="1">Menu One</v-menu-item>
        <v-menu-item icon="appstore-fill" inndex="2" disabled>
          Menu Two
        </v-menu-item>
        <v-submenu icon="appstore-fill" title="Menu Three">
          <v-menu-item index="3-1">Menu Three 1</v-menu-item>
          <v-menu-item index="3-2">Menu Three 2</v-menu-item>
          <v-menu-item index="3-3">Menu Three 3</v-menu-item>
          <v-menu-item index="3-4">Menu Three 4</v-menu-item>
          <v-submenu title="Menu Three">
            <v-menu-item index="3-5-1">Menu Three 5 1</v-menu-item>
            <v-menu-item index="3-5-2">Menu Three 5 2</v-menu-item>
            <v-menu-item index="3-5-3">Menu Three 5 3</v-menu-item>
            <v-menu-item index="3-5-4">Menu Three 5 4</v-menu-item>
          </v-submenu>
          <v-menu-item index="3-6">Menu Three 6</v-menu-item>
          <v-menu-item index="3-7">Menu Three 7</v-menu-item>
        </v-submenu>
        <v-menu-item icon="appstore-fill" index="4">Menu Four</v-menu-item>
        <v-submenu icon="appstore-fill" title="Menu Five">
          <v-menu-item index="5-1">Menu Five 1</v-menu-item>
          <v-menu-item index="5-2">Menu Five 2</v-menu-item>
          <v-menu-item index="5-3">Menu Five 3</v-menu-item>
          <v-menu-item index="5-4">Menu Five 4</v-menu-item>
        </v-submenu>
      </v-menu>
    </div>
    <!-- 
    <br />
    <br />
    <v-menu v-model:active-index="activeIndex" mode="vertical" collapse>
      <v-menu-item icon="appstore-fill" index="1">Menu One</v-menu-item>
      <v-menu-item icon="appstore-fill" inndex="2" disabled>
        Menu Two
      </v-menu-item>
      <v-submenu icon="appstore-fill" title="Menu Three">
        <v-menu-item index="3-1">Menu One</v-menu-item>
        <v-menu-item index="3-2">Menu One</v-menu-item>
        <v-menu-item index="3-3">Menu One</v-menu-item>
        <v-menu-item index="3-4">Menu One</v-menu-item>
        <v-submenu title="Menu Three">
          <v-menu-item index="3-5-1">Menu One</v-menu-item>
          <v-menu-item index="3-5-2">Menu One</v-menu-item>
          <v-menu-item index="3-5-3">Menu One</v-menu-item>
          <v-menu-item index="3-5-4">Menu One</v-menu-item>
        </v-submenu>
        <v-menu-item index="3-6">Menu One</v-menu-item>
        <v-menu-item index="3-6">Menu One</v-menu-item>
      </v-submenu>
      <v-menu-item icon="appstore-fill" index="4">Menu Four</v-menu-item>
    </v-menu> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const activeIndex = ref("3-5-2");

    const collapse = ref(false);

    const onClick = () => {
      collapse.value = !collapse.value;
    };

    return { activeIndex, collapse, onClick };
  },
});
</script>
