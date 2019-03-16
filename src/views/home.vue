<template>
  <div class="view-home">
    <div class="view-home--header">
      <div class="view-home--header-title">Vue-DataGrid</div>
    </div>
    <div class="view-home--body">
      <div class="view-home--body-route">
        <router-link class="view-home--body-link"
                     to="/">基本功能</router-link>
      </div>

      <div class="view-home--body-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
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
  cursor: pointer;

  &:hover {
    color: #41a259;
  }
}

.view-home--body-content {
  flex: 1;
  padding: 0 64px 64px 64px;
  min-height: 500px;
}
</style>

