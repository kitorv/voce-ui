# Events

| 事件             | 描述                               | 参数               |
| :--------------- | :--------------------------------- | :----------------- |
| change           | 当展示数据改变，初始化也会触发     | rows               |
| select           | 当某一行选中会触发                 | row                |
| check            | 当某一行复选框勾选和去掉勾选会触发 | row                |
| check-all        | 当复选框全部选中和去掉全选会触发   | checkedAll，row    |
| cell-mouse-enter | 当单元格鼠标进入时会触发           | row，column，event |
| cell-mouse-leave | 当单元格鼠标离开时会触发           | row，column，event |
| cell-click       | 当某个单元格被点击时会触发         | row，column，event |
| cell-dbclick     | 当某个单元格被双击时会触发         | row，column，event |
| row-click        | 当某一行被点击时会触发             | row，event         |
| row-dbclick      | 当某一行被双击时会触发             | row，event         |
| column-click     | 当某一列的表头点击会触发           | row，event         |
| row-expand       | 当用某一行展开或者关闭会触发该     | row，rows          |
