<template>
  <div class="view-home">
    <div class="view-home--header">
      <div class="view-home--logo">Kv-Table</div>
      <a class="view-home--github"
         href="https://github.com/kitorv/datagrid">
        <i class="kv-icon-github"></i>
      </a>
    </div>
    <div class="view-home--body">
      <div class="view-home--route">
        <div class="view-home--heading">开发指南</div>
        <router-link class="view-home--link"
                     to="/">快速上手</router-link>
        <router-link class="view-home--link"
                     to="/doc/changelog">更新日志</router-link>

        <div class="view-home--heading">API文档</div>
        <router-link class="view-home--link"
                     to="/doc/attribute">属性</router-link>
        <router-link class="view-home--link"
                     to="/doc/column">列属性</router-link>
        <router-link class="view-home--link"
                     to="/doc/row">行属性</router-link>
        <router-link class="view-home--link"
                     to="/doc/events">事件</router-link>
        <router-link class="view-home--link"
                     to="/doc/methods">方法</router-link>
        <router-link class="view-home--link"
                     to="/doc/pagination">分页属性</router-link>

        <div class="view-home--heading">功能示例</div>
        <router-link class="view-home--link"
                     to="/example/basic">基本功能</router-link>
        <router-link class="view-home--link"
                     to="/example/column">列配置</router-link>
        <router-link class="view-home--link"
                     to="/example/resize">宽高设置</router-link>
        <router-link class="view-home--link"
                     to="/example/style">样式定义</router-link>
        <router-link class="view-home--link"
                     to="/example/render">自定义渲染</router-link>
        <router-link class="view-home--link"
                     to="/example/data">数据处理</router-link>
      </div>
      <div class="view-home--page">
        <div class="view-home--content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.view-home {
  position: relative;
}

.view-home--header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  height: 65px;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.04);
}
.view-home--logo {
  height: 65px;
  line-height: 65px;
  font-size: 25px;
  display: inline-block;
  font-weight: 700;
  width: 240px;
  color: #409eff;
  padding-left: 24px;
}

.view-home--github {
  color: #444444;
  font-size: 40px;
  position: fixed;
  right: 40px;
  top: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
  }
}

.view-home--body {
  padding-top: 65px;
}

.view-home--route {
  position: fixed;
  z-index: 30;
  margin: 0;
  top: 65px;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  overflow-y: auto;
  width: 240px;
  font-size: 14px;
  background-color: #f5f7fb;
  margin: 0;
  padding: 14px 0;
}

.view-home--heading {
  color: #333333;
  transition: color 0.15s ease;
  font-size: 16px;
  padding-left: 24px;
  margin-top: 0;
  margin-bottom: 4px;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
}

.view-home--link {
  position: relative;
  font-weight: 400;
  display: inline-block;
  color: #444444;
  border-left: 4px solid transparent;
  padding: 8px 16px 8px 32px;
  line-height: 1.5;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s ease;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #409eff;
  }
}

.router-link-exact-active {
  font-weight: 600;
  border-left-color: #409eff;
  color: #409eff;
  background-color: #e6f7ff;
  opacity: 1;
}

.view-home--page {
  padding-left: 240px;
  background-color: #fdfdfd;
}
.view-home--content {
  max-width: 1000px;
  padding: 25px 50px 60px 50px;
  margin: 0 auto;
}

.view-home /deep/ {
  color: #444444;

  h1 {
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 8px;
    font-size: 30px;
    line-height: 38px;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 10px;
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

  .element-doc {
    > table {
      border-collapse: collapse;
      border-spacing: 0;
      empty-cells: show;
      border: 1px solid #ebedf0;
      width: 100%;
      margin: 8px 0 16px;
      font-size: 14px;
    }
    > table th,
    > table td {
      color: #444444;
      border: 1px solid #ebedf0;
      text-align: left;
      padding: 8px 12px;
    }
    > table th {
      white-space: nowrap;
      color: #333333;
      font-weight: 500;
      background: rgba(0, 0, 0, 0.02);
    }

    > pre > code.hljs {
      font-family: Consolas, Menlo, Courier, monospace;
      line-height: 1.5;
      font-size: 14px;
      padding: 18px 24px;
      background-color: #fafafa;
      border: 1px solid #eaeefb;
      margin-bottom: 25px;
      border-radius: 4px;
    }

    > p > code {
      color: #333333;
      background-color: #f2f4f5;
      margin: 0 4px;
      display: inline-block;
      padding: 7px 10px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
      font-size: 14px;
    }
  }
}
</style>
