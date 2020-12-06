<template>
  <div class="vc-markdown-view">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VcMarkdownView",
});
</script>

<style lang="scss">
.vc-markdown-view {
  max-width: 1000px;
  padding: 0 50px 60px 50px;
  margin: 0 auto;
  color: $-color--text-primary;
  font-size: 14px;
  line-height: 1.5;

  > p.vc-markdown-doc {
    margin-bottom: 12px;
  }
}

h1.vc-markdown-doc {
  font-size: 28px;
  font-weight: 600;
  margin: 22px 0 18px;
}

h2.vc-markdown-doc {
  font-size: 22px;
  font-weight: 600;
  margin: 20px 0 16px;
}

h3.vc-markdown-doc {
  font-size: 18px;
  font-weight: 600;
  margin: 18px 0 14px;
}

h4.vc-markdown-doc {
  font-size: 16px;
  font-weight: 600;
  margin: 16px 0 12px;
}

h5.vc-markdown-doc {
  font-size: 14px;
  font-weight: 600;
  margin: 14px 0 10px;
}

h6.vc-markdown-doc {
  font-size: 12px;
  font-weight: 600;
  margin: 12px 0 8px;
}

p.vc-markdown-doc {
  line-height: 1.5;
  color: $-color--text-primary;
  font-size: 14px;
  padding: 0;
  margin: 0;
}

a.vc-markdown-doc {
  text-decoration: none;
  color: $-color--primary;
}

table.vc-markdown-doc {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid $-color--border-base;
  width: 100%;
  margin: 8px 0 16px;
  font-size: 14px;
}

tr.vc-markdown-doc td.vc-markdown-doc:nth-child(1) {
  white-space: nowrap;
}

th.vc-markdown-doc,
td.vc-markdown-doc {
  color: $-color--text-primary;
  border: 1px solid $-color--border-base;
  text-align: left;
  padding: 8px 10px;
  vertical-align: middle;

  code.vc-markdown-doc {
    margin: 0;
    font-family: "Source Code Pro", "Monaco", "Inconsolata", monospace;
  }

  em.vc-markdown-doc {
    font-style: normal;
    color: $-color--primary;
    font-family: "Source Code Pro", "Monaco", "Inconsolata", monospace;
  }
}

th.vc-markdown-doc {
  white-space: nowrap;
  color: $-color--text-primary;
  font-weight: 500;
  background-color: mix($-color--border-base, #ffffff, 20%);
}

code.vc-markdown-doc {
  border-radius: 3px;
  padding: 2px 8px;
  margin: 0 4px;
  color: $-color--primary;
  background: mix($-color--primary, #ffffff, 5%);
}

code[class*="language-"] {
  background: mix($-color--text-primary, #ffffff, 2%);
  font-family: Consolas, Menlo, Courier, monospace;
  display: block;
  font-size: 14px;
  padding: 16px 20px;
  line-height: 1.5;
  border-radius: 5px;
  overflow-y: auto;
}

.vc-markdown-tip,
.vc-markdown-danger {
  padding: 12px 16px;
  border-radius: 4px;
  margin: 20px 0;
  line-height: 1.3;
}

.vc-markdown-tip {
  background-color: mix($-color--primary, #ffffff, 5%);
  border-left: 5px solid $-color--primary;
}

.vc-markdown-danger {
  background-color: mix($-color--danger, #ffffff, 5%);
  border-left: 5px solid$-color--danger;
}
</style>
