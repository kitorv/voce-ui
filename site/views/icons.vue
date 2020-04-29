<template>
  <div class="vs-icon-view">
    <div class="vs-icon-view--item" v-for="(icon, index) in icons" :key="index">
      <i :class="icon" />
      <p>{{ icon }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import iconList from "../../src/components/icons/src/iconfont.ts";

export default defineComponent({
  name: "VcIconView",
  setup() {
    const icons = reactive(iconList);
    return { icons };
  },
});
</script>

<style lang="scss" scoped>
.vs-icon-view {
  border: 1px solid $-border-color-base;
  border-right: none;
  border-bottom: none;
  margin: 10px 0;
  font-size: 14px;
  line-height: 2em;

  &::after {
    clear: both;
    display: table;
    content: "";
  }
}

.vs-icon-view--item {
  float: left;
  width: 16.66%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 10px;
  border: 1px solid $-border-color-base;
  border-left: none;
  border-top: none;
  color: $-text-color-regular;
  box-sizing: border-box;
  cursor: pointer;

  > i {
    font-size: 32px;
  }

  > p {
    text-align: center;
    padding: 0;
    margin: 0;
    line-height: 1.5;
    margin: 12px 0 0 0;
    height: 36px;
  }
}
</style>
