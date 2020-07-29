<template>
  <div class="vs-index">
    <div class="vs-index--header">
      <img class="vs-index--header-logo" src="../images/logo.png" alt="logo" />
      <div class="vs-index--header-title">VECO</div>
    </div>
    <div class="vs-index--left">
      <vc-left-menu-item
        v-for="(menu, index) in menuList"
        :key="index"
        :data="menu"
      />
    </div>
    <div class="vs-index--content">
      <div class="vs-index--content-view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VcLeftMenuItem from "../components/left-menu-ietm.vue";

export default defineComponent({
  components: { VcLeftMenuItem },
  setup() {
    const menuList = [
      {
        title: "开发概览",
        children: [
          { path: "/", title: "快速上手" },
          { path: "/docs/theme", title: "主题定制" },
          { path: "/docs/changelog", title: "更新日志" },
        ],
      },
      {
        title: "基础组件",
        children: [
          {
            title: "通用",
            children: [
              {
                path: "/component/button",
                title: "Button",
                subtitle: "按钮",
              },
              { path: "/component/color", title: "Color", subtitle: "色彩" },
              { path: "/component/icon", title: "Icon", subtitle: "图标" },
              { path: "/component/link", title: "Link", subtitle: "链接" },
              { path: "/component/text", title: "Text", subtitle: "文本" },
            ],
          },
          {
            title: "布局",
            children: [
              {
                path: "/component/divider",
                title: "Divider",
                subtitle: "分割线",
              },
              { path: "/component/grid", title: "Grid", subtitle: "栅格" },
              { path: "/component/layout", title: "Layout", subtitle: "布局" },
            ],
          },
          // {
          //   title: "表单",
          //   children: [
          //     {
          //       path: "/component/radio",
          //       title: "Radio",
          //       subtitle: "单选框",
          //     },
          //     {
          //       path: "/component/checkbox",
          //       title: "Checkbox",
          //       subtitle: "复选框",
          //     },
          //     {
          //       path: "/component/input",
          //       title: "Input",
          //       subtitle: "输入框",
          //     },
          //     {
          //       path: "/component/textarea",
          //       title: "Textarea",
          //       subtitle: "文本域",
          //     },
          //     {
          //       path: "/component/numberbox",
          //       title: "Numberbox",
          //       subtitle: "数字框",
          //     },
          //     {
          //       path: "/component/number-range",
          //       title: "NumberRange",
          //       subtitle: "数字区间",
          //     },
          //     {
          //       path: "/component/select",
          //       title: "Select",
          //       subtitle: "下拉框",
          //     },
          //     {
          //       path: "/component/date-picker",
          //       title: "DatePicker",
          //       subtitle: "日期选择器",
          //     },
          //     {
          //       path: "/component/switch",
          //       title: "Switch",
          //       subtitle: "开关按钮",
          //     },
          //     { path: "/component/rate", title: "Rate", subtitle: "评分" },
          //     {
          //       path: "/component/upload",
          //       title: "Upload",
          //       subtitle: "上传",
          //     },
          //     {
          //       path: "/component/editor",
          //       title: "Editor",
          //       subtitle: "编辑器",
          //     },
          //     {
          //       path: "/component/form",
          //       title: "Form",
          //       subtitle: "表单",
          //     },
          //   ],
          // },
          // {
          //   title: "数据",
          //   children: [
          //     {
          //       path: "/component/table",
          //       title: "Table",
          //       subtitle: "表格",
          //     },
          //     {
          //       path: "/component/tree",
          //       title: "Tree",
          //       subtitle: "树",
          //     },
          //     {
          //       path: "/component/card",
          //       title: "Card",
          //       subtitle: "卡片",
          //     },
          //     {
          //       path: "/component/collapse",
          //       title: "Collapse",
          //       subtitle: "折叠面板",
          //     },
          //     {
          //       path: "/component/pagination",
          //       title: "Pagination",
          //       subtitle: "分页",
          //     },
          //     {
          //       path: "/component/badge",
          //       title: "Badge",
          //       subtitle: "徽标",
          //     },
          //     {
          //       path: "/component/statistic",
          //       title: "Statistic",
          //       subtitle: "统计数值",
          //     },
          //     {
          //       path: "/component/tag",
          //       title: "Tag",
          //       subtitle: "标签",
          //     },
          //     {
          //       path: "/component/avatar",
          //       title: "Avatar",
          //       subtitle: "头像",
          //     },
          //     {
          //       path: "/component/empty",
          //       title: "Empty",
          //       subtitle: "空状态",
          //     },
          //     {
          //       path: "/component/image",
          //       title: "Image",
          //       subtitle: "图片",
          //     },
          //   ],
          // },
          //   {
          //     title: "导航",
          //     children: [
          //       {
          //         path: "/component/tabs",
          //         title: "Tabs",
          //         subtitle: "标签页",
          //       },
          //       {
          //         path: "/component/breadcrumb",
          //         title: "Breadcrumb",
          //         subtitle: "面包屑",
          //       },
          //       {
          //         path: "/component/dropdown",
          //         title: "Dropdown",
          //         subtitle: "下拉菜单",
          //       },
          //       {
          //         path: "/component/menu",
          //         title: "Menu",
          //         subtitle: "菜单",
          //       },
          //       {
          //         path: "/component/steps",
          //         title: "Steps",
          //         subtitle: "步骤条",
          //       },
          //       {
          //         path: "/component/drawer",
          //         title: "Drawer",
          //         subtitle: "抽屉",
          //       },
          //       {
          //         path: "/component/page-header",
          //         title: "PageHeader",
          //         subtitle: "页头",
          //       },
          //       {
          //         path: "/component/backtop",
          //         title: "Backtop",
          //         subtitle: "回到顶部",
          //       },
          //     ],
          //   },
          //   {
          //     title: "反馈",
          //     children: [
          //       {
          //         path: "/component/alert",
          //         title: "Alert",
          //         subtitle: "警告",
          //       },
          //       {
          //         path: "/component/modal",
          //         title: "Modal",
          //         subtitle: "对话框",
          //       },
          //       {
          //         path: "/component/message",
          //         title: "Message",
          //         subtitle: "全局提示",
          //       },
          //       {
          //         path: "/component/notification",
          //         title: "Notification",
          //         subtitle: "通知提醒",
          //       },
          //       {
          //         path: "/component/progress",
          //         title: "Progress",
          //         subtitle: "进度条",
          //       },
          //       {
          //         path: "/component/popover",
          //         title: "Popover",
          //         subtitle: "气泡弹出框",
          //       },
          //       {
          //         path: "/component/tooltip",
          //         title: "Tooltip",
          //         subtitle: "气泡提示",
          //       },
          //       {
          //         path: "/component/spin",
          //         title: "Spin",
          //         subtitle: "加载中",
          //       },
          //       {
          //         path: "/component/divider",
          //         title: "Divider",
          //         subtitle: "分割线",
          //       },
          //     ],
          //   },
        ],
      },
    ];

    return { menuList };
  },
});
</script>

<style lang="scss" scoped>
.vs-index--header {
  position: fixed;
  top: 0;
  left: 0;
  height: 48px;
  padding: 8px 32px;
  background: #ffffff;
  z-index: 1200;
  display: flex;
  align-items: center;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 100%;
}

.vs-index--header-logo {
  position: relative;
  height: 28px;
}

.vs-index--header-title {
  font-size: 24px;
  font-weight: bold;
  padding: 0 12px;
}

.vs-index--left {
  font-size: 14px;
  padding: 16px 0;
  width: 240px;
  position: fixed;
  z-index: 1010;
  margin: 0;
  top: 48px;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  overflow-y: auto;
}

.vs-index--content {
  padding-left: 240px;
}

.vs-index--content-view {
  max-width: 1000px;
  padding: 72px 50px 60px 50px;
  margin: 0 auto;
}
</style>
