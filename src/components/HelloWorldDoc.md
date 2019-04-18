# Hello World

:::snippet 第一个 HelloWorld

```html
<template>
  <kv-hello-world :msg="msg" />
</template>
<script>
  export default {
    data() {
      return {
        msg: "Welcome to Your Vue.js App"
      };
    }
  };
</script>
<style>
  .class1 {
    background: red;
  }
  .class2 {
    background: red;
  }
</style>
```

:::

:::snippet 第二个 HelloWorld

```html
<template>
  <kv-hello-world msg="Welcome to Your Vue.js App" />
</template>
```

:::
