<template>
  <div style="padding: 50px">
    <v-menu v-model:active-index="activeIndex">
      <v-menu-item icon="appstore-fill" index="1">Navigation One</v-menu-item>
      <v-menu-item icon="appstore-fill" inndex="2">
        Navigation Two
      </v-menu-item>
      <v-submenu icon="appstore-fill" title="Navigation Three - Submenu">
        <v-menu-item index="3-1">Menu Item 1</v-menu-item>
        <v-menu-item index="3-2">Menu Item 2</v-menu-item>
        <v-menu-item index="3-3">Menu Item 3</v-menu-item>
        <v-menu-item index="3-4">Menu Item 4</v-menu-item>
      </v-submenu>
      <v-submenu icon="appstore-fill" title="Navigation Two">
        <v-menu-item-group>
          <v-menu-item index="5">Menu Item 5</v-menu-item>
          <v-menu-item index="6">Menu Item 6</v-menu-item>
        </v-menu-item-group>
        <v-menu-item-group>
          <v-menu-item index="7">Menu Item 7</v-menu-item>
          <v-menu-item index="8">Menu Item 8</v-menu-item>
        </v-menu-item-group>
      </v-submenu>
    </v-menu>

    <div style="width: 280px">
      <v-menu
        v-model:active-index="activeIndex"
        mode="vertical"
        :collapse="collapse"
      >
        <v-submenu icon="appstore-fill" title="Navigation One">
          <v-menu-item index="1">Menu Item 1</v-menu-item>
          <v-menu-item index="2">Menu Item 2</v-menu-item>
          <v-menu-item index="3">Menu Item 3</v-menu-item>
          <v-menu-item index="4">Menu Item 4</v-menu-item>
        </v-submenu>
        <v-submenu icon="appstore-fill" title="Navigation Two">
          <v-menu-item-group title="Group One">
            <v-menu-item index="5">Menu Item 5</v-menu-item>
            <v-menu-item index="6">Menu Item 6</v-menu-item>
          </v-menu-item-group>
          <v-menu-item-group title="Group Two">
            <v-menu-item index="7">Menu Item 7</v-menu-item>
            <v-menu-item index="8">Menu Item 8</v-menu-item>
          </v-menu-item-group>
        </v-submenu>
        <v-submenu icon="appstore-fill" title="Navigation Three">
          <v-menu-item index="9">Menu Item 9</v-menu-item>
          <v-menu-item index="10">Menu Item 10</v-menu-item>
          <v-menu-item index="11">Menu Item 11</v-menu-item>
          <v-menu-item index="12">Menu Item 12</v-menu-item>
        </v-submenu>
      </v-menu>
    </div>
    <div @click="onClick" style="cursor: pointer">展开/折叠</div>

    <!-- <v-menu v-model:active-index="activeIndex">
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
    </v-menu> -->
    <!-- <br />
    
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
    </div> -->
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
    const activeIndex = ref("5");

    const collapse = ref(false);

    const onClick = () => {
      collapse.value = !collapse.value;
    };

    return { activeIndex, collapse, onClick };
  },
});
</script>
