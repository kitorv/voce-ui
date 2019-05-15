<template>
  <div class="kv-date-calendar">
    <kv-date-day v-if="view==='date'"
                 v-model="dateValue"
                 :select-value="selectValue"
                 @year-click="view='year'"
                 @month-click="view='month'"
                 @date-click="handleDateSelect"></kv-date-day>
    <kv-date-month v-if="view==='month'"
                   v-model="dateValue"
                   :select-value="selectValue"
                   @year-click="view='year'"
                   @month-click="handleMonthSelect"></kv-date-month>
    <kv-date-year v-if="view==='year'"
                  v-model="dateValue"
                  :select-value="selectValue"
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
      view: this.type,
      dateValue: this.date,
      prevView: null
    };
  },
  props: {
    date: {
      type: Date,
      required: true
    },
    selectValue: [Date, Array],
    type: {
      type: String,
      validator: function (value) {
        return ["year", "month", "date"].includes(value);
      },
      default: "date"
    }
  },
  methods: {
    handleDateSelect(date) {
      this.dateValue = date
      this.handleCellClick()
    },
    handleMonthSelect(date) {
      const month = dateFns.getMonth(date)
      this.dateValue = dateFns.setMonth(this.dateValue, month)
      // 月份选择直接赋值
      if (this.type === "month") {
        this.handleCellClick()
        return
      }
      this.view = "date"
    },
    handleYearSelect(date) {
      const year = dateFns.getYear(date)
      this.dateValue = dateFns.setYear(this.dateValue, year)
      // 年份选择直接赋值
      if (this.type === "year") {
        this.handleCellClick()
        return
      }
      this.view = this.prevView === "month" ? "month" : "date"
    },
    handleCellClick() {
      this.$emit('date-click', this.dateValue)
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
<style lang="scss">
.kv-date-calendar {
  width: 278px;
}
</style>

