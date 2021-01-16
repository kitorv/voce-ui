<template>
  <v-row class="vs-icon-view">
    <v-col
      class="vs-icon-view--item"
      v-for="(icon, index) in icons"
      :key="index"
      :xs="24"
      :sm="12"
      :md="6"
      :lg="4"
    >
      <v-icon :type="icon" />
      <p>{{ icon }}</p>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import iconList from "../../src/components/icon/src/iconfont";

export default defineComponent({
  name: "VcIconView",
  setup() {
    const icons = reactive(
      iconList.map((i) => i.replace("v-icon-", "")).sort()
    );
    return { icons };
  },
});
</script>

<style lang="scss" scoped>
.vs-icon-view {
  border: 1px solid $-color--border-base;
  border-right: none;
  border-bottom: none;
  margin: 12px 0;
  font-size: 14px;
  line-height: 2em;
}

.vs-icon-view--item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 12px;
  border: 1px solid $-color--border-base;
  border-left: none;
  border-top: none;
  color: $-color--text-regular;
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
