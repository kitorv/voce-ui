(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc013"],{"4ba0":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content element-doc"},[t("h1",[e._v("分页查询")]),t("h2",[e._v("基本分页")]),t("kv-code-snippet",[t("div"),t("element-demo0",{attrs:{slot:"source"},slot:"source"}),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-datagrid\n    :columns="columns"\n    :data="data"\n    :pagination="true"\n    :load-data="loadData"\n  ></kv-datagrid>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "no", title: "序号" },\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: []\n      };\n    },\n    methods: {\n      loadData({ pageIndex, pageSize }) {\n        let rows = [];\n        for (let i = 0; i < pageSize; i++) {\n          let no = (pageIndex - 1) * pageSize + i + 1;\n          rows.push({\n            no,\n            name: `name-${no}`,\n            age: no,\n            address: "address"\n          });\n        }\n        return { total: 1000, rows };\n      }\n    }\n  };\n<\/script>\n')])])])],2)],1)},o=[],d=t("cebc"),s=(t("cadf"),t("551c"),t("f751"),t("097d"),{name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("kv-datagrid",{attrs:{columns:e.columns,data:e.data,pagination:!0,"load-data":e.loadData}})]],2)},n=[],t={data:function(){return{columns:[{key:"no",title:"序号"},{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[]}},methods:{loadData:function(e){for(var n=e.pageIndex,t=e.pageSize,a=[],o=0;o<t;o++){var d=(n-1)*t+o+1;a.push({no:d,name:"name-".concat(d),age:d,address:"address"})}return{total:1e3,rows:a}}}};return Object(d["a"])({},t,{render:e,staticRenderFns:n})}()}}),r=s,l=t("2877"),c=Object(l["a"])(r,a,o,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0cc013.dd5e4a8a.js.map