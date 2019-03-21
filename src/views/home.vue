<template>
  <div class="view-home">
    <!-- <div class="view-home--header">
      <div class="view-home--header-title">Vue-DataGrid</div>
    </div> -->
    <div class="view-home--body">
      <div class="view-home--body-route">
        <!-- <router-link class="view-home--body-link"
                     to="/">基本功能</router-link>
        <router-link class="view-home--body-link"
                     to="/example/column">列配置</router-link>
        <router-link class="view-home--body-link"
                     to="/example/resize">宽高设置</router-link>
        <router-link class="view-home--body-link"
                     to="/example/style">样式定义</router-link>
        <router-link class="view-home--body-link"
                     to="/example/render">自定义渲染</router-link>
        <router-link class="view-home--body-link"
                     to="/example/data">数据处理</router-link> -->

        <!-- <router-link class="view-home--body-link"
                     to="/4">样式</router-link>
        <router-link class="view-home--body-link"
                     to="/4">展开行</router-link>
        <router-link class="view-home--body-link"
                     to="/4">排序</router-link>
        <router-link class="view-home--body-link"
                     to="/4">单元格合并</router-link> -->
      </div>
      <div class="view-home--body-content">
        <!-- <router-view></router-view> -->
        <pagination :page-total="total"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '../../packages/components/pagination'
export default {
  components: { Pagination },
  data() {
    return { total: 1000 }
  }
};
</script>

<style lang="scss" scoped>
.view-home {
  position: relative;
}

.view-home--header {
  transition: all 0.3s;
  box-shadow: 0 2px 8px #f0f1f2;
  position: relative;
  z-index: 10;
  height: 65px;
  color: #444;
}
.view-home--header-title {
  height: 65px;
  line-height: 65px;
  font-size: 25px;
  display: inline-block;
  padding-left: 75px;
  font-weight: 700;
}

.view-home--body {
  position: relative;
  display: flex;
  padding: 40px 0 0;
  margin-left: 0;
  margin-right: 0;
  height: auto;
  zoom: 1;
  box-sizing: border-box;
}

.view-home--body-route {
  width: 250px;
  border-right: 1px solid #e8e8ee;
}

.view-home--body-link {
  font-size: 16px;
  color: #333;
  line-height: 40px;
  height: 40px;
  margin: 0;
  padding: 4px 25px;
  text-decoration: none;
  display: block;
  position: relative;
  transition: 0.15s ease-out;
  font-weight: bold;
  border-right: 3px solid transparent;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    color: #41a259;
  }
}

.view-home--body-content {
  flex: 1;
  padding: 0 64px 64px 64px;
  min-height: 500px;
  overflow: hidden;
}

.router-link-exact-active {
  color: #41a259;
  background-color: #eeffde;
  border-right-color: #41a259;
}

.view-home /deep/ {
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
}
</style>

