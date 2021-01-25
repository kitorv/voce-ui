<script lang="tsx">
import { Transition } from "@/components/transition";
import { defineComponent, inject } from "vue";
import { MenuProvide, MenuProvideKey } from "./interface";

export default defineComponent({
  props: {
    inline: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const vMenu = inject<MenuProvide>(MenuProvideKey)!;

    return () => {
      if (!slots.default || vMenu.isHorizontal.value) return;
      return <Transition name="collapse">{slots.default()}</Transition>;
    };
  },
});
</script>
