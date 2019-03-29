# API

## Attributes

| 参数       | 描述                                                     | 类型                                                   | 可选值 | 默认值 |
| :--------- | :------------------------------------------------------- | :----------------------------------------------------- | :----- | :----- |
| columns    | 列配置详见 Column                                        | Array                                                  | —      | []     |
| data       | 展示数据                                                 | Array                                                  | —      | []     |
| header     | 表头数据                                                 | Array                                                  | —      | []     |
| footer     | 表尾数据                                                 | Array                                                  | —      | []     |
| fit        | 自适应父容器宽高                                         | Boolean                                                | —      | false  |
| border     | 边框                                                     | Boolean                                                | —      | false  |
| stripe     | 斑马纹                                                   | Boolean                                                | —      | false  |
| select     | 单行选中                                                 | Boolean                                                | —      | false  |
| maxHeight  | 最大高度，超过自动固定表头                               | Number                                                 | —      | —      |
| rowClass   | 行渲染类样式                                             | Function({index,data,row})                             | —      | —      |
| rowStyle   | 行渲染样式                                               | Function({index,data,row})                             | —      | —      |
| cellClass  | 单元格类样式                                             | Function({index,data,row,column})                      | —      | —      |
| cellStyle  | 单元格样式                                               | Function({index,data,row,column})                      | —      | —      |
| cellSpan   | 单元格合并,返回`{rowSpan,colSpan}`返回的值对应占位行和列 | Function({row, column, rowIndex, columnIndex})         | —      | —      |
| pagination | 分页配置属性详细参照分页属性 Pagination                  | Object                                                 | —      | —      |
| showHeader | 显示表头                                                 | Boolean                                                | —      | true   |
| loadData   | 加载数据，分页数据的加载方法和异步数据加载方法           | Function({ pageIndex, pageSize, orderType, orderKey }) | —      | true   |
| loading    | 数据加载中,分页和 loadData 自动处理                      | Boolean                                                | —      | false  |
