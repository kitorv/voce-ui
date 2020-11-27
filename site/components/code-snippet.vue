<template>
  <div class="vc-code-snippet">
    <div :class="exampleClasses">
      <slot name="example" />
    </div>
    <div class="vc-code-snippet--desc">
      <slot name="description" />
      <div class="vc-code-snippet--operate" @click="handleIconClick">
        <v-icon :type="codeIcon"></v-icon>
      </div>
    </div>
    <transition
      leave-active-class="vc-code-snippet--transition"
      enter-active-class="vc-code-snippet--transition"
      @before-enter="transitionBeforeEnter"
      @enter="transitionEnter"
      @after-enter="transitionAfterEnter"
      @before-leave="transitionEnter"
      @leave="transitionBeforeEnter"
      @after-leave="transitionAfterEnter"
    >
      <div v-show="showCode" class="vc-code-snippet--code" ref="codeEl">
        <slot name="source" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import "highlight.js/styles/color-brewer.css";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "VcCodeSnippet",
  setup() {
    let showCode = ref(false);

    const codeIcon = computed(() => {
      return showCode.value ? "code-collapse" : "code-expand";
    });

    const route = useRoute();
    const exampleClasses = computed(() => {
      return [
        "vc-code-snippet--example",
        `vc-code-snippet--${route.path.split("/").join("-")}`,
      ];
    });

    const handleIconClick = () => {
      showCode.value = !showCode.value;
    };

    let codeEl = ref<HTMLDivElement>();

    const transitionBeforeEnter = (el: HTMLElement) => {
      el.style.maxHeight = "0px";
    };

    const transitionEnter = (el: HTMLElement) => {
      if (!codeEl.value) return;
      el.style.maxHeight = `${codeEl.value.scrollHeight}px`;
    };

    const transitionAfterEnter = (el: HTMLElement) => {
      el.style.maxHeight = "auto";
    };

    return {
      showCode,
      codeIcon,
      handleIconClick,
      exampleClasses,
      codeEl,
      transitionBeforeEnter,
      transitionEnter,
      transitionAfterEnter,
    };
  },
});
</script>

<style lang="scss">
.vc-code-snippet {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 16px;
  border-radius: 4px;
  transition: all 0.2s;
  box-shadow: 0 6px 12px -2px mix($-color--primary, #ffffff, 10%),
    0 0 0 1px $-color--border-base;
  background-color: #ffffff;
  text-align: left;
  margin-bottom: 30px;
}

.vc-code-snippet--example {
  box-sizing: border-box;
  padding: 26px 32px;
  color: $-color--text-primary;
  border-bottom: 1px solid $-color--border-light;
  overflow-y: auto;
}

.vc-code-snippet--desc {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 44px;
  padding: 10px 50px 10px 20px;
  font-size: 14px;
  line-height: 1.5;
}

.vc-code-snippet--operate {
  position: absolute;
  right: 16px;
  bottom: 13px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}

.vc-code-snippet--code {
  box-sizing: border-box;
  border-top: 1px solid $-color--border-light;
  box-sizing: border-box;
  overflow: hidden;

  > pre {
    margin: 0;
    padding: 0;
  }
}

.vc-code-snippet--transition {
  transition: 0.25s max-height ease-in-out;
}

.vc-code-snippet---component {
  &-icon {
    font-size: 32px;

    .v-icon {
      margin-right: 16px;
    }
  }

  &-button {
    .v-button {
      margin: 6px 12px 6px 0;
    }
  }

  &-link {
    .v-link {
      margin: 6px 12px 6px 0;
    }
  }

  &-text {
    span.v-text {
      margin: 6px 12px 6px 0;
    }

    .v-text--ellipsis {
      width: 60px;
    }
  }
}

// .vsc-grid {
//   .v-col {
//     margin-top: 8px;
//     margin-bottom: 8px;
//     color: #fff;
//     text-align: center;
//     border-radius: 0;
//     padding: 12px 0;
//   }

//   .v-row > .v-col:nth-child(2n + 1) {
//     background: mix($-color--primary, #ffffff, 75%);
//   }

//   .v-row > .v-col:nth-child(2n) {
//     background: $-color--primary;
//   }
// }

// .vsc-layout {
//   margin: 6px 0;
//   font-size: 18px;
//   text-align: center;
//   height: 400px;
//   color: #ffffff;

//   .v-layout--left,
//   .v-layout--right {
//     background: mix($-color--primary, #ffffff, 70%);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 160px;
//   }

//   .v-layout--header {
//     background: mix($-color--primary, #ffffff, 40%);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 64px;
//   }

//   .v-layout--body {
//     background: mix($-color--primary, #ffffff, 60%);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .v-layout--footer {
//     background: mix($-color--primary, #ffffff, 40%);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 64px;
//   }
// }

// .vsc-affix {
//   .v-button {
//     margin: 6px 0;
//   }
// }

// .vsc-space {
//   padding: 6px 0;

//   .v-space + .v-space {
//     margin-top: 16px;
//   }
// }
</style>
