<template>
  <div class="vsc-button">
    <div>
      <v-button type="primary" loading>Loading</v-button>
      <v-button type="primary" shape="circle" loading>L</v-button>
      <v-button type="primary" icon="v-icon-search" shape="circle" loading />
    </div>
    <div>
      <v-button type="primary" :loading="loading" @click="onClickLoading"
        >Click Me!</v-button
      >
      <v-button
        type="primary"
        icon="v-icon-poweroff"
        shape="circle"
        :loading="loading"
        @click="onClickLoading"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const loading = ref(false);

    const onClickLoading = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 1500);
    };

    return {
      loading,
      onClickLoading,
    };
  },
});
</script>
