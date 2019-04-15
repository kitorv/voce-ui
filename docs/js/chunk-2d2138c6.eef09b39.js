(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2138c6"],{acc1:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content element-doc"},[t("h1",[e._v("基本用法")]),t("h2",[e._v("简单表格")]),t("kv-code-snippet",[t("div",[t("p",[e._v("基础的表格数据展示")])]),t("element-demo0",{attrs:{slot:"source"},slot:"source"}),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table :columns="columns" :data="data"></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),t("h2",[e._v("表头分组")]),t("kv-code-snippet",[t("div",[t("p",[t("code",[e._v("column")]),e._v("设置"),t("code",[e._v("children")]),e._v("属性嵌套"),t("code",[e._v("column")]),e._v("配置来进行表头分组")])]),t("element-demo1",{attrs:{slot:"source"},slot:"source"}),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table :columns="columns" :data="data"></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名" },\n          {\n            title: "其他信息",\n            children: [\n              { key: "age", title: "年龄" },\n              {\n                title: "地址",\n                children: [\n                  { key: "street", title: "街道" },\n                  { key: "no", title: "详细地址" }\n                ]\n              }\n            ]\n          },\n          {\n            title: "公司",\n            children: [\n              { key: "company", title: "名称" },\n              { key: "companyAddress", title: "地址" }\n            ]\n          },\n          { key: "gender", title: "性别" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            street: "New York",\n            no: "No. 1 Lake Park",\n            company: "ktv",\n            companyAddress: "china xiamen",\n            gender: "M"\n          },\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            street: "New York",\n            no: "No. 1 Lake Park",\n            company: "ktv",\n            companyAddress: "china xiamen",\n            gender: "M"\n          },\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            street: "New York",\n            no: "No. 1 Lake Park",\n            company: "ktv",\n            companyAddress: "china xiamen",\n            gender: "M"\n          },\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            street: "New York",\n            no: "No. 1 Lake Park",\n            company: "ktv",\n            companyAddress: "china xiamen",\n            gender: "M"\n          },\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            street: "New York",\n            no: "No. 1 Lake Park",\n            company: "ktv",\n            companyAddress: "china xiamen",\n            gender: "M"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),t("h2",[e._v("无数据")]),t("kv-code-snippet",[t("div",[t("p",[e._v("无数据会自动生成占位符显示")])]),t("element-demo2",{attrs:{slot:"source"},slot:"source"}),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table :columns="columns" :data="data"></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: []\n      };\n    }\n  };\n<\/script>\n')])])])],2),t("h2",[e._v("数据加载中")]),t("kv-code-snippet",[t("div",[t("p",[e._v("设置属性"),t("code",[e._v("loading")]),e._v("显示加载中的状态")])]),t("element-demo3",{attrs:{slot:"source"},slot:"source"}),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table :columns="columns" :data="data" :loading="true"></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2)],1)},r=[],o=t("3f47"),s={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("kv-table",{attrs:{columns:e.columns,data:e.data}})]],2)},n=[],t={data:function(){return{columns:[{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]}}};return Object(o["a"])({},t,{render:e,staticRenderFns:n})}(),"element-demo1":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("kv-table",{attrs:{columns:e.columns,data:e.data}})]],2)},n=[],t={data:function(){return{columns:[{key:"name",title:"姓名"},{title:"其他信息",children:[{key:"age",title:"年龄"},{title:"地址",children:[{key:"street",title:"街道"},{key:"no",title:"详细地址"}]}]},{title:"公司",children:[{key:"company",title:"名称"},{key:"companyAddress",title:"地址"}]},{key:"gender",title:"性别"}],data:[{key:"1",name:"John Brown",age:32,street:"New York",no:"No. 1 Lake Park",company:"ktv",companyAddress:"china xiamen",gender:"M"},{key:"1",name:"John Brown",age:32,street:"New York",no:"No. 1 Lake Park",company:"ktv",companyAddress:"china xiamen",gender:"M"},{key:"1",name:"John Brown",age:32,street:"New York",no:"No. 1 Lake Park",company:"ktv",companyAddress:"china xiamen",gender:"M"},{key:"1",name:"John Brown",age:32,street:"New York",no:"No. 1 Lake Park",company:"ktv",companyAddress:"china xiamen",gender:"M"},{key:"1",name:"John Brown",age:32,street:"New York",no:"No. 1 Lake Park",company:"ktv",companyAddress:"china xiamen",gender:"M"}]}}};return Object(o["a"])({},t,{render:e,staticRenderFns:n})}(),"element-demo2":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("kv-table",{attrs:{columns:e.columns,data:e.data}})]],2)},n=[],t={data:function(){return{columns:[{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[]}}};return Object(o["a"])({},t,{render:e,staticRenderFns:n})}(),"element-demo3":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("kv-table",{attrs:{columns:e.columns,data:e.data,loading:!0}})]],2)},n=[],t={data:function(){return{columns:[{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]}}};return Object(o["a"])({},t,{render:e,staticRenderFns:n})}()}},d=s,l=t("17cc"),c=Object(l["a"])(d,a,r,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d2138c6.eef09b39.js.map