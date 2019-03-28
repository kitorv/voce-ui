# Datagrid API

## Datagrid Attributes

| 参数      | 描述                       | 类型                       | 可选值 | 默认值 |
| :-------- | :------------------------- | :------------------------- | :----- | :----- |
| columns   | 列配置详见 Column          | Array                      | —      | []     |
| data      | 展示数据                   | Array                      | —      | []     |
| header    | 表头数据                   | Array                      | —      | []     |
| footer    | 表尾数据                   | Array                      | —      | []     |
| fit       | 自适应父容器宽高           | Boolean                    | —      | false  |
| border    | 边框                       | Boolean                    | —      | false  |
| stripe    | 斑马纹                     | Boolean                    | —      | false  |
| select    | 单行选中                   | Boolean                    | —      | false  |
| maxHeight | 最大高度，超过自动固定表头 | Number                     | —      | -      |
| rowClass  | 行渲染类样式               | Function({index,data,row}) | —      | -      |
| rowStyle  | 行渲染样式                 | Function({index,data,row}) | —      | -      |
| columns   | 表格列配置                 | Array                      | —      | []     |
| columns   | 表格列配置                 | Array                      | —      | []     |

cellClass: { type: Function },
cellStyle: { type: Function },
cellSpan: { type: Function },
pagination: { type: Object },
showHeader: { type: Boolean, default: true },
loadData: { type: Function },
loading: { type: [Boolean, Object], default: null }
