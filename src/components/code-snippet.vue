<template>
  <div class="kv-code-snippet">
    <div class="kv-code-snippet--demo">
      <slot name="source"></slot>
    </div>
    <div class="kv-code-snippet--desc">
      <slot name="desc"></slot>
      <span class="kv-code-snippet--icon-code"
            @click="showCode = !showCode">
        <img v-if="showCode"
             src="../assets/images/code-open.svg" />
        <img v-else
             src="../assets/images/code-close.svg" />
      </span>
    </div>
    <div v-show="showCode"
         class="kv-code-snippet--code">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCode: false
    };
  }
};
</script>

<style>
.kv-code-snippet {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 16px;
  border-radius: 5px;
  transition: all 0.2s;
  box-shadow: 0 6px 12px -2px rgba(0, 32, 128, 0.1), 0 0 0 1px #f0f2f7;
  background-color: #ffffff;
  text-align: left;
}
.kv-code-snippet--demo {
  box-sizing: border-box;
  padding: 30px 35px;
  color: #333333;
  border-bottom: 1px solid #ebedf0;
}
.kv-code-snippet--desc {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 44px;
  padding: 12px 50px 12px 20px;
  font-size: 14px;
  transition: background-color 0.4s;
}

.kv-code-snippet--icon-code {
  position: absolute;
  right: 16px;
  bottom: 13px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
}

.kv-code-snippet--icon-code img {
  transition: all 0.4s;
  user-select: none;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  max-width: 100%;
  width: 100%;
  vertical-align: baseline;
  box-shadow: none;
}

.kv-code-snippet--code {
  box-sizing: border-box;
  border-top: 1px solid #ebedf0;
}

.kv-code-snippet--code code{
  background-color: #f5f7fb;
  font-family: Consolas, Menlo, Courier, monospace;
  border: none;
  display: block;
  font-size: 14px;
  padding: 16px 32px;
  line-height: 1.5;
}
.kv-code-snippet--code .hljs {
  padding: 0;
  margin: 0;
}
</style>