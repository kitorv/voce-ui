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

        <div style="width:800px;height:600px;overflow:hidden;">
          <datagrid :columns="columns2"
                    :data="data"
                    :footer="footer"
                    :row-class="rowClass"
                    :cell-class="cellClass"
                    :stripe="true">
            <div slot="expansion">
              <div style="height:100px;background-color:#e8f7fe">
                expand row
              </div>
            </div>
          </datagrid>
        </div>

        <div style="width:800px;height:600px;overflow:hidden;">
          <datagrid :columns="columns"
                    :data="data"
                    :footer="footer"
                    :fit="false"></datagrid>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import "../../packages/style/index.scss";
import Datagrid from "../../packages/components/table";

export default {
  components: { Datagrid },
  data() {
    return {
      columns2: [
        { type: "expansion", width: 40 },
        { type: "checkbox", width: 40 },
        { key: "id", title: "id标识", width: 100 },
        { key: "name", title: "姓名", width: 100 },
        { key: "age", title: "年龄", width: 100 },
        { key: "work", title: "工作", width: 100 }
      ],
      columns: [
        { type: "expansion", fixed: "left", width: 40 },
        { type: "checkbox", fixed: "left", width: 40 },
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
        { key: "number1", title: "数值1", fixed: "right", width: 80 },
        { key: "number2", title: "数值2", fixed: "right", width: 80 },
        { key: "number3", title: "数值3", fixed: "right", width: 80 }
      ],
      data: [
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024",
          number1: 100,
          number2: 200,
          number3: 300
        },
        {
          id: 2,
          name: "李四",
          age: 28,
          work: "销售",
          street: "湖里街道",
          building: "20#",
          doorNo: "3001"
        },
        {
          id: 3,
          name: "王五",
          age: 35,
          work: "采购",
          street: "集美街道",
          building: "65#",
          doorNo: "1001",
          number1: 100,
          number2: 200,
          number3: 300
        }
      ],
      footer: [
        {
          id: 1,
          name: "张三",
          age: 20,
          work: "程序员",
          street: "软件园二期",
          building: "14#",
          doorNo: "1024",
          number1: 100,
          number2: 200,
          number3: 300
        }
      ],
      rowClass() {
        return "kv-datagird-row-class";
      },
      cellClass() {
        return "kv-datagird-cell-class";
      }
    };
  }
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

