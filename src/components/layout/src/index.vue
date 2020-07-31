<script lang="ts">
import { defineComponent, computed, h } from "vue";

export default defineComponent({
  name: "VLayout",
  setup(props, { slots }) {
    const direction = computed(() => {
      return slots.left || slots.right ? "horizontal" : "vertical";
    });

    const classList = ["v-layout", `v-layout--directiom-${direction.value}`];

    const left = computed(() => {
      if (!slots.left) return;
      return h("div", { class: "v-layout--left" }, slots.left());
    });

    const right = computed(() => {
      if (!slots.right) return;
      return h("div", { class: "v-layout--right" }, slots.right());
    });

    const header = computed(() => {
      if (!slots.header) return;
      return h("div", { class: "v-layout--header" }, slots.header());
    });
    const body = computed(() => {
      if (!slots.default) return;
      return h("div", { class: "v-layout--body" }, slots.default());
    });
    const footer = computed(() => {
      if (!slots.footer) return;
      return h("div", { class: "v-layout--footer" }, slots.footer());
    });

    const content = [header.value, body.value, footer.value];

    if (slots.left || slots.right) {
      return () => {
        return h("div", { class: classList }, [
          left.value,
          h("div", { class: "v-layout--content" }, content),
          right.value,
        ]);
      };
    }

    return () => {
      return h("div", { class: classList }, content);
    };
  },
});
</script>

<style lang="scss">
.v-layout {
  display: flex;
  flex: 1;
  flex-basis: auto;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.v-layout--directiom-vertical {
  flex-direction: column;

  > .v-layout--body {
    flex: 1;
    min-height: 0;
  }
}

.v-layout--directiom-horizontal {
  flex-direction: row;

  > .v-layout--content {
    flex: 1;
    min-width: 0;
    display: flex;
    height: 100%;
    flex-direction: column;

    > .v-layout--body {
      flex: 1;
      min-height: 0;
    }
  }
}
</style>
