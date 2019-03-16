<template>
  <div class="kv-code-snippet">
    <div class="kv-code-snippet-source">
      <slot name="source"></slot>
      <span class="kv-code-snippet-code-icon"
            v-if="!$slots.default"
            @click="showCode=!showCode"><img alt="expand code"
             src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
             class="code-expand-icon-show"></span>
    </div>
    <div class="kv-code-snippet-meta"
         v-if="$slots.default">
      <slot></slot>
      <span v-if="$slots.default"
            class="kv-code-snippet-code-icon"
            @click="showCode=!showCode"><img alt="expand code"
             src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
             class="code-expand-icon-show"></span>
    </div>
    <div class="kv-code-snippet-code"
         v-show="showCode">
      <slot name="code"></slot>
    </div>
  </div>
</template>
<script type="text/babel">
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
  border: 1px solid #ebedf0;
  border-radius: 2px;
  display: inline-block;
  width: 100%;
  position: relative;
  margin: 0 0 16px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  border-radius: 2px;
}
.kv-code-snippet p {
  padding: 0;
  margin: 0;
}
.kv-code-snippet .kv-code-snippet-code-icon {
  position: absolute;
  right: 16px;
  bottom: 14px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
}
.kv-code-snippet .kv-code-snippet-code-icon img {
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  max-width: 100%;
  width: 100%;
  vertical-align: baseline;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.kv-code-snippet .kv-code-snippet-source {
  border-bottom: 1px solid #ebedf0;
  padding: 20px 24px 20px;
  color: #444;
  position: relative;
  margin-bottom: -1px;
}
.kv-code-snippet .kv-code-snippet-meta {
  position: relative;
  padding: 12px 50px 12px 20px;
  border-radius: 0 0 2px 2px;
  -webkit-transition: background-color 0.4s;
  transition: background-color 0.4s;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 14px;
  color: #444;
  font-size: 14px;
  line-height: 2;
  border-radius: 0;
  border-bottom: 1px dashed #ebedf0;
  margin-bottom: -1px;
}
.kv-code-snippet .kv-code-snippet-meta code {
  color: #444;
  background-color: #e6effb;
  margin: 0 4px;
  display: inline-block;
  padding: 3px 7px;
  border-radius: 3px;
  height: 18px;
  line-height: 18px;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 14px;
}
.kv-code-snippet .kv-code-snippet-code {
  background-color: #f7f7f7;
  font-size: 0;
}
.kv-code-snippet .kv-code-snippet-code code {
  background-color: #f7f7f7;
  font-family: Consolas, Menlo, Courier, monospace;
  border: none;
  display: block;
  font-size: 14px;
  padding: 16px 32px;
}
.kv-code-snippet .kv-code-snippet-code pre {
  margin: 0;
  padding: 0;
}
.sh-checkbox {
  color: #444;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
}
</style>