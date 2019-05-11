<template>
  <table class="kv-date-day">
    <tr>
      <th class="kv-date-day--week"
          v-for="week in weeks"
          :key="week">{{week}}</th>
    </tr>
    <tr v-for="(row,index) in dateRows"
        :key="index">
      <td v-for="{text,type,disabled} in row"
          :key="text"
          :class="[
          'kv-date-day--cell',
          'kv-date-day--'+type,
          {'kv-date-day--disabled':disabled}]
          ">
        <div class="kv-date-day--text">{{text}}</div>
      </td>
    </tr>
  </table>
</template>

<script>
import dateFns from "date-fns";

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
    },
    disabled: Function
  },
  computed: {
    dateRows() {
      const firstDate = dateFns.startOfMonth(this.date);
      let diffDay = dateFns.getDay(firstDate) || 7;
      const startDate = dateFns.subDays(firstDate, diffDay);
      for (let i = 0; i < 6; i++) {
        const row = this.dateRowList[i];
        for (let j = 0; j < 7; j++) {
          let cell = row[j] || {
            row: i,
            column: j,
            type: "normal",
            disabled: false
          };
          const currentDate = dateFns.addDays(startDate, i * 7 + j);
          let type = "normal";
          if (dateFns.isToday(currentDate)) {
            type = "today";
          }
          if (dateFns.isBefore(currentDate, dateFns.startOfMonth(this.date))) {
            type = "prev-month";
          }
          if (dateFns.isAfter(currentDate, dateFns.lastDayOfMonth(this.date))) {
            type = "next-month";
          }
          if (
            type != "prev-month" &&
            type != "next-month" &&
            dateFns.isSameDay(currentDate, this.date)
          ) {
            type = "select";
          }
          cell.type = type;
          if (this.disabled) {
            cell.disabled = this.disabledDate(moment(date));
          }
          cell.text = dateFns.getDate(currentDate);
          cell.date = currentDate;
          this.$set(row, j, cell);
        }
      }
      return this.dateRowList;
    }
  }
};
</script>