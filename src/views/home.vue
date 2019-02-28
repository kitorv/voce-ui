<template>
  <div class="view-home">
    <!-- <div class="view-home--header">
      <div class="view-home--header-title">Vue-DataGrid</div>
    </div> -->
    <div class="view-home--body">
      <!-- <div class="view-home--body-route">
        <router-link class="view-home--body-link"
                     to="/">基本功能</router-link>
      </div> -->
      <div class="view-home--body-content">
        <datagrid :columns="columns"></datagrid>
      </div>
    </div>
  </div>
</template>

<script>
import "../../packages/datagrid/assests/index.scss";
import Datagrid from "../../packages/datagrid/components/table";

export default {
  components: { Datagrid },
  data() {
    return {
      columns: [
        { key: "id", title: "id标识", fixed: "left", width: 100 },
        {
          title: "用户信息",
          children: [
            { key: "name", title: "姓名", width: 100 },
            { key: "age", title: "年龄", width: 100 },
            { key: "work", title: "工作", width: 100 }
          ]
        },
        {
          title: "地址",
          children: [
            { key: "street", title: "街道", width: 100 },
            {
              title: "详细地址",
              children: [
                { key: "building", title: "位置", width: 100 },
                { key: "doorNo", title: "门牌号", width: 100 }
              ]
            }
          ]
        },
        {
          title: "指标",
          children: [
            { key: "target1", title: "指标1", width: 80 },
            { key: "target2", title: "指标2", width: 80 },
            { key: "target3", title: "指标3", width: 80 },
            { key: "target4", title: "指标4", width: 80 }
          ]
        },
        { key: "number0", title: "数值", fixed: "right", width: 80 },
        { key: "number1", title: "数值1", fixed: "right", width: 80 },
        { key: "number2", title: "数值2", fixed: "right", width: 80 },
        { key: "number3", title: "数值3", fixed: "right", width: 80 }
      ]
    };
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

