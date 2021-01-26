<script lang="tsx">
import { Transition, TransitionName } from "@/components/transition";
import { defineComponent, inject, onMounted, ref } from "vue";
import { MenuProvide, MenuProvideKey } from "./interface";

export default defineComponent({
  setup(props, { slots }) {
    const vMenu = inject<MenuProvide>(MenuProvideKey)!;

    const name = ref<TransitionName>(null);

    onMounted(() => {
      name.value = "collapse";
    });

    return () => {
      if (!slots.default || vMenu.isHorizontal.value) return;
      return <Transition name={name.value}>{slots.default()}</Transition>;
    };
  },
});
</script>
