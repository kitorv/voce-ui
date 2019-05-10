<template>
  <table>
    <tr>
      <th v-for="week in weeks"
          :key="week">{{week}}</th>
    </tr>
    <tr class="sh-date-table--row"
        v-for="(row,index) in dateRows"
        :key="index">
      <td :class="['sh-date-table--'+cell.type,{
                'sh-date-table--disabled':cell.disabled
            }]"
          v-for="cell in row"
          :key="cell.text">
        <div> {{cell.text}} </div>
      </td>
    </tr>
  </table>
</template>

<script>
import {
  startOfMonth,
  getDay,
  subDays,
  addDays,
  isToday,
  isBefore,
  lastDayOfMonth,
  isSameDay,
  getDate
} from "date-fns";

export default {
  name: "KvDateDay",
  componentName: "KvDateDay",
  data() {
    return {
      dateRowList: [[], [], [], [], [], []]
    };
  },
  props: {
    weeks: {
      type: Array,
      default: () => ["日", "一", "二", "三", "四", "五", "六"]
    },
    date: {
      type: Date,
      required: true
    }
  },
  computed: {
    dateRows() {
      const firstDate = startOfMonth(this.date);
      const diffDay = getDay(firstDate);
      if (diffDay === 0) {
        diffDay = 7;
      }
      const startDate = subDays(firstDate, diffDay);
      const rows = this.dateRowList;
      for (let i = 0; i < 6; i++) {
        const row = rows[i];
        for (let j = 0; j < 7; j++) {
          // 获取单元格的值
          let cell = row[j];
          // 单元格不可用设置初始化配置
          if (!cell) {
            cell = { row: i, column: j, type: "normal", disabled: false };
          }
          cell.type = "normal";
          const currentDate = addDays(startDate, i * 7 + j);
          if (isToday(currentDate)) {
            cell.type = "today";
          }
          if (isBefore(currentDate, startOfMonth(this.date))) {
            cell.type = "prev-month";
          }
          if (isBefore(startOfMonth(this.date), lastDayOfMonth(this.date))) {
            cell.type = "prev-month";
          }

          // 判断是否当前选中时间
          if (
            cell.type != "prev-month" &&
            cell.type != "next-month" &&
            isSameDay(currentDate, this.date)
          ) {
            cell.type = "select";
          }
          //                     // 判断该日期是否禁用
          //                     if (this.disabledDate) {
          //                         cell.disabled = this.disabledDate(moment(date));
          //                     }
          // 设置时间
          cell.text = getDate(currentDate);
          // 完整时间存储
          cell.date = currentDate;
          // 添加到状态管理
          this.$set(row, j, cell);
        }
      }
      return rows;
    }
  }
};
</script>