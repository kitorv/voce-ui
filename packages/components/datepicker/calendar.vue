<template>
  <div class="kv-date-calendar">
    <kv-date-day v-if="view==='day'"
                 v-model="dateValue"
                 :select-value="value"
                 @year-click="view='year'"
                 @month-click="view='month'"
                 @date-click="handleDateSelect"></kv-date-day>
    <kv-date-month v-if="view==='month'"
                   v-model="dateValue"
                   :select-value="value"
                   @year-click="view='year'"
                   @month-click="handleMonthSelect"></kv-date-month>
    <kv-date-year v-if="view==='year'"
                  v-model="dateValue"
                  :select-value="value"
                  @year-click="handleYearSelect"></kv-date-year>
  </div>
</template>
<script>
import KvDateYear from "./year";
import KvDateMonth from "./month";
import KvDateDay from "./day";
import dateFns from "date-fns";

export default {
  name: "KvDateCalendar",
  componentName: "KvDateCalendar",
  components: { KvDateYear, KvDateMonth, KvDateDay },
  data() {
    return {
      view: "day",
      dateValue: this.date,
      prevView: null
    };
  },
  props: {
    date: {
      type: Date,
      required: true
    },
    value: [Date, Array]
  },
  methods: {
    handleDateSelect(date) {
      // TODO 保留时间
      this.$emit('input', date)
    },
    handleMonthSelect(date) {
      // TODO 月份选择还是日期选择
      const month = dateFns.getMonth(date)
      this.dateValue = dateFns.setMonth(this.dateValue, month)
      this.view = "day"
    },
    handleYearSelect(date) {
      // TODO 年份选择
      const year = dateFns.getYear(date)
      this.dateValue = dateFns.setYear(this.dateValue, year)
      this.view = this.prevView === "month" ? "month" : "day"
    }
  },
  watch: {
    view(view, prevView) {
      this.prevView = prevView;
    },
    date(value) {
      this.dateValue = value;
    }
  }
};
</script>
