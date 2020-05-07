# Color 色彩

统一颜色，提供一致的视觉体验。

## 主要颜色

:::snippet 采用友好的蓝色作为主颜色。

```vue
<template>
  <div class="vsc-color">
    <ul>
      <li class="vsc-color--primary">Primary</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.vsc-color {
  ul {
    display: flex;
    align-items: center;
    padding: 0;
  }

  li {
    display: inline-flex;
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    color: #fff;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    cursor: default;
  }

  li:hover {
    transform: translate(0, 8px);
    box-shadow: 0px 0px 40px -10px rgba(255, 255, 255, 0) !important;
  }
}

.vsc-color--primary {
  background: $-color--primary;
  box-shadow: 0px 15px 40px -10px rgba($-color--primary, 0.9);
}
</style>
```

:::

## 辅助颜色

:::snippet 采用一个系列的默认颜色，以促进更改和有效操作。,通过 scss 变量进行配置。

```vue
<template>
  <div class="vsc-color">
    <ul>
      <li class="vsc-color--success">Success</li>
      <li class="vsc-color--danger">Danger</li>
      <li class="vsc-color--warning">Warning</li>
      <li class="vsc-color--dark">Dark</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.vsc-color {
  ul {
    display: flex;
    align-items: center;
    padding: 0;
  }

  li {
    display: inline-flex;
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    color: #fff;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    cursor: default;
  }

  li:hover {
    transform: translate(0, 8px);
    box-shadow: 0px 0px 40px -10px rgba(255, 255, 255, 0) !important;
  }
}

.vsc-color--success {
  background: $-color--success;
  box-shadow: 0px 15px 40px -10px rgba($-color--success, 0.9);
}

.vsc-color--danger {
  background: $-color--danger;
  box-shadow: 0px 15px 40px -10px rgba($-color--danger, 0.9);
}

.vsc-color--warning {
  background: $-color--warning;
  box-shadow: 0px 15px 40px -10px rgba($-color--warning, 0.9);
}

.vsc-color--dark {
  background: $-color--dark;
  box-shadow: 0px 15px 40px -10px rgba($-color--dark, 0.9);
}
</style>
```

:::

## 文字颜色

:::snippet 文字颜色采用中性色逐级递减，由深到浅。

```vue
<template>
  <div class="vsc-text-color">
    <ul>
      <li class="vsc-text-color--primary">Primary</li>
      <li class="vsc-text-color--regular">Regular</li>
      <li class="vsc-text-color--secondary">Secondary</li>
      <li class="vsc-text-color--placeholder">Placeholder</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.vsc-text-color {
  ul {
    display: flex;
    align-items: center;
    padding: 0;
  }

  li {
    display: inline-flex;
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    color: #fff;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    cursor: default;
  }

  li:hover {
    transform: translate(0, 8px);
    box-shadow: 0px 0px 40px -10px rgba(255, 255, 255, 0) !important;
  }
}

.vsc-text-color--primary {
  background: $-color-text--primary;
  box-shadow: 0px 15px 40px -10px rgba($-color-text--primary, 0.9);
}

.vsc-text-color--regular {
  background: $-color-text--regular;
  box-shadow: 0px 15px 40px -10px rgba($-color-text--regular, 0.9);
}

.vsc-text-color--secondary {
  background: $-color-text--secondary;
  box-shadow: 0px 15px 40px -10px rgba($-color-text--secondary, 0.9);
}

.vsc-text-color--placeholder {
  background: $-color-text--placeholder;
  box-shadow: 0px 15px 40px -10px rgba($-color-text--placeholder, 0.9);
}
</style>
```

:::

## 边框颜色

:::snippet 边框颜色采用中性色逐级递减，由深到浅。

```vue
<template>
  <div class="vsc-border-color">
    <ul>
      <li class="vsc-border-color--base">Base</li>
      <li class="vsc-border-color--light">Light</li>
      <li class="vsc-border-color--lighter">Lighter</li>
      <li class="vsc-border-color--extra-light">Extra-Light</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.vsc-border-color {
  ul {
    display: flex;
    align-items: center;
    padding: 0;
  }

  li {
    display: inline-flex;
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    color: $-color-text--primary;
    cursor: default;
  }

  li:hover {
    transform: translate(0, 8px);
    box-shadow: 0px 0px 40px -10px rgba(255, 255, 255, 0) !important;
  }
}

.vsc-border-color--base {
  border: 1px solid $-color-border--base;
}

.vsc-border-color--light {
  border: 1px solid $-color-border--light;
}

.vsc-border-color--lighter {
  border: 1px solid $-color-border--lighter;
}

.vsc-border-color--extra-light {
  border: 1px solid $-color-border--extra-light;
}
</style>
```

:::
