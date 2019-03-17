<template>
  <div class="kv-code-snippet">
    <div class="kv-code-snippet--demo">
      <slot name="source"></slot>
    </div>
    <div class="kv-code-snippet--desc">
      <slot></slot>
      <span class="kv-code-snippet--icon-code"
            @click="showCode=!showCode">
        <img v-if="showCode"
             src="../assest/images/code-open.svg">
        <img v-else
             src="../assest/images/code.svg">
      </span>
    </div>
    <div v-if="showCode"
         class="kv-code-snippet--code highlight">
      <slot name="highlight"></slot>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      showCode: true
    }
  }
};
</script>

<style lang="scss" scoped>
.kv-code-snippet {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 16px;
  border: 1px solid #ebedf0;
  border-radius: 2px;
  transition: all 0.2s;

  h1 {
    color: #0d1a26;
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 8px;
    font-size: 30px;
    line-height: 38px;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Lato;
    margin: 1.6em 0 0.6em;
    font-weight: 500;
    clear: both;
  }
  h3 {
    font-size: 18px;
  }
  h4 {
    font-size: 16px;
  }
  h5 {
    font-size: 14px;
  }
  h6 {
    font-size: 12px;
  }
  p,
  pre {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    margin: 0;
    padding: 0;
  }
  ul > li > p,
  ol > li > p {
    margin: 0.2em 0;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  ul > li {
    list-style-type: circle;
    margin-left: 20px;
    padding-left: 4px;
    padding-top: 15px;
  }
  ol > li {
    list-style-type: decimal;
    margin-left: 20px;
    padding-left: 4px;
    padding-top: 15px;
  }
  > table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #ebedf0;
    width: 100%;
    margin: 8px 0 16px;
  }
  > table th,
  > table td {
    color: #314659;
    border: 1px solid #ebedf0;
    text-align: left;
    padding: 10px 15px;
  }
  > table th {
    white-space: nowrap;
    color: #5c6b77;
    font-weight: 500;
    background: rgba(0, 0, 0, 0.02);
  }
  strong,
  b {
    font-weight: 500;
  }

  h1:hover,
  h2:hover,
  h3:hover,
  h4:hover,
  h5:hover,
  h6:hover {
    opacity: 1;
    display: inline-block;
  }
  > br,
  p > br {
    clear: both;
  }
  blockquote {
    font-size: 90%;
    color: #0d1a26;
    border-left: 4px solid #ebedf0;
    padding-left: 0.8em;
    margin: 1em 0;
  }
  blockquote p {
    margin: 0;
  }
  hr {
    height: 1px;
    border: 0;
    background: #ebedf0;
    clear: both;
  }
}

.kv-code-snippet--demo {
  box-sizing: border-box;
  padding: 20px 22px;
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

  .kv-code-snippet--icon-code {
    position: absolute;
    right: 16px;
    bottom: 13px;
    cursor: pointer;
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;

    > img {
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
  }
}

.kv-code-snippet--code {
  box-sizing: border-box;
  border-top: 1px solid #ebedf0;

  code {
    background-color: #f7f7f7;
    font-family: Consolas, Menlo, Courier, monospace;
    border: none;
    display: block;
    font-size: 14px;
    padding: 16px 32px;
    line-height: 1.5;
  }
}
</style>
