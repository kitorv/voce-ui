<template>
  <div class="vsc-affix">
    <v-affix :offset-bottom="600" :target="target">
      <div style="height: 1000px;"></div>
      <v-button type="primary">Affix Target</v-button>
    </v-affix>
  </div>
</template>

<script lang="ts">
import { defineComponent, markRaw, ref } from "vue";

export default defineComponent({
  setup() {
    const target = ref(markRaw(window));
    return { target };
  },
});
</script>
