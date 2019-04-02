# Column Attrbuites

| 参数            | 描述                             | 类型                                              | 可选值                           | 默认值    |
| :-------------- | :------------------------------- | :------------------------------------------------ | :------------------------------- | :-------- |
| key             | 对应内容字段                     | String                                            | —                                | —         |
| title           | 显示标题                         | String                                            | —                                | —         |
| width           | 列的宽度                         | Number                                            | —                                | —         |
| type            | 对应列类型                       | String                                            | index，expansion，checkbox，tree | —         |
| fixed           | 固定列                           | String                                            | left，center，right              | center    |
| children        | 多级表头嵌套列数组               | Array                                             | —                                | —         |
| align           | 内容对其格式                     | String                                            | left，center，right              | left      |
| headerAlign     | 表头标题对其格式                 | String                                            | left，center，right              | left      |
| columnFormatter | 表头自定义渲染                   | Function(h,{column})                              | —                                | —         |
| headerFormatter | 表头数据行单元格内容自定义渲染   | Function(h,{data,row,column,value,index})         | —                                | fromatter |
| formatter       | 单元格内容自定义渲染             | Function(h,{data,row,column,value,index})         | —                                | —         |
| footerFormatter | 表尾数据行单元格内容自定义渲染   | Function(h,{data,row,column,value,index})         | —                                | formatter |
| sortable        | 当前列是否可以排序               | Boolean                                           | —                                | false     |
| render          | 列自定义渲染，content 格式化内容 | Function(h,content,{data,row,column,value,index}) | —                                | —         |
