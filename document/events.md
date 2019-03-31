# Events

| 事件             | 描述                                     | 参数               |
| :--------------- | :--------------------------------------- | :----------------- |
| select           | 设置单选 select 属性，单行行选中触发     | row                |
| check            | 设置复选框列，复选框勾选、去掉勾选触发   | row                |
| check-all        | 设置复选框列，全部勾选、全部去掉勾选触发 | checkedAll，row    |
| cell-mouse-enter | 当单元格鼠标进入时会触发                 | row，column，event |
| cell-mouse-leave | 当单元格鼠标离开时会触发                 | row，column，event |
| cell-click       | 当某个单元格被点击时会触发               | row，column，event |
| cell-dbclick     | 当某个单元格被双击时会触发               | row，column，event |
| row-click        | 当某一行被点击时会触发                   | row，event         |
| row-dbclick      | 当某一行被双击时会触发                   | row，event         |
